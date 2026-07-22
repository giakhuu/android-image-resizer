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
