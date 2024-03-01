import HtmlBuilder from "./htmlBuilder.js";

export function generateHtml(data) {
  const builder = new HtmlBuilder(2);

  data.sections.map((section) => {
    builder.add(`<div class="tr section">`).add(`<h2>${section.title}</h2>`);
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
      item.links.map((link) => {
        builder.add(`<a class="link" href="${link.url}">${link.text}</a>`);
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
    <h1 class="vertical"><img class="image-circle" src="${data.header.image}" />${data.header.name}</h1>
  ${builder.build()}
  </div>
</body>
</html>
`;
}
