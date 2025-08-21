function byteSize(str) {
  if (typeof Blob !== "undefined") {
    // Browser / Node 15+ with Blob support
    return new Blob([str]).size;
  } else {
    // Node.js fallback
    return Buffer.byteLength(str, 'utf8');
  }
}
