import { expect } from "chai";

import { convertToHex } from "../src/colors.js";

describe("Color Conversion Tests", () => {
  describe("convertToHex function", () => {
    it("should correctly convert named colors to HEX", () => {
      expect(convertToHex("red")).to.equal("#ff0000");
      expect(convertToHex("rebeccapurple")).to.equal("#663399");
    });

    it("should return the same HEX value if input is already in HEX format", () => {
      expect(convertToHex("#ff0000")).to.equal("#ff0000");
      expect(convertToHex("#663399")).to.equal("#663399");
    });

    it("should correctly convert RGB colors to HEX", () => {
      expect(convertToHex("rgb(255, 0, 0)")).to.equal("#ff0000");
      expect(convertToHex("rgb(102, 51, 153)")).to.equal("#663399");
    });

    it("should correctly convert RGBA colors to HEXA", () => {
      expect(convertToHex("rgba(255, 0, 0, 1)")).to.equal("#ff0000ff");
      expect(convertToHex("rgba(102, 51, 153, 0.5)")).to.equal("#66339980");
    });

    it("should correctly convert HSL colors to HEX", () => {
      expect(convertToHex("hsl(0, 100%, 50%)")).to.equal("#ff0000");
      expect(convertToHex("hsl(270, 50%, 40%)")).to.equal("#663399");
    });

    it("should correctly convert HSLA colors to HEXA", () => {
      expect(convertToHex("hsla(0, 100%, 50%, 1)")).to.equal("#ff0000ff");
      expect(convertToHex("hsla(270, 50%, 40%, 0.5)")).to.equal("#66339980");
    });

    it("should handle invalid color formats gracefully", () => {
      expect(convertToHex("notacolor")).to.equal("notacolor");
    });
  });
});
