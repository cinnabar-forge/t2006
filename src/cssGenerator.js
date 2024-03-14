import { convertToHex } from "./colors.js";

export function generateCss(settings) {
  let css = `* {
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: "source-sans-pro";
  font-style: normal;
  src: url("fonts/source-sans-pro.ttf");
}

body {
  font-family: ${settings.fontText.fontFamily};
  color: ${convertToHex(settings.colors.textColor || "black")};
  background-color: ${convertToHex(settings.colors.backgroundColor || "white")};
}

h2 {
  border-bottom: 1px dotted ${convertToHex(settings.colors.borderColor)};
  margin-bottom: 0.25em;
}

.link {
  text-decoration: none;
  color: ${convertToHex(settings.colors.linkColor)};
  padding: 0 0.2em;
}

.link:hover {
  text-decoration: dotted;
  background-color: ${convertToHex(settings.colors.linkHoverBackgroundColor)};
  color: ${convertToHex(settings.colors.linkHoverTextColor)};
}

.block {
  min-height: 100vh;
  padding: 2em 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.section {
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5em;
  font-size: 1.2em;
}

.about {
  margin: 1em 3em 0;
  font-size: 1.2em;
  max-width: 25em;
}

.vertical {
  display: flex;
  align-items: center;
  justify-content: center;
}

.vertical * {
  margin-left: 0.05em;
  margin-right: 0.05em;
}

.left-buffer {
  margin-left: 0.25em;
}

.dot {
  margin-left: 0.1em;
  margin-right: 0.1em;
  user-select: none;
}

.image-circle {
  height: 1em;
  width: 1em;
  shape-outside: circle();
  background-clip: content-box;
  border-radius: 50%;
  margin-right: 0.15em;
}

.right-space {
  margin-right: 0.3em;
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}

.small {
  font-size: small;
}

@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: only dark;
  }

  body {
    background-color: ${convertToHex(settings.colorsDark.backgroundColor)};
    color: ${convertToHex(settings.colorsDark.textColor)};
  }

  h2 {
    border-bottom-color: ${convertToHex(settings.colorsDark.borderColor)};
  }

  .link {
    color: ${convertToHex(settings.colorsDark.linkColor)};
  }

  .link:hover {
    background-color: ${convertToHex(settings.colorsDark.linkHoverBackgroundColor)};
    color: ${convertToHex(settings.colorsDark.linkHoverTextColor)};
  }

  .dark-theme-filter {
    filter: invert(100%);
  }
}
`;

  css.length;

  return css;
}
