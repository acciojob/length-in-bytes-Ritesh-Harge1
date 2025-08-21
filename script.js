function byteSize(str) {
  return Buffer.byteLength(str, 'utf8');
}

// Examples:
console.log(byteSize("hello world")); // 11
console.log(byteSize("안녕하세요"));   // 15
console.log(byteSize(""));            // 0
