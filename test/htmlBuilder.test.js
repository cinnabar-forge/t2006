import { expect } from "chai";

import HtmlBuilder from "../src/htmlBuilder.js";

describe("HTML Builder tests", () => {
  describe("HtmlBuilder class", () => {
    let builder;

    beforeEach(() => {
      builder = new HtmlBuilder();
    });

    it("should add markup correctly", () => {
      builder.add("<div>");
      expect(builder.lines).to.include("<div>");
    });

    it("should build HTML correctly without unmatched tags", () => {
      builder.add("<div>").close();
      expect(() => builder.build()).to.not.throw();
    });

    it("should throw an error if HTML is incorrect (unmatched tags)", () => {
      builder.add("<div>");
      expect(() => builder.build()).to.throw();
    });

    it("should handle indentation and tree structure correctly", () => {
      builder.add("<div>").add("<span>").close().close();
      expect(builder.lines.join("\n")).to.equal(
        "<div>\n  <span>\n  </span>\n</div>",
      );
      expect(builder.tree.length).to.equal(0);
    });

    it("should add raw markup correctly", () => {
      const rawMarkup = "Some text";
      builder.raw(rawMarkup);
      expect(builder.lines).to.include("Some text");
    });
  });
});
