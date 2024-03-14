import HtmlBuilder from "./htmlBuilder.js";

export function generateHtml(data) {
  const builder = new HtmlBuilder(2);

  if (data.header != null) {
    builder.add("<div>");

    builder.add(`<h1 class="vertical">`);
    if (data.header.image != null) {
      builder.add(`<img class="image-circle" src="${data.header.image}" />`);
    }
    if (data.header.title != null) {
      builder.add(`<span>${data.header.title}</span>`);
    }
    builder.close();

    if (data.header.subtitle != null) {
      builder.add(`<div>${data.header.subtitle}</div>`);
    }

    if (data.header.about != null) {
      builder.add(`<div class="about">${data.header.about}</div>`);
    }

    builder.close();
  }

  data.sections.map((section) => {
    builder.add(`<div class="section">`).add(`<h2>${section.title}</h2>`);
    section.items.map((item) => {
      builder.add(`<div class="vertical">`);
      if (item.image) {
        if (typeof item.image === "object") {
          builder.add(
            `<img class="image-circle${item.image.darkFilter ? " dark-theme-filter" : ""}" src="${item.image.path}" />`,
          );
        } else {
          builder.add(`<img class="image-circle" src="${item.image}" />`);
        }
      }
      if (item.name != null) {
        builder.add(`<span class="bold">${item.name}</span>`);
      }
      item.links.map((link, index) => {
        builder.add(
          `<a class="link${index === 0 ? " left-buffer" : ""}" href="${link.url}">${link.text}</a>`,
        );
      });
      if (item.status != null) {
        builder.add(`<span class="italic small">${item.status}</span>`);
      }
      builder.close();
    });
    builder.close();
  });

  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${data.title}</title>
  <link rel="stylesheet" href="./style.css">
</head>

<body>
  <div class="block">
${builder.build()}
  </div>
</body>
</html>
`;
}
