import HtmlBuilder from "./htmlBuilder.js";

export function generateHtml(data) {
  const builder = new HtmlBuilder(1);

  if (data.header != null) {
    builder.add("<header>");
    builder.add(`<h1 class="vertical">`);
    if (data.header.image != null) {
      builder.add(
        `<img class="image-circle" style="height: 1em; width: 1em;" src="${data.header.image}" />`,
      );
    }
    if (data.header.title != null) {
      builder.add(`<span>${data.header.title}</span>`);
    }
    builder.close();

    if (data.header.subtitle != null) {
      builder.add(`<article>${data.header.subtitle}</article>`);
    }

    if (data.header.about != null) {
      builder.add(`<article class="about">${data.header.about}</article>`);
    }

    builder.close();
  }

  data.sections.map((section) => {
    builder.add(`<section>`).add(`<h2>${section.title}</h2>`);
    section.items.map((item) => {
      builder.add(`<p class="vertical">`);
      if (item.image) {
        if (typeof item.image === "object") {
          builder.add(
            `<img class="image-circle${item.image.darkFilter ? " dark-theme-filter" : ""}" style="height: 1em; width: 1em;" src="${item.image.path}" />`,
          );
        } else {
          builder.add(
            `<img class="image-circle" style="height: 1em; width: 1em;" src="${item.image}" />`,
          );
        }
      }
      if (item.name != null) {
        builder.add(`<span class="bold">${item.name}</span>`);
      }
      item.links.map((link, index) => {
        builder.add(
          `<a class="link${index === 0 ? " left-buffer" : ""}" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.text}</a>`,
        );
      });
      if (item.extra != null) {
        builder.add(`<span class="italic small">${item.extra}</span>`);
      }
      builder.close();
    });
    builder.close();
  });

  if (!data.beUngrateful) {
    builder
      .add(`<footer>`)
      .add(`<p>`)
      .add(
        `<span>Made with <a class="link" href="https://github.com/cinnabar-forge/t2006" target="_blank" rel="noopener noreferrer">t2006</a> in <span class="bold">${new Date().getFullYear()}</span></span>`,
      )
      .close()
      .close();
  }

  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="${data.description ?? "t2006 site"}">
  <title>${data.title}</title>
  <link rel="stylesheet" href="./style.css">
</head>

<body>
${builder.build()}
</body>
</html>
`;
}
