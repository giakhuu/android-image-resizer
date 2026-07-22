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
