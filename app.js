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
const ZIP_FILE_NAME = "android_drawables.zip";
const DUPLICATE_NAME_START_COUNT = 1;
const DUPLICATE_NAME_INCREMENT = 1;
const FIRST_ITEM_INDEX = 0;
const NO_SELECTION_INDEX = -1;
const REMOVE_IMAGE_LABEL = "Remove image";
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

const dropzone = document.getElementById("dropzone");
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");
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

renderDensityList();
initializeFolderExport();

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

function renderFileList() {
  fileList.innerHTML = sourceItems.map((item, index) => `
    <article class="fileItem ${index === selectedPreviewIndex ? "active" : EMPTY_STRING}" ${PREVIEW_INDEX_ATTRIBUTE}="${index}">
      <img class="fileThumb" src="${escapeAttribute(item.previewUrl)}" alt="">
      <div class="fileMeta">
        <div class="fileName">${escapeText(item.sourceName)} - ${item.image.naturalWidth} x ${item.image.naturalHeight}px</div>
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

function renderMainPreview() {
  const selectedItem = getSelectedPreviewItem();

  if (!selectedItem) {
    previewImage.removeAttribute("src");
    previewImage.style.display = "none";
    emptyState.style.display = "block";
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

function deleteImage(index) {
  if (index < FIRST_ITEM_INDEX || index >= sourceItems.length) return;

  URL.revokeObjectURL(sourceItems[index].previewUrl);
  sourceItems.splice(index, ARRAY_INCREMENT);
  selectedPreviewIndex = getNextPreviewIndexAfterDelete(index);
  renderSelectionState();
  if (!sourceItems.length) setStatus(CLEAR_ALL_READY_TITLE, CLEAR_ALL_READY_META);
  else setStatus(IMAGES_READY_TITLE, getSelectedFileCountMeta());
}

function clearAllImages() {
  sourceItems.forEach((item) => URL.revokeObjectURL(item.previewUrl));
  sourceItems = [];
  selectedPreviewIndex = NO_SELECTION_INDEX;
  renderSelectionState();
  setStatus(CLEAR_ALL_READY_TITLE, CLEAR_ALL_READY_META);
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
  const resourceNames = getUniqueResourceNames(sourceItems);
  const nestedEntries = await Promise.all(sourceItems.map((item, index) => {
    return buildItemEntries(item, quality, resourceNames[index]);
  }));
  return nestedEntries.flat();
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
    if (deletedItemSet.has(item)) URL.revokeObjectURL(item.previewUrl);
  });
  sourceItems = sourceItems.filter((item) => !deletedItemSet.has(item));
  selectedPreviewIndex = getValidPreviewIndex(selectedPreviewIndex);
  renderSelectionState();
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
