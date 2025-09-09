export function getSubstringBetweenCharacters(originalString: string, startChar: string, endChar: any) {
  const startIndex = originalString.indexOf(startChar);
  if (startIndex === -1) {
    return "";
  }

  const adjustedStartIndex = startIndex + startChar.length;
  const endIndex = originalString.indexOf(endChar, adjustedStartIndex);

  if (endIndex === -1) {
    return "";
  }

  return originalString.substring(adjustedStartIndex, endIndex);
}