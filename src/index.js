import { program } from "commander";
import fs from "fs-extra";
import path from "path";

import cinnabarData from "./cinnabar.js";
import { generateCss } from "./cssGenerator.js";
import { generateHtml } from "./htmlGenerator.js";

console.log(
  `\n${cinnabarData.stack.nodejs.package}@${cinnabarData.version.text}\n`,
);

program
  .name(cinnabarData.stack.nodejs.package)
  .version(`v${cinnabarData.version.text}`, "-v, --version")
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
const indexHtmlPath = path.join(outputPath, "index.html");
const styleCssPath = path.join(outputPath, "style.css");

fs.outputFileSync(indexHtmlPath, htmlContent);
fs.outputFileSync(styleCssPath, cssContent);

console.log(
  `\n'${data.title ?? "t2006 site"}' (${data.description ?? "-"}) has been generated at ${indexHtmlPath}`,
);
