import { expect } from "chai";

import { getHtmlTagName, isHtmlTagClosed, seededRandom } from "../src/utils.js";

describe("Utils test", () => {
  describe("getHtmlTagName function", () => {
    it("should extract the tag name correctly", () => {
      expect(getHtmlTagName("<div>")).to.equal("div");
      expect(getHtmlTagName('<input type="text"/>')).to.equal("input");
    });

    it("should return null for strings without tags", () => {
      expect(getHtmlTagName("Just some text")).to.be.null;
    });
  });

  describe("isHtmlTagClosed function", () => {
    it("should correctly identify self-closing tags", () => {
      expect(isHtmlTagClosed("<br/>")).to.be.true;
      expect(isHtmlTagClosed('<input type="text"/>')).to.be.true;
    });

    it("should correctly identify non-self-closing tags with closing tags", () => {
      expect(isHtmlTagClosed("<div></div>")).to.be.true;
    });

    it("should return false for tags without a closing tag", () => {
      expect(isHtmlTagClosed("<div>")).to.be.false;
    });
  });

  describe("seededRandom function", () => {
    it("should return a number between 0 and 1", () => {
      const seed = 123;
      const result = seededRandom(seed);
      expect(result).to.be.a("number");
      expect(result).to.be.at.least(0);
      expect(result).to.be.below(1);
    });

    it("should return consistent results for the same seed", () => {
      const seed = 456;
      const result1 = seededRandom(seed);
      const result2 = seededRandom(seed);
      expect(result1).to.equal(result2);
    });

    it("should return different results for different seeds", () => {
      const seed1 = 789;
      const seed2 = 790;
      const result1 = seededRandom(seed1);
      const result2 = seededRandom(seed2);
      expect(result1).not.to.equal(result2);
    });
  });
});
