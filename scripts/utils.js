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
