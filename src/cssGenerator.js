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
  min-height: 100vh;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header {
  margin-top: 2em;
}

h2 {
  border-bottom: 1px dotted ${convertToHex(settings.colors.borderColor)};
  margin-bottom: 0.25em;
}

a {
  text-decoration: none;
  color: ${convertToHex(settings.colors.linkColor)};
  padding: 0 0.2em;
}

a:hover {
  text-decoration: dotted;
  background-color: ${convertToHex(settings.colors.linkHoverBackgroundColor)};
  color: ${convertToHex(settings.colors.linkHoverTextColor)};
}

section {
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5em;
  font-size: 1.2em;
}

footer {
  margin-top: 2em;
  margin-bottom: 1.5em;
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

.image-circle {
  height: 1em;
  width: 1em;
  shape-outside: circle();
  background-clip: content-box;
  border-radius: 50%;
  margin-right: 0.15em;
}

.subtext {
  color: ${settings.colors.subtextColor};
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}

.left-buffer {
  margin-left: 0.25em;
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

  a {
    color: ${convertToHex(settings.colorsDark.linkColor)};
  }

  a:hover {
    background-color: ${convertToHex(settings.colorsDark.linkHoverBackgroundColor)};
    color: ${convertToHex(settings.colorsDark.linkHoverTextColor)};
  }

  .subtext {
    color: ${settings.colorsDark.subtextColor};
  }

  .dark-theme-filter {
    filter: invert(100%);
  }
}
`;

  css.length;

  return css;
}
