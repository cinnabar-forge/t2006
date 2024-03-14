import { getHtmlTagName, isHtmlTagClosed } from "./utils.js";

export default class {
  lines = [];
  tree = [];

  constructor(initialIndentation) {
    this.indentation = initialIndentation || 0;
  }

  add(markup) {
    this.lines.push("  ".repeat(this.indentation) + markup);
    if (!isHtmlTagClosed(markup)) {
      this.indentation++;
      this.tree.push(getHtmlTagName(markup));
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
    return this;
  }

  raw(markup) {
    this.lines.push("  ".repeat(this.indentation) + markup);
  }
}
