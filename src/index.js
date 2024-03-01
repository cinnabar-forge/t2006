import { program } from "commander";
import fs from "fs-extra";
import path from "path";

import { generateCss } from "./cssGenerator.js";
import { generateHtml } from "./htmlGenerator.js";

program
  .requiredOption("-i, --input <path>", "Path to data.json and style.json")
  .requiredOption(
    "-o, --output <path>",
    "Output path for the generated index.html and style.css files",
  );

program.parse(process.argv);

const options = program.opts();

const dataPath = path.resolve(options.input, "data.json");
console.log("Data path:", dataPath);
const data = fs.readJsonSync(dataPath);
const stylePath = path.resolve(options.input, "style.json");
console.log("Style path:", stylePath);
const style = fs.readJsonSync(stylePath);

const htmlContent = generateHtml(data);
const cssContent = generateCss(style);

const outputPath = path.resolve(options.output);

fs.outputFileSync(path.join(outputPath, "index.html"), htmlContent);
fs.outputFileSync(path.join(outputPath, "style.css"), cssContent);

console.log("Site has been generated at " + outputPath);
