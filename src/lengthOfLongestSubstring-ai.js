function lengthOfLongestSubstring(s) {
  const chars = Array.from(s);
  const lastIndex = new Map();

  let start = 0;
  let longestLen = 0;

  for (let end = 0; end < chars.length; end++) {
    const char = chars[end];
    const previousIndex = lastIndex.get(char);

    if (previousIndex !== undefined) {
      start = Math.max(start, previousIndex + 1);
    }

    lastIndex.set(char, end);
    longestLen = Math.max(longestLen, end - start + 1);
  }

  return longestLen;
}
