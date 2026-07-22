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
