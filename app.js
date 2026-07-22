initializeApp();

function initializeApp() {
  renderInitialState();
  bindEventListeners();
}

function renderInitialState() {
  renderDensityList();
  initializeFolderExport();
  initializeFigmaTempExport();
}

function bindEventListeners() {
  const tabBtns = document.querySelectorAll(".tabBtn");
  const tabPanels = document.querySelectorAll(".tabPanel");
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabPanels.forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      const targetPanelId = btn.getAttribute("data-tab");
      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });

  dropzone.addEventListener("click", handleDropzoneClick);
  fileInput.addEventListener("change", handleFileInputChange);
  dropzone.addEventListener("dragover", handleDropzoneDragOver);
  dropzone.addEventListener("dragleave", handleDropzoneDragLeave);
  dropzone.addEventListener("drop", handleDropzoneDrop);
  fileList.addEventListener("input", handleFileListInput);
  fileList.addEventListener("click", handleFileListClick);
  includeDefaultInput.addEventListener("input", renderDensityList);
  clearAllBtn.addEventListener("click", clearAllImages);
  folderBtn.addEventListener("click", chooseAndroidFolder);
  figmaAddBtn.addEventListener("click", addFigmaLinkFromInputs);
  figmaPreviewBtn.addEventListener("click", downloadSelectedFigmaPreview);
  figmaTempRootBtn.addEventListener("click", chooseFigmaTempRoot);
  previewSelect.addEventListener("change", handlePreviewSelectChange);
  qualityInput.addEventListener("input", handleQualityInput);
  downloadBtn.addEventListener("click", handleDownloadZip);
  saveProjectBtn.addEventListener("click", handleSaveProject);
}

async function handleDropzoneClick(event) {
  if (!isOpenFilePickerSupported()) return;
  event.preventDefault();
  await chooseSourceImages();
}

function handleFileInputChange(event) {
  loadImageFiles(Array.from(event.target.files));
  event.target.value = EMPTY_STRING;
}

function handleDropzoneDragOver(event) {
  event.preventDefault();
  dropzone.classList.add("dragging");
}

function handleDropzoneDragLeave() {
  dropzone.classList.remove("dragging");
}

async function handleDropzoneDrop(event) {
  event.preventDefault();
  dropzone.classList.remove("dragging");
  await loadDroppedImages(event.dataTransfer);
}

function handleFileListInput(event) {
  if (!event.target.matches(FILE_INPUT_SELECTOR)) return;
  const index = Number(event.target.getAttribute(FILE_INDEX_ATTRIBUTE));
  sourceItems[index].resourceName = event.target.value;
  renderDensityList();
  renderPreviewSelect();
}

function handleFileListClick(event) {
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
}

function handlePreviewSelectChange(event) {
  selectPreviewImage(Number(event.target.value));
}

function handleQualityInput() {
  qualityValue.textContent = `${qualityInput.value}%`;
}

async function handleDownloadZip() {
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
}

async function handleSaveProject() {
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
}
