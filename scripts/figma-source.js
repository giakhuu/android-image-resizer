function initializeFigmaTempExport() {
  const isSupported = isDirectoryPickerSupported();
  figmaTempRootBtn.disabled = !isSupported;
  figmaStatus.textContent = isSupported ? FIGMA_TEMP_NOT_SELECTED_META : FIGMA_TEMP_UNSUPPORTED_META;
  updateActionButtons();
}

function addFigmaLinkFromInputs() {
  try {
    const item = createFigmaSourceItem(figmaUrlInput.value);
    sourceItems = [...sourceItems, item];
    selectedPreviewIndex = sourceItems.length - ARRAY_INCREMENT;
    renderSelectionState();
    setStatus(FIGMA_ADD_READY_TITLE, FIGMA_ADD_READY_META);
  } catch (error) {
    setStatus(FIGMA_ADD_ERROR_TITLE, error.message, true);
  }
}

async function downloadSelectedFigmaPreview() {
  const selectedItem = getSelectedPreviewItem();

  if (selectedItem && isFigmaItem(selectedItem)) {
    await downloadFigmaPreview(selectedPreviewIndex);
    return;
  }

  try {
    const item = createFigmaSourceItem(figmaUrlInput.value);
    sourceItems = [...sourceItems, item];
    selectedPreviewIndex = sourceItems.length - ARRAY_INCREMENT;
    renderSelectionState();
    await downloadFigmaPreview(selectedPreviewIndex);
  } catch (error) {
    setStatus(FIGMA_DOWNLOAD_ERROR_TITLE, error.message, true);
  }
}

async function downloadFigmaPreview(index) {
  const item = sourceItems[index];
  if (!item || !isFigmaItem(item)) return;

  try {
    setWorking(true, FIGMA_PREVIEW_EXPORT_MODE);
    selectedPreviewIndex = index;
    await ensureFigmaItemImage(item);
    renderSelectionState();
    setStatus(FIGMA_PREVIEW_READY_TITLE, getSelectedFileCountMeta());
  } catch (error) {
    setStatus(FIGMA_DOWNLOAD_ERROR_TITLE, error.message, true);
  } finally {
    setWorking(false);
  }
}

function createFigmaSourceItem(figmaLink) {
  const parsedLink = parseFigmaLink(figmaLink);
  const sourceName = getFigmaSourceName(parsedLink);

  return {
    image: null,
    previewUrl: EMPTY_STRING,
    sourceName,
    resourceName: sourceName.replace(FILE_EXTENSION_PATTERN, EMPTY_STRING),
    fileHandle: null,
    sourceType: FIGMA_SOURCE_TYPE,
    figmaFileKey: parsedLink.fileKey,
    figmaNodeId: parsedLink.nodeId,
    tempDirectoryHandle: null,
    tempFileName: EMPTY_STRING,
  };
}

function parseFigmaLink(figmaLink) {
  if (!figmaLink.trim()) throw new Error(FIGMA_URL_REQUIRED_MESSAGE);

  const url = getFigmaUrl(figmaLink);
  const pathSegments = url.pathname.split(SLASH_PATTERN).filter(Boolean);
  const fileTypeIndex = pathSegments.findIndex((segment) => FIGMA_FILE_PATH_SEGMENTS.includes(segment));
  const fileKey = getFigmaFileKey(pathSegments, fileTypeIndex);
  const nodeId = url.searchParams.get(FIGMA_URL_NODE_ID_PARAM);

  if (!fileKey) throw new Error(FIGMA_FILE_KEY_REQUIRED_MESSAGE);
  if (!nodeId) throw new Error(FIGMA_NODE_REQUIRED_MESSAGE);

  return {
    fileKey,
    nodeId: nodeId.replace(FIGMA_NODE_DASH_PATTERN, FIGMA_NODE_SEPARATOR),
  };
}

function getFigmaUrl(figmaLink) {
  try {
    return new URL(figmaLink.trim());
  } catch (error) {
    throw new Error(FIGMA_URL_INVALID_MESSAGE);
  }
}

function getFigmaFileKey(pathSegments, fileTypeIndex) {
  if (fileTypeIndex === NO_SELECTION_INDEX) return EMPTY_STRING;

  const branchIndex = fileTypeIndex + 2;
  const branchKeyIndex = fileTypeIndex + 3;
  if (pathSegments[branchIndex] === FIGMA_BRANCH_SEGMENT) return pathSegments[branchKeyIndex] || EMPTY_STRING;

  return pathSegments[fileTypeIndex + ARRAY_INCREMENT] || EMPTY_STRING;
}

function getFigmaSourceName(parsedLink) {
  const normalizedNodeId = normalizeResourceName(parsedLink.nodeId) || FIGMA_UNKNOWN_FILE_NAME;
  return `${FIGMA_TEMP_FILE_PREFIX}_${normalizedNodeId}${PNG_EXTENSION}`;
}

async function ensureFigmaItemImage(item) {
  if (item.image && item.previewUrl) return item;

  const blob = await fetchFigmaPngBlob(item);
  const tempImage = await createFigmaTempImage(blob, item);

  try {
    const image = await loadImage(tempImage.previewUrl);
    item.image = image;
    item.previewUrl = tempImage.previewUrl;
    item.tempDirectoryHandle = tempImage.tempDirectoryHandle;
    item.tempFileName = tempImage.tempFileName;
    return item;
  } catch (error) {
    URL.revokeObjectURL(tempImage.previewUrl);
    await deleteFigmaTempFile(tempImage.tempDirectoryHandle, tempImage.tempFileName);
    throw error;
  }
}

async function fetchFigmaPngBlob(item) {
  const token = getFigmaToken();
  const imageApiUrl = new URL(`${FIGMA_API_BASE_URL}/${FIGMA_IMAGES_PATH}/${item.figmaFileKey}`);
  imageApiUrl.searchParams.set(FIGMA_IDS_QUERY, item.figmaNodeId);
  imageApiUrl.searchParams.set(FIGMA_FORMAT_QUERY, FIGMA_PNG_FORMAT);
  imageApiUrl.searchParams.set(FIGMA_SCALE_QUERY, FIGMA_EXPORT_SCALE);

  const response = await fetch(imageApiUrl, {
    headers: getFigmaAuthHeaders(token),
  });

  if (!response.ok) throw new Error(await getResponseErrorMessage(response));

  const payload = await response.json();
  const imageUrl = payload.images && payload.images[item.figmaNodeId];
  if (!imageUrl) throw new Error(payload.err || FIGMA_IMAGE_URL_MISSING_MESSAGE);

  const imageResponse = await fetch(imageUrl);
  if (!imageResponse.ok) throw new Error(FIGMA_IMAGE_DOWNLOAD_FAILED_MESSAGE);

  return imageResponse.blob();
}

function getFigmaToken() {
  const token = figmaTokenInput.value.trim();
  if (!token) throw new Error(FIGMA_TOKEN_REQUIRED_MESSAGE);
  return token;
}

function getFigmaAuthHeaders(token) {
  if (token.toLowerCase().startsWith(BEARER_PREFIX)) {
    return {
      [AUTHORIZATION_HEADER]: token,
    };
  }

  return {
    [FIGMA_TOKEN_HEADER]: token,
  };
}

async function getResponseErrorMessage(response) {
  try {
    const payload = await response.json();
    return payload.message || payload.err || response.statusText;
  } catch (error) {
    return response.statusText;
  }
}

async function createFigmaTempImage(blob, item) {
  const previewUrl = URL.createObjectURL(blob);

  if (!figmaTempDirectoryHandle) {
    return {
      previewUrl,
      tempDirectoryHandle: null,
      tempFileName: EMPTY_STRING,
    };
  }

  try {
    const tempFileName = getFigmaTempFileName(item);
    const fileHandle = await figmaTempDirectoryHandle.getFileHandle(tempFileName, CREATE_FILE_OPTIONS);
    const writable = await fileHandle.createWritable();
    await writable.write(blob);
    await writable.close();

    return {
      previewUrl,
      tempDirectoryHandle: figmaTempDirectoryHandle,
      tempFileName,
    };
  } catch (error) {
    URL.revokeObjectURL(previewUrl);
    throw error;
  }
}

function getFigmaTempFileName(item) {
  const resourceName = getResourceName(item);
  return `${resourceName}_${getFigmaTempSuffix()}${PNG_EXTENSION}`;
}

function getFigmaTempSuffix() {
  const browserCrypto = globalThis.crypto;
  if (browserCrypto && browserCrypto.randomUUID) return browserCrypto.randomUUID();
  return `${Date.now()}_${Math.round(Math.random() * TEMP_RANDOM_SUFFIX_MULTIPLIER)}`;
}

async function chooseFigmaTempRoot() {
  if (!isDirectoryPickerSupported()) return;

  try {
    const selectedHandle = await window[DIRECTORY_PICKER_API]({
      id: FIGMA_TEMP_ROOT_PICKER_ID,
      mode: DIRECTORY_PICKER_READ_WRITE_MODE,
    });
    const hasPermission = await ensureReadWritePermission(selectedHandle);

    if (!hasPermission) {
      figmaTempDirectoryHandle = null;
      figmaTempDisplayName = EMPTY_STRING;
      figmaStatus.textContent = FIGMA_TEMP_PERMISSION_DENIED_MESSAGE;
      updateActionButtons();
      return;
    }

    figmaTempDirectoryHandle = await selectedHandle.getDirectoryHandle(FIGMA_TEMP_FOLDER_NAME, CREATE_DIRECTORY_OPTIONS);
    figmaTempDisplayName = [selectedHandle.name, FIGMA_TEMP_FOLDER_NAME].join(PATH_SEPARATOR);
    figmaStatus.textContent = `${FIGMA_TEMP_SELECTED_PREFIX} ${figmaTempDisplayName}`;
    updateActionButtons();
  } catch (error) {
    if (error.name === ABORT_ERROR_NAME) return;
    setStatus(FIGMA_DOWNLOAD_ERROR_TITLE, error.message, true);
  }
}
