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
