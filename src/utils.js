export function getHtmlTagName(htmlString) {
  const tagMatch = htmlString.match(new RegExp("<\\s*([^>\\s\\/]+)[^>]*>"));
  return tagMatch ? tagMatch[1] : null;
}

export function isHtmlTagClosed(htmlString) {
  if (htmlString.trim().endsWith("/>")) {
    return true;
  }

  const tagName = getHtmlTagName(htmlString);
  if (!tagName) {
    return false;
  }

  // eslint-disable-next-line security/detect-non-literal-regexp
  const closeTagRegex = new RegExp(`<\\/\\s*${tagName}\\s*>`, "i");
  return closeTagRegex.test(htmlString);
}

export function seededRandom(seed) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}
