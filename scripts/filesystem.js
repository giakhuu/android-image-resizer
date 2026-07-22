function initializeFolderExport() {
  const isSupported = isDirectoryPickerSupported();
  folderBtn.disabled = !isSupported;
  folderStatus.textContent = isSupported ? NO_ANDROID_FOLDER_META : FOLDER_UNSUPPORTED_META;
  updateActionButtons();
}

async function chooseAndroidFolder() {
  if (!isDirectoryPickerSupported()) return;

  try {
    const selectedHandle = await window[DIRECTORY_PICKER_API]({
      id: DIRECTORY_PICKER_ID,
      mode: DIRECTORY_PICKER_READ_WRITE_MODE,
    });
    const target = await resolveAndroidResHandle(selectedHandle);

    if (!target) {
      androidResHandle = null;
      androidResDisplayName = EMPTY_STRING;
      folderStatus.textContent = ANDROID_FOLDER_NOT_FOUND_MESSAGE;
      updateActionButtons();
      return;
    }

    const hasPermission = await ensureReadWritePermission(target.handle);

    if (!hasPermission) {
      androidResHandle = null;
      androidResDisplayName = EMPTY_STRING;
      folderStatus.textContent = ANDROID_FOLDER_ACCESS_DENIED_MESSAGE;
      updateActionButtons();
      return;
    }

    androidResHandle = target.handle;
    androidResDisplayName = target.displayName;
    folderStatus.textContent = `${ANDROID_FOLDER_SELECTED_PREFIX} ${target.displayName}`;
    updateActionButtons();
    setStatus(ANDROID_FOLDER_SELECTED_TITLE, `${ANDROID_FOLDER_SELECTED_PREFIX} ${target.displayName}`);
  } catch (error) {
    if (error.name === ABORT_ERROR_NAME) return;
    setStatus(SAVE_PROJECT_ERROR_TITLE, error.message, true);
  }
}

async function resolveAndroidResHandle(selectedHandle) {
  if (selectedHandle.kind !== DIRECTORY_KIND) return null;
  if (selectedHandle.name === RES_FOLDER_NAME) {
    return {
      handle: selectedHandle,
      displayName: RES_FOLDER_NAME,
    };
  }

  for (const pathSegments of ANDROID_RES_PATHS) {
    const handle = await getExistingDirectoryHandle(selectedHandle, pathSegments);
    if (handle) {
      return {
        handle,
        displayName: [selectedHandle.name, ...pathSegments].join(PATH_SEPARATOR),
      };
    }
  }

  return null;
}

async function getExistingDirectoryHandle(rootHandle, pathSegments) {
  let currentHandle = rootHandle;

  for (const segment of pathSegments) {
    try {
      currentHandle = await currentHandle.getDirectoryHandle(segment);
    } catch (error) {
      return null;
    }
  }

  return currentHandle;
}

async function ensureReadWritePermission(handle) {
  const options = { mode: DIRECTORY_PICKER_READ_WRITE_MODE };
  if ((await handle.queryPermission(options)) === PERMISSION_GRANTED_STATUS) return true;
  return (await handle.requestPermission(options)) === PERMISSION_GRANTED_STATUS;
}

async function writeEntriesToAndroidRes(entries, resHandle) {
  const directoryPromises = new Map();

  await Promise.all(entries.map(async (entry) => {
    const pathParts = entry.path.split(PATH_SEPARATOR);
    const folderName = pathParts[PATH_FOLDER_INDEX];
    const fileName = pathParts[PATH_FILE_INDEX];

    if (!directoryPromises.has(folderName)) {
      directoryPromises.set(folderName, resHandle.getDirectoryHandle(folderName, CREATE_DIRECTORY_OPTIONS));
    }

    const directoryHandle = await directoryPromises.get(folderName);
    const fileHandle = await directoryHandle.getFileHandle(fileName, CREATE_FILE_OPTIONS);
    const writable = await fileHandle.createWritable();
    await writable.write(new Blob([entry.bytes], { type: WEBP_MIME_TYPE }));
    await writable.close();
  }));
}

async function deleteSourceFilesAfterSave(items) {
  const results = await Promise.allSettled(items.map(deleteSourceFile));
  const deletedItems = [];

  results.forEach((result, index) => {
    if (result.status === PROMISE_FULFILLED_STATUS) deletedItems.push(items[index]);
  });

  return {
    deletedItems,
    deletedCount: deletedItems.length,
    failedCount: results.length - deletedItems.length,
  };
}

async function deleteSourceFile(item) {
  if (isFigmaItem(item)) return;
  if (!item.fileHandle) throw new Error(SOURCE_DELETE_UNAVAILABLE_MESSAGE);
  if (typeof item.fileHandle.remove !== "function") throw new Error(SOURCE_DELETE_UNSUPPORTED_MESSAGE);
  const hasPermission = await ensureReadWritePermission(item.fileHandle);
  if (!hasPermission) throw new Error(SOURCE_DELETE_PERMISSION_DENIED_MESSAGE);
  await item.fileHandle.remove();
}

function removeDeletedSourceItems(deletedItems) {
  if (!deletedItems.length) return;

  const deletedItemSet = new Set(deletedItems);
  sourceItems.forEach((item) => {
    if (deletedItemSet.has(item)) cleanupSourceItem(item);
  });
  sourceItems = sourceItems.filter((item) => !deletedItemSet.has(item));
  selectedPreviewIndex = getValidPreviewIndex(selectedPreviewIndex);
  renderSelectionState();
}

async function cleanupSourceItem(item) {
  if (!item) return;
  if (isFigmaItem(item)) {
    await cleanupFigmaTempItem(item);
    return;
  }

  if (item.previewUrl) URL.revokeObjectURL(item.previewUrl);
}

async function cleanupFigmaTempItems(items) {
  await Promise.all(items.filter(isFigmaItem).map(cleanupFigmaTempItem));
}

async function cleanupFigmaTempItem(item) {
  if (!item.previewUrl && !item.tempFileName) return;

  if (item.previewUrl) URL.revokeObjectURL(item.previewUrl);
  await deleteFigmaTempFile(item.tempDirectoryHandle, item.tempFileName);
  item.image = null;
  item.previewUrl = EMPTY_STRING;
  item.tempDirectoryHandle = null;
  item.tempFileName = EMPTY_STRING;
}

async function deleteFigmaTempFile(directoryHandle, fileName) {
  if (!directoryHandle || !fileName) return;

  try {
    await directoryHandle.removeEntry(fileName);
  } catch (error) {
    throw new Error(FIGMA_TEMP_DELETE_FAILED_MESSAGE);
  }
}

function isFigmaItem(item) {
  return item && item.sourceType === FIGMA_SOURCE_TYPE;
}

function isDirectoryPickerSupported() {
  return DIRECTORY_PICKER_API in window;
}

function isOpenFilePickerSupported() {
  return OPEN_FILE_PICKER_API in window;
}
