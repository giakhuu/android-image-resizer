const DENSITIES = [
  { folder: "drawable-mdpi", label: "mdpi", scale: 1 },
  { folder: "drawable-hdpi", label: "hdpi", scale: 1.5 },
  { folder: "drawable-xhdpi", label: "xhdpi", scale: 2 },
  { folder: "drawable-xxhdpi", label: "xxhdpi", scale: 3 },
  { folder: "drawable-xxxhdpi", label: "xxxhdpi", scale: 4 },
];

const DEFAULT_FOLDER = "drawable";
const DEFAULT_DENSITY_INDEX = 0;
const SOURCE_DENSITY_LABEL = "xxxhdpi";
const FILE_EXTENSION = ".webp";
const ZIP_LOCAL_FILE_HEADER = 0x04034b50;
const ZIP_CENTRAL_FILE_HEADER = 0x02014b50;
const ZIP_END_OF_CENTRAL_DIRECTORY = 0x06054b50;
const ZIP_VERSION = 20;
const ZIP_UTF8_FLAG = 0x0800;
const ZIP_STORE_METHOD = 0;
const ZIP_LOCAL_HEADER_LENGTH = 30;
const ZIP_CENTRAL_HEADER_LENGTH = 46;
const ZIP_END_HEADER_LENGTH = 22;
const ZIP_LOCAL_SIGNATURE_OFFSET = 0;
const ZIP_LOCAL_VERSION_OFFSET = 4;
const ZIP_LOCAL_FLAGS_OFFSET = 6;
const ZIP_LOCAL_METHOD_OFFSET = 8;
const ZIP_LOCAL_TIME_OFFSET = 10;
const ZIP_LOCAL_DATE_OFFSET = 12;
const ZIP_LOCAL_CRC_OFFSET = 14;
const ZIP_LOCAL_COMPRESSED_SIZE_OFFSET = 18;
const ZIP_LOCAL_UNCOMPRESSED_SIZE_OFFSET = 22;
const ZIP_LOCAL_NAME_LENGTH_OFFSET = 26;
const ZIP_CENTRAL_SIGNATURE_OFFSET = 0;
const ZIP_CENTRAL_VERSION_MADE_BY_OFFSET = 4;
const ZIP_CENTRAL_VERSION_NEEDED_OFFSET = 6;
const ZIP_CENTRAL_FLAGS_OFFSET = 8;
const ZIP_CENTRAL_METHOD_OFFSET = 10;
const ZIP_CENTRAL_TIME_OFFSET = 12;
const ZIP_CENTRAL_DATE_OFFSET = 14;
const ZIP_CENTRAL_CRC_OFFSET = 16;
const ZIP_CENTRAL_COMPRESSED_SIZE_OFFSET = 20;
const ZIP_CENTRAL_UNCOMPRESSED_SIZE_OFFSET = 24;
const ZIP_CENTRAL_NAME_LENGTH_OFFSET = 28;
const ZIP_CENTRAL_LOCAL_OFFSET_OFFSET = 42;
const ZIP_END_SIGNATURE_OFFSET = 0;
const ZIP_END_DISK_ENTRY_COUNT_OFFSET = 8;
const ZIP_END_TOTAL_ENTRY_COUNT_OFFSET = 10;
const ZIP_END_CENTRAL_SIZE_OFFSET = 12;
const ZIP_END_CENTRAL_OFFSET_OFFSET = 16;
const DOS_TIME_SHIFT_HOURS = 11;
const DOS_TIME_SHIFT_MINUTES = 5;
const DOS_TIME_SHIFT_SECONDS = 1;
const DOS_DATE_SHIFT_YEAR = 9;
const DOS_DATE_SHIFT_MONTH = 5;
const DOS_YEAR_OFFSET = 1980;
const UINT32_MAX = 0xffffffff;
const CRC_POLYNOMIAL = 0xedb88320;
const CRC_BITS_PER_BYTE = 8;
const CRC_LOW_BIT = 1;
const ARRAY_INCREMENT = 1;
const WEBP_MIME_TYPE = "image/webp";
const ZIP_MIME_TYPE = "application/zip";
const ANDROID_RESOURCE_PATTERN = /[^a-z0-9_]/g;
const MULTIPLE_UNDERSCORES_PATTERN = /_+/g;
const EDGE_UNDERSCORE_PATTERN = /^_+|_+$/g;
const FILE_EXTENSION_PATTERN = /\.[^.]+$/;
const DEFAULT_ASSET_NAME = "image_asset";
const DEFAULT_QUALITY_DIVISOR = 100;
const EMPTY_STRING = "";
const FILE_INPUT_SELECTOR = ".resourceNameInput";
const FILE_INDEX_ATTRIBUTE = "data-file-index";
const PREVIEW_INDEX_ATTRIBUTE = "data-preview-index";
const DELETE_INDEX_ATTRIBUTE = "data-delete-index";
const FIGMA_PREVIEW_INDEX_ATTRIBUTE = "data-figma-preview-index";
const ZIP_FILE_NAME = "android_drawables.zip";
const DUPLICATE_NAME_START_COUNT = 1;
const DUPLICATE_NAME_INCREMENT = 1;
const FIRST_ITEM_INDEX = 0;
const NO_SELECTION_INDEX = -1;
const REMOVE_IMAGE_LABEL = "Remove image";
const EMPTY_PREVIEW_STATE = "Drop image here";
const IMAGES_READY_TITLE = "Images are ready";
const FILE_READ_ERROR_TITLE = "Some files could not be read";
const CLEAR_ALL_READY_TITLE = "Selection cleared";
const CLEAR_ALL_READY_META = "Choose or drop images to start again.";
const DOWNLOAD_READY_LABEL = "Download ZIP";
const DOWNLOAD_WORKING_LABEL = "Creating...";
const ZIP_ERROR_TITLE = "Could not create ZIP";
const SAVE_PROJECT_READY_LABEL = "Save to Android res";
const SAVE_PROJECT_WORKING_LABEL = "Saving...";
const NO_EXPORT_MODE = "";
const ZIP_EXPORT_MODE = "zip";
const PROJECT_EXPORT_MODE = "project";
const FIGMA_PREVIEW_EXPORT_MODE = "figma-preview";
const HTML_AMPERSAND_PATTERN = /&/g;
const HTML_LESS_THAN_PATTERN = /</g;
const HTML_GREATER_THAN_PATTERN = />/g;
const HTML_QUOTE_PATTERN = /"/g;
const HTML_APOSTROPHE_PATTERN = /'/g;
const HTML_AMPERSAND_ENTITY = "&amp;";
const HTML_LESS_THAN_ENTITY = "&lt;";
const HTML_GREATER_THAN_ENTITY = "&gt;";
const HTML_QUOTE_ENTITY = "&quot;";
const HTML_APOSTROPHE_ENTITY = "&#39;";
const PROMISE_FULFILLED_STATUS = "fulfilled";
const DIRECTORY_PICKER_API = "showDirectoryPicker";
const OPEN_FILE_PICKER_API = "showOpenFilePicker";
const DIRECTORY_PICKER_ID = "android-res-target";
const SOURCE_FILE_PICKER_ID = "source-images";
const DIRECTORY_PICKER_READ_WRITE_MODE = "readwrite";
const DIRECTORY_KIND = "directory";
const FILE_KIND = "file";
const DATA_TRANSFER_FILE_KIND = "file";
const DATA_TRANSFER_HANDLE_METHOD = "getAsFileSystemHandle";
const RES_FOLDER_NAME = "res";
const ANDROID_APP_RES_PATH = ["app", "src", "main", RES_FOLDER_NAME];
const ANDROID_MODULE_RES_PATH = ["src", "main", RES_FOLDER_NAME];
const DIRECT_RES_PATH = [RES_FOLDER_NAME];
const ANDROID_RES_PATHS = [ANDROID_APP_RES_PATH, ANDROID_MODULE_RES_PATH, DIRECT_RES_PATH];
const NO_ANDROID_FOLDER_META = "No Android folder selected.";
const FOLDER_UNSUPPORTED_META = "Folder export needs Chrome or Edge on localhost/HTTPS.";
const ANDROID_FOLDER_SELECTED_TITLE = "Android res selected";
const ANDROID_FOLDER_SELECTED_PREFIX = "Target:";
const ANDROID_FOLDER_NOT_FOUND_MESSAGE = "Pick the Android project root, module root, src/main, or the res folder.";
const ANDROID_FOLDER_ACCESS_DENIED_MESSAGE = "Folder access was not granted.";
const SAVE_PROJECT_SUCCESS_TITLE = "Saved to Android res";
const SAVE_PROJECT_ERROR_TITLE = "Could not save to Android res";
const SAVE_PROJECT_DELETE_PARTIAL_TITLE = "Saved, source delete incomplete";
const FILE_COUNT_LABEL = "file(s)";
const SOURCE_FILE_COUNT_LABEL = "source file(s)";
const OF_LABEL = "of";
const ADDED_LABEL = "added";
const WRITTEN_TO_LABEL = "written to";
const DELETED_LABEL = "deleted";
const COULD_NOT_DELETE_LABEL = "could not be deleted";
const SOURCE_DELETE_UNAVAILABLE_MESSAGE = "This source file cannot be deleted because it was selected without file-system access.";
const SOURCE_DELETE_UNSUPPORTED_MESSAGE = "This browser cannot delete source files from a file picker.";
const SOURCE_DELETE_PERMISSION_DENIED_MESSAGE = "Source file delete permission was not granted.";
const PERMISSION_GRANTED_STATUS = "granted";
const ABORT_ERROR_NAME = "AbortError";
const PATH_SEPARATOR = "/";
const PATH_FOLDER_INDEX = 0;
const PATH_FILE_INDEX = 1;
const CREATE_DIRECTORY_OPTIONS = { create: true };
const CREATE_FILE_OPTIONS = { create: true };
const IMAGE_FILE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp", ".svg"];
const IMAGE_FILE_ACCEPT_TYPE = "image/*";
const SOURCE_FILE_PICKER_OPTIONS = {
  id: SOURCE_FILE_PICKER_ID,
  multiple: true,
  types: [
    {
      description: "Image files",
      accept: {
        [IMAGE_FILE_ACCEPT_TYPE]: IMAGE_FILE_EXTENSIONS,
      },
    },
  ],
};
const FIGMA_SOURCE_TYPE = "figma";
const LOCAL_SOURCE_TYPE = "local";
const FIGMA_API_BASE_URL = "https://api.figma.com/v1";
const FIGMA_IMAGES_PATH = "images";
const FIGMA_TOKEN_HEADER = "X-Figma-Token";
const AUTHORIZATION_HEADER = "Authorization";
const BEARER_PREFIX = "bearer ";
const FIGMA_FORMAT_QUERY = "format";
const FIGMA_SCALE_QUERY = "scale";
const FIGMA_IDS_QUERY = "ids";
const FIGMA_PNG_FORMAT = "png";
const FIGMA_EXPORT_SCALE = "4";
const FIGMA_URL_NODE_ID_PARAM = "node-id";
const FIGMA_FILE_PATH_SEGMENTS = ["design", "file"];
const FIGMA_BRANCH_SEGMENT = "branch";
const FIGMA_NODE_DASH_PATTERN = /-/g;
const FIGMA_NODE_SEPARATOR = ":";
const FIGMA_TEMP_FOLDER_NAME = "image_temp";
const FIGMA_TEMP_ROOT_PICKER_ID = "figma-temp-root";
const PNG_EXTENSION = ".png";
const FIGMA_TEMP_FILE_PREFIX = "figma";
const FIGMA_THUMB_LABEL = "Figma";
const FIGMA_ADD_READY_TITLE = "Figma link added";
const FIGMA_ADD_READY_META = "Download preview to view it, or export to fetch the PNG 4x automatically.";
const FIGMA_PREVIEW_READY_TITLE = "Figma preview ready";
const FIGMA_PREVIEW_EMPTY_STATE = "Download preview first";
const FIGMA_PREVIEW_BUTTON_LABEL = "Preview";
const FIGMA_PREVIEW_MAIN_BUTTON_LABEL = "Download preview";
const FIGMA_PREVIEW_WORKING_LABEL = "Downloading...";
const FIGMA_ADD_ERROR_TITLE = "Could not add Figma link";
const FIGMA_DOWNLOAD_ERROR_TITLE = "Could not download Figma PNG";
const FIGMA_TOKEN_REQUIRED_MESSAGE = "Enter a Figma token first.";
const FIGMA_URL_REQUIRED_MESSAGE = "Enter a Figma item link first.";
const FIGMA_URL_INVALID_MESSAGE = "Enter a valid Figma item link.";
const FIGMA_NODE_REQUIRED_MESSAGE = "The Figma link must include a node-id.";
const FIGMA_FILE_KEY_REQUIRED_MESSAGE = "The Figma link must include a file key.";
const FIGMA_IMAGE_URL_MISSING_MESSAGE = "Figma did not return an image URL for this item.";
const FIGMA_IMAGE_DOWNLOAD_FAILED_MESSAGE = "The exported Figma PNG could not be downloaded.";
const FIGMA_TEMP_UNSUPPORTED_META = "image_temp needs Chrome or Edge on localhost/HTTPS.";
const FIGMA_TEMP_NOT_SELECTED_META = "No image_temp folder selected.";
const FIGMA_TEMP_SELECTED_PREFIX = "Temp:";
const FIGMA_TEMP_PERMISSION_DENIED_MESSAGE = "Temp folder access was not granted.";
const FIGMA_TEMP_DELETE_FAILED_MESSAGE = "Figma temp file could not be deleted.";
const FIGMA_UNKNOWN_FILE_NAME = "figma_item";
const FIGMA_DIMENSIONS_PENDING_LABEL = "PNG 4x not downloaded yet";
const FIGMA_DENSITY_PENDING_LABEL = "Download preview to calculate output sizes.";
const TEMP_RANDOM_SUFFIX_MULTIPLIER = Number.MAX_SAFE_INTEGER;
const SLASH_PATTERN = /\/+/g;

const dropzone = document.getElementById("dropzone");
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");
const figmaTokenInput = document.getElementById("figmaToken");
const figmaUrlInput = document.getElementById("figmaUrl");
const figmaAddBtn = document.getElementById("figmaAddBtn");
const figmaPreviewBtn = document.getElementById("figmaPreviewBtn");
const figmaTempRootBtn = document.getElementById("figmaTempRootBtn");
const figmaStatus = document.getElementById("figmaStatus");
const qualityInput = document.getElementById("quality");
const qualityValue = document.getElementById("qualityValue");
const includeDefaultInput = document.getElementById("includeDefault");
const deleteAfterSaveInput = document.getElementById("deleteAfterSave");
const downloadBtn = document.getElementById("downloadBtn");
const folderBtn = document.getElementById("folderBtn");
const saveProjectBtn = document.getElementById("saveProjectBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const previewImage = document.getElementById("previewImage");
const previewSelect = document.getElementById("previewSelect");
const emptyState = document.getElementById("emptyState");
const densityList = document.getElementById("densityList");
const statusTitle = document.getElementById("statusTitle");
const statusMeta = document.getElementById("statusMeta");
const folderStatus = document.getElementById("folderStatus");

let sourceItems = [];
let selectedPreviewIndex = NO_SELECTION_INDEX;
let isProcessingExport = false;
let activeExportMode = NO_EXPORT_MODE;
let androidResHandle = null;
let androidResDisplayName = EMPTY_STRING;
let figmaTempDirectoryHandle = null;
let figmaTempDisplayName = EMPTY_STRING;

renderDensityList();
initializeFolderExport();
initializeFigmaTempExport();

dropzone.addEventListener("click", async (event) => {
  if (!isOpenFilePickerSupported()) return;
  event.preventDefault();
  await chooseSourceImages();
});

fileInput.addEventListener("change", (event) => {
  loadImageFiles(Array.from(event.target.files));
  event.target.value = EMPTY_STRING;
});

dropzone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropzone.classList.add("dragging");
});

dropzone.addEventListener("dragleave", () => {
  dropzone.classList.remove("dragging");
});

dropzone.addEventListener("drop", async (event) => {
  event.preventDefault();
  dropzone.classList.remove("dragging");
  await loadDroppedImages(event.dataTransfer);
});

fileList.addEventListener("input", (event) => {
  if (!event.target.matches(FILE_INPUT_SELECTOR)) return;
  const index = Number(event.target.getAttribute(FILE_INDEX_ATTRIBUTE));
  sourceItems[index].resourceName = event.target.value;
  renderDensityList();
  renderPreviewSelect();
});

fileList.addEventListener("click", (event) => {
  const figmaPreviewButton = event.target.closest(`[${FIGMA_PREVIEW_INDEX_ATTRIBUTE}]`);
  if (figmaPreviewButton) {
    downloadFigmaPreview(Number(figmaPreviewButton.getAttribute(FIGMA_PREVIEW_INDEX_ATTRIBUTE)));
    return;
  }

  const deleteButton = event.target.closest(`[${DELETE_INDEX_ATTRIBUTE}]`);
  if (deleteButton) {
    deleteImage(Number(deleteButton.getAttribute(DELETE_INDEX_ATTRIBUTE)));
    return;
  }

  if (event.target.matches(FILE_INPUT_SELECTOR)) return;
  const fileItem = event.target.closest(`[${PREVIEW_INDEX_ATTRIBUTE}]`);
  if (!fileItem) return;
  selectPreviewImage(Number(fileItem.getAttribute(PREVIEW_INDEX_ATTRIBUTE)));
});

includeDefaultInput.addEventListener("input", renderDensityList);
clearAllBtn.addEventListener("click", clearAllImages);
folderBtn.addEventListener("click", chooseAndroidFolder);
figmaAddBtn.addEventListener("click", addFigmaLinkFromInputs);
figmaPreviewBtn.addEventListener("click", downloadSelectedFigmaPreview);
figmaTempRootBtn.addEventListener("click", chooseFigmaTempRoot);

previewSelect.addEventListener("change", (event) => {
  selectPreviewImage(Number(event.target.value));
});

qualityInput.addEventListener("input", () => {
  qualityValue.textContent = `${qualityInput.value}%`;
});

downloadBtn.addEventListener("click", async () => {
  if (!sourceItems.length) return;

  try {
    setWorking(true, ZIP_EXPORT_MODE);
    const entries = await buildWebpEntries();
    const zipBlob = createZip(entries);
    downloadBlob(zipBlob, ZIP_FILE_NAME);
  } catch (error) {
    setStatus(ZIP_ERROR_TITLE, error.message, true);
  } finally {
    setWorking(false);
  }
});

saveProjectBtn.addEventListener("click", async () => {
  if (!sourceItems.length || !androidResHandle) return;

  try {
    setWorking(true, PROJECT_EXPORT_MODE);
    const entries = await buildWebpEntries();
    await writeEntriesToAndroidRes(entries, androidResHandle);
    const saveMeta = getSaveProjectMeta(entries.length);

    if (deleteAfterSaveInput.checked) {
      const deleteSummary = await deleteSourceFilesAfterSave([...sourceItems]);
      removeDeletedSourceItems(deleteSummary.deletedItems);
      setStatus(
        deleteSummary.failedCount ? SAVE_PROJECT_DELETE_PARTIAL_TITLE : SAVE_PROJECT_SUCCESS_TITLE,
        getSaveProjectDeleteMeta(saveMeta, deleteSummary),
        Boolean(deleteSummary.failedCount),
      );
      return;
    }

    setStatus(SAVE_PROJECT_SUCCESS_TITLE, saveMeta);
  } catch (error) {
    setStatus(SAVE_PROJECT_ERROR_TITLE, error.message, true);
  } finally {
    setWorking(false);
  }
});

function initializeFolderExport() {
  const isSupported = isDirectoryPickerSupported();
  folderBtn.disabled = !isSupported;
  folderStatus.textContent = isSupported ? NO_ANDROID_FOLDER_META : FOLDER_UNSUPPORTED_META;
  updateActionButtons();
}

function initializeFigmaTempExport() {
  const isSupported = isDirectoryPickerSupported();
  figmaTempRootBtn.disabled = !isSupported;
  figmaStatus.textContent = isSupported ? FIGMA_TEMP_NOT_SELECTED_META : FIGMA_TEMP_UNSUPPORTED_META;
  updateActionButtons();
}

async function loadImageFiles(files) {
  const fileSources = files.map(normalizeFileSource);
  if (!fileSources.length) return;

  const results = await Promise.allSettled(fileSources.map(loadImageFile));
  const newItems = results
    .filter((result) => result.status === PROMISE_FULFILLED_STATUS)
    .map((result) => result.value);

  sourceItems = [...sourceItems, ...newItems];
  if (selectedPreviewIndex === NO_SELECTION_INDEX && sourceItems.length) selectedPreviewIndex = FIRST_ITEM_INDEX;
  updateActionButtons();
  renderFileList();
  renderPreviewSelect();
  renderMainPreview();
  renderDensityList();

  if (newItems.length === fileSources.length) setStatus(IMAGES_READY_TITLE, getSelectedFileCountMeta());
  else setStatus(FILE_READ_ERROR_TITLE, getFilesAddedMeta(newItems.length, fileSources.length), true);
}

async function loadImageFile(fileSource) {
  const { file, fileHandle } = fileSource;
  const imageUrl = URL.createObjectURL(file);

  try {
    const image = await loadImage(imageUrl);

    return {
      image,
      previewUrl: imageUrl,
      sourceName: file.name,
      resourceName: file.name.replace(FILE_EXTENSION_PATTERN, EMPTY_STRING),
      fileHandle,
      sourceType: LOCAL_SOURCE_TYPE,
    };
  } catch (error) {
    URL.revokeObjectURL(imageUrl);
    throw error;
  }
}

function normalizeFileSource(source) {
  if (source instanceof File) return createFileSource(source);
  return source;
}

function createFileSource(file, fileHandle = null) {
  return {
    file,
    fileHandle,
  };
}

async function chooseSourceImages() {
  try {
    const fileHandles = await window[OPEN_FILE_PICKER_API](SOURCE_FILE_PICKER_OPTIONS);
    const fileSources = await Promise.all(fileHandles.map(getPickerFileSource));
    await loadImageFiles(fileSources);
  } catch (error) {
    if (error.name === ABORT_ERROR_NAME) return;
    setStatus(FILE_READ_ERROR_TITLE, error.message, true);
  }
}

async function getPickerFileSource(fileHandle) {
  return createFileSource(await fileHandle.getFile(), fileHandle);
}

async function loadDroppedImages(dataTransfer) {
  const fileSources = await getDroppedFileSources(dataTransfer);
  await loadImageFiles(fileSources.length ? fileSources : Array.from(dataTransfer.files));
}

async function getDroppedFileSources(dataTransfer) {
  const transferItems = Array.from(dataTransfer.items || []);
  const fileItems = transferItems.filter((item) => item.kind === DATA_TRANSFER_FILE_KIND);
  if (!fileItems.length || typeof fileItems[FIRST_ITEM_INDEX][DATA_TRANSFER_HANDLE_METHOD] !== "function") return [];

  const fileSources = await Promise.all(fileItems.map(getDroppedFileSource));
  return fileSources.filter(Boolean);
}

async function getDroppedFileSource(item) {
  const fileHandle = await item[DATA_TRANSFER_HANDLE_METHOD]();
  if (!fileHandle || fileHandle.kind !== FILE_KIND) return null;
  return createFileSource(await fileHandle.getFile(), fileHandle);
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("This file is not a valid image."));
    image.src = src;
  });
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

function renderFileList() {
  fileList.innerHTML = sourceItems.map((item, index) => `
    <article class="fileItem ${index === selectedPreviewIndex ? "active" : EMPTY_STRING}" ${PREVIEW_INDEX_ATTRIBUTE}="${index}">
      ${renderFileThumb(item)}
      <div class="fileMeta">
        <div class="fileName">${escapeText(getFileMetaLabel(item))}</div>
        <div class="field">
          <label for="resourceName${index}">Resource file name</label>
          <input
            id="resourceName${index}"
            class="resourceNameInput"
            ${FILE_INDEX_ATTRIBUTE}="${index}"
            type="text"
            value="${escapeAttribute(item.resourceName)}"
          >
        </div>
        ${renderFigmaPreviewAction(item, index)}
      </div>
      <button
        class="deleteImageBtn"
        ${DELETE_INDEX_ATTRIBUTE}="${index}"
        type="button"
        aria-label="${REMOVE_IMAGE_LABEL}: ${escapeAttribute(item.sourceName)}"
        title="${REMOVE_IMAGE_LABEL}"
      >
        &times;
      </button>
    </article>
  `).join(EMPTY_STRING);
}

function renderFileThumb(item) {
  if (item.previewUrl) return `<img class="fileThumb" src="${escapeAttribute(item.previewUrl)}" alt="">`;

  return `
    <div class="fileThumb fileThumbEmpty" aria-hidden="true">
      ${FIGMA_THUMB_LABEL}
    </div>
  `;
}

function getFileMetaLabel(item) {
  if (!item.image) return `${item.sourceName} - ${FIGMA_DIMENSIONS_PENDING_LABEL}`;
  return `${item.sourceName} - ${item.image.naturalWidth} x ${item.image.naturalHeight}px`;
}

function renderFigmaPreviewAction(item, index) {
  if (!isFigmaItem(item) || item.image) return EMPTY_STRING;

  return `
    <div class="fileInlineActions">
      <button
        class="secondary neutral"
        ${FIGMA_PREVIEW_INDEX_ATTRIBUTE}="${index}"
        type="button"
      >
        ${FIGMA_PREVIEW_BUTTON_LABEL}
      </button>
    </div>
  `;
}

function renderMainPreview() {
  const selectedItem = getSelectedPreviewItem();

  if (!selectedItem || !selectedItem.previewUrl) {
    previewImage.removeAttribute("src");
    previewImage.style.display = "none";
    emptyState.style.display = "block";
    emptyState.textContent = selectedItem && isFigmaItem(selectedItem) ? FIGMA_PREVIEW_EMPTY_STATE : EMPTY_PREVIEW_STATE;
    return;
  }

  previewImage.src = selectedItem.previewUrl;
  previewImage.style.display = "block";
  emptyState.style.display = "none";
}

function renderDensityList() {
  const selectedItem = getSelectedPreviewItem();

  if (!selectedItem) {
    densityList.innerHTML = getOutputSpecs(1, 1).map((spec) => renderDensityItem(spec, DEFAULT_ASSET_NAME)).join(EMPTY_STRING);
    return;
  }

  if (!selectedItem.image) {
    densityList.innerHTML = renderDensityPendingItem(getResourceName(selectedItem));
    return;
  }

  const fileName = `${getResourceName(selectedItem)}${FILE_EXTENSION}`;
  densityList.innerHTML = getOutputSpecs(selectedItem.image.naturalWidth, selectedItem.image.naturalHeight)
    .map((spec) => renderDensityItem(spec, fileName))
    .join(EMPTY_STRING);
}

function renderPreviewSelect() {
  previewSelect.disabled = !sourceItems.length;
  previewSelect.innerHTML = sourceItems.length
    ? sourceItems.map((item, index) => {
      const selected = index === selectedPreviewIndex ? "selected" : EMPTY_STRING;
      return `<option value="${index}" ${selected}>${escapeText(getDisplayName(item))}</option>`;
    }).join(EMPTY_STRING)
    : "<option>No image selected</option>";
}

function selectPreviewImage(index) {
  selectedPreviewIndex = getValidPreviewIndex(index);
  renderFileList();
  renderPreviewSelect();
  renderMainPreview();
  renderDensityList();
}

async function deleteImage(index) {
  if (index < FIRST_ITEM_INDEX || index >= sourceItems.length) return;

  const removedItems = sourceItems.splice(index, ARRAY_INCREMENT);
  let cleanupError = null;
  try {
    await cleanupSourceItem(removedItems[FIRST_ITEM_INDEX]);
  } catch (error) {
    cleanupError = error;
  }
  selectedPreviewIndex = getNextPreviewIndexAfterDelete(index);
  renderSelectionState();
  if (cleanupError) setStatus(FIGMA_DOWNLOAD_ERROR_TITLE, cleanupError.message, true);
  else if (!sourceItems.length) setStatus(CLEAR_ALL_READY_TITLE, CLEAR_ALL_READY_META);
  else setStatus(IMAGES_READY_TITLE, getSelectedFileCountMeta());
}

async function clearAllImages() {
  let cleanupError = null;
  try {
    await Promise.all(sourceItems.map(cleanupSourceItem));
  } catch (error) {
    cleanupError = error;
  }
  sourceItems = [];
  selectedPreviewIndex = NO_SELECTION_INDEX;
  renderSelectionState();
  if (cleanupError) setStatus(FIGMA_DOWNLOAD_ERROR_TITLE, cleanupError.message, true);
  else setStatus(CLEAR_ALL_READY_TITLE, CLEAR_ALL_READY_META);
}

function renderSelectionState() {
  updateActionButtons();
  renderFileList();
  renderPreviewSelect();
  renderMainPreview();
  renderDensityList();
}

function updateActionButtons() {
  const hasImages = Boolean(sourceItems.length);
  downloadBtn.disabled = isProcessingExport || !hasImages;
  saveProjectBtn.disabled = isProcessingExport || !hasImages || !androidResHandle;
  clearAllBtn.disabled = isProcessingExport || !hasImages;
  folderBtn.disabled = isProcessingExport || !isDirectoryPickerSupported();
  figmaAddBtn.disabled = isProcessingExport;
  figmaPreviewBtn.disabled = isProcessingExport;
  figmaTempRootBtn.disabled = isProcessingExport || !isDirectoryPickerSupported();
  figmaPreviewBtn.textContent = activeExportMode === FIGMA_PREVIEW_EXPORT_MODE ? FIGMA_PREVIEW_WORKING_LABEL : FIGMA_PREVIEW_MAIN_BUTTON_LABEL;
}

function getNextPreviewIndexAfterDelete(deletedIndex) {
  if (!sourceItems.length) return NO_SELECTION_INDEX;
  if (selectedPreviewIndex < deletedIndex) return selectedPreviewIndex;
  if (selectedPreviewIndex === deletedIndex) return Math.min(deletedIndex, sourceItems.length - ARRAY_INCREMENT);
  return selectedPreviewIndex - ARRAY_INCREMENT;
}

function getSelectedPreviewItem() {
  selectedPreviewIndex = getValidPreviewIndex(selectedPreviewIndex);
  if (selectedPreviewIndex === NO_SELECTION_INDEX) return null;
  return sourceItems[selectedPreviewIndex];
}

function getValidPreviewIndex(index) {
  if (!sourceItems.length) return NO_SELECTION_INDEX;
  if (index < FIRST_ITEM_INDEX || index >= sourceItems.length) return FIRST_ITEM_INDEX;
  return index;
}

function renderDensityItem(spec, fileName) {
  const path = `${spec.folder}/${fileName}`;

  return `
    <article class="densityItem">
      <div class="densityName">
        <span>${spec.label}</span>
        <span>${spec.scale}x</span>
      </div>
      <div class="densitySize">${spec.width} x ${spec.height}px</div>
      <div class="densityPath">${path}</div>
    </article>
  `;
}

function renderDensityPendingItem(resourceName) {
  return `
    <article class="densityItem full">
      <div class="densityName">
        <span>${escapeText(resourceName)}</span>
        <span>${FIGMA_EXPORT_SCALE}x</span>
      </div>
      <div class="densitySize">${FIGMA_DIMENSIONS_PENDING_LABEL}</div>
      <div class="densityPath">${FIGMA_DENSITY_PENDING_LABEL}</div>
    </article>
  `;
}

function getOutputSpecs(sourceWidth, sourceHeight) {
  const sourceScale = DENSITIES.find((density) => density.label === SOURCE_DENSITY_LABEL).scale;
  const specs = DENSITIES.map((density) => ({
    ...density,
    width: Math.max(1, Math.round(sourceWidth * density.scale / sourceScale)),
    height: Math.max(1, Math.round(sourceHeight * density.scale / sourceScale)),
  }));

  if (!includeDefaultInput.checked) return specs;

  return [
    {
      folder: DEFAULT_FOLDER,
      label: "default",
      scale: specs[DEFAULT_DENSITY_INDEX].scale,
      width: specs[DEFAULT_DENSITY_INDEX].width,
      height: specs[DEFAULT_DENSITY_INDEX].height,
    },
    ...specs,
  ];
}

async function buildWebpEntries() {
  const quality = Number(qualityInput.value) / DEFAULT_QUALITY_DIVISOR;
  const exportItems = [...sourceItems];
  let exportError = null;

  try {
    await Promise.all(exportItems.map(prepareSourceItemForResize));
    const resourceNames = getUniqueResourceNames(exportItems);
    const nestedEntries = await Promise.all(exportItems.map((item, index) => {
      return buildItemEntries(item, quality, resourceNames[index]);
    }));
    return nestedEntries.flat();
  } catch (error) {
    exportError = error;
    throw error;
  } finally {
    try {
      await cleanupFigmaTempItems(exportItems);
    } catch (error) {
      if (!exportError) throw error;
    }
    renderSelectionState();
  }
}

async function prepareSourceItemForResize(item) {
  if (isFigmaItem(item)) await ensureFigmaItemImage(item);
  return item;
}

async function buildItemEntries(item, quality, resourceName) {
  const fileName = `${resourceName}${FILE_EXTENSION}`;
  const specs = getOutputSpecs(item.image.naturalWidth, item.image.naturalHeight);

  return Promise.all(specs.map(async (spec) => {
    const blob = await resizeToWebp(item.image, spec.width, spec.height, quality);
    return {
      path: `${spec.folder}/${fileName}`,
      bytes: new Uint8Array(await blob.arrayBuffer()),
    };
  }));
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

function resizeToWebp(image, width, height, quality) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.clearRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("This browser cannot export WebP from Canvas."));
    }, WEBP_MIME_TYPE, quality);
  });
}

function createZip(entries) {
  const now = new Date();
  const { time, date } = getDosDateTime(now);
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  entries.forEach((entry) => {
    const nameBytes = new TextEncoder().encode(entry.path);
    const crc = crc32(entry.bytes);
    const localHeader = new Uint8Array(ZIP_LOCAL_HEADER_LENGTH + nameBytes.length);
    const localView = new DataView(localHeader.buffer);
    localView.setUint32(ZIP_LOCAL_SIGNATURE_OFFSET, ZIP_LOCAL_FILE_HEADER, true);
    localView.setUint16(ZIP_LOCAL_VERSION_OFFSET, ZIP_VERSION, true);
    localView.setUint16(ZIP_LOCAL_FLAGS_OFFSET, ZIP_UTF8_FLAG, true);
    localView.setUint16(ZIP_LOCAL_METHOD_OFFSET, ZIP_STORE_METHOD, true);
    localView.setUint16(ZIP_LOCAL_TIME_OFFSET, time, true);
    localView.setUint16(ZIP_LOCAL_DATE_OFFSET, date, true);
    localView.setUint32(ZIP_LOCAL_CRC_OFFSET, crc, true);
    localView.setUint32(ZIP_LOCAL_COMPRESSED_SIZE_OFFSET, entry.bytes.length, true);
    localView.setUint32(ZIP_LOCAL_UNCOMPRESSED_SIZE_OFFSET, entry.bytes.length, true);
    localView.setUint16(ZIP_LOCAL_NAME_LENGTH_OFFSET, nameBytes.length, true);
    localHeader.set(nameBytes, ZIP_LOCAL_HEADER_LENGTH);
    localParts.push(localHeader, entry.bytes);

    const centralHeader = new Uint8Array(ZIP_CENTRAL_HEADER_LENGTH + nameBytes.length);
    const centralView = new DataView(centralHeader.buffer);
    centralView.setUint32(ZIP_CENTRAL_SIGNATURE_OFFSET, ZIP_CENTRAL_FILE_HEADER, true);
    centralView.setUint16(ZIP_CENTRAL_VERSION_MADE_BY_OFFSET, ZIP_VERSION, true);
    centralView.setUint16(ZIP_CENTRAL_VERSION_NEEDED_OFFSET, ZIP_VERSION, true);
    centralView.setUint16(ZIP_CENTRAL_FLAGS_OFFSET, ZIP_UTF8_FLAG, true);
    centralView.setUint16(ZIP_CENTRAL_METHOD_OFFSET, ZIP_STORE_METHOD, true);
    centralView.setUint16(ZIP_CENTRAL_TIME_OFFSET, time, true);
    centralView.setUint16(ZIP_CENTRAL_DATE_OFFSET, date, true);
    centralView.setUint32(ZIP_CENTRAL_CRC_OFFSET, crc, true);
    centralView.setUint32(ZIP_CENTRAL_COMPRESSED_SIZE_OFFSET, entry.bytes.length, true);
    centralView.setUint32(ZIP_CENTRAL_UNCOMPRESSED_SIZE_OFFSET, entry.bytes.length, true);
    centralView.setUint16(ZIP_CENTRAL_NAME_LENGTH_OFFSET, nameBytes.length, true);
    centralView.setUint32(ZIP_CENTRAL_LOCAL_OFFSET_OFFSET, offset, true);
    centralHeader.set(nameBytes, ZIP_CENTRAL_HEADER_LENGTH);
    centralParts.push(centralHeader);

    offset += localHeader.length + entry.bytes.length;
  });

  const centralSize = centralParts.reduce((sum, part) => sum + part.length, 0);
  const endHeader = new Uint8Array(ZIP_END_HEADER_LENGTH);
  const endView = new DataView(endHeader.buffer);
  endView.setUint32(ZIP_END_SIGNATURE_OFFSET, ZIP_END_OF_CENTRAL_DIRECTORY, true);
  endView.setUint16(ZIP_END_DISK_ENTRY_COUNT_OFFSET, entries.length, true);
  endView.setUint16(ZIP_END_TOTAL_ENTRY_COUNT_OFFSET, entries.length, true);
  endView.setUint32(ZIP_END_CENTRAL_SIZE_OFFSET, centralSize, true);
  endView.setUint32(ZIP_END_CENTRAL_OFFSET_OFFSET, offset, true);

  return new Blob([...localParts, ...centralParts, endHeader], { type: ZIP_MIME_TYPE });
}

function crc32(bytes) {
  let crc = UINT32_MAX;

  for (let index = 0; index < bytes.length; index += ARRAY_INCREMENT) {
    crc ^= bytes[index];
    for (let bit = 0; bit < CRC_BITS_PER_BYTE; bit += ARRAY_INCREMENT) {
      crc = (crc >>> CRC_LOW_BIT) ^ (CRC_POLYNOMIAL & -(crc & CRC_LOW_BIT));
    }
  }

  return (crc ^ UINT32_MAX) >>> 0;
}

function getDosDateTime(value) {
  const time = (value.getHours() << DOS_TIME_SHIFT_HOURS)
    | (value.getMinutes() << DOS_TIME_SHIFT_MINUTES)
    | (value.getSeconds() >> DOS_TIME_SHIFT_SECONDS);
  const date = ((value.getFullYear() - DOS_YEAR_OFFSET) << DOS_DATE_SHIFT_YEAR)
    | ((value.getMonth() + 1) << DOS_DATE_SHIFT_MONTH)
    | value.getDate();
  return { time, date };
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function getResourceName(item) {
  return normalizeResourceName(item.resourceName) || DEFAULT_ASSET_NAME;
}

function getDisplayName(item) {
  return item.resourceName || DEFAULT_ASSET_NAME;
}

function getSelectedFileCountMeta() {
  return `${sourceItems.length} file(s) selected`;
}

function getFilesAddedMeta(addedCount, totalCount) {
  return `${addedCount} ${OF_LABEL} ${totalCount} ${FILE_COUNT_LABEL} ${ADDED_LABEL}`;
}

function getSaveProjectMeta(entryCount) {
  return `${entryCount} ${FILE_COUNT_LABEL} ${WRITTEN_TO_LABEL} ${androidResDisplayName}.`;
}

function getSaveProjectDeleteMeta(saveMeta, deleteSummary) {
  if (!deleteSummary.failedCount) {
    return `${saveMeta} ${deleteSummary.deletedCount} ${SOURCE_FILE_COUNT_LABEL} ${DELETED_LABEL}.`;
  }

  return `${saveMeta} ${deleteSummary.deletedCount} ${SOURCE_FILE_COUNT_LABEL} ${DELETED_LABEL}, ${deleteSummary.failedCount} ${COULD_NOT_DELETE_LABEL}.`;
}

function normalizeResourceName(value) {
  return value
    .toLowerCase()
    .replace(FILE_EXTENSION_PATTERN, EMPTY_STRING)
    .replace(ANDROID_RESOURCE_PATTERN, "_")
    .replace(MULTIPLE_UNDERSCORES_PATTERN, "_")
    .replace(EDGE_UNDERSCORE_PATTERN, EMPTY_STRING);
}

function getUniqueResourceNames(items) {
  const counts = new Map();

  return items.map((item) => {
    const resourceName = getResourceName(item);
    const count = counts.get(resourceName) || DUPLICATE_NAME_START_COUNT;
    counts.set(resourceName, count + DUPLICATE_NAME_INCREMENT);
    if (count === DUPLICATE_NAME_START_COUNT) return resourceName;
    return `${resourceName}_${count}`;
  });
}

function escapeText(value) {
  return String(value)
    .replace(HTML_AMPERSAND_PATTERN, HTML_AMPERSAND_ENTITY)
    .replace(HTML_LESS_THAN_PATTERN, HTML_LESS_THAN_ENTITY)
    .replace(HTML_GREATER_THAN_PATTERN, HTML_GREATER_THAN_ENTITY);
}

function escapeAttribute(value) {
  return escapeText(value)
    .replace(HTML_QUOTE_PATTERN, HTML_QUOTE_ENTITY)
    .replace(HTML_APOSTROPHE_PATTERN, HTML_APOSTROPHE_ENTITY);
}

function setWorking(isWorking, mode = NO_EXPORT_MODE) {
  isProcessingExport = isWorking;
  activeExportMode = isWorking ? mode : NO_EXPORT_MODE;
  updateActionButtons();
  downloadBtn.textContent = activeExportMode === ZIP_EXPORT_MODE ? DOWNLOAD_WORKING_LABEL : DOWNLOAD_READY_LABEL;
  saveProjectBtn.textContent = activeExportMode === PROJECT_EXPORT_MODE ? SAVE_PROJECT_WORKING_LABEL : SAVE_PROJECT_READY_LABEL;
}

function setStatus(title, meta, isError = false) {
  statusTitle.textContent = title;
  statusTitle.classList.toggle("error", isError);
  statusMeta.textContent = meta;
}
