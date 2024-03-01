function getTagName(htmlString) {
  const tagMatch = htmlString.match(new RegExp("<\\s*([^>\\s\\/]+)[^>]*>"));
  return tagMatch ? tagMatch[1] : null;
}

function isTagClosed(htmlString) {
  if (htmlString.trim().endsWith("/>")) {
    return true;
  }

  const tagName = getTagName(htmlString);
  if (!tagName) {
    return false;
  }

  // eslint-disable-next-line security/detect-non-literal-regexp
  const closeTagRegex = new RegExp(`<\\/\\s*${tagName}\\s*>`, "i");
  return closeTagRegex.test(htmlString);
}

export default class {
  lines = [];
  tree = [];

  constructor(initialIndentation) {
    this.indentation = initialIndentation || 0;
  }

  add(markup) {
    this.lines.push("  ".repeat(this.indentation) + markup);
    if (!isTagClosed(markup)) {
      this.indentation++;
      this.tree.push(getTagName(markup));
    }

    return this;
  }

  build() {
    if (this.tree.length > 0) {
      throw new Error(
        `HTML is incorrect. Unmatched tag(s): ${this.tree.join(", ")}.`,
      );
    }
    return this.lines.join("\n");
  }

  close() {
    this.indentation--;
    const parentTag = this.tree.pop();
    this.lines.push("  ".repeat(this.indentation) + `</${parentTag}>`);
  }

  raw(markup) {
    this.lines.push("  ".repeat(this.indentation) + markup);
  }
}
