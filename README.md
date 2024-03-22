# t2006

_By Cinnabar Forge_

**DISCLAIMER**: Until version 1.0.0, all versions below should be considered unstable and are subject to change.

A small, low-opinionated static site generator for showcasing your projects.

You can change sections quantity, text, colors (dark-theme ready) and fonts for headers and text.

## Getting Started

### Installation

Install t2006 globally using npm:

```bash
npm install -g t2006
```

This will make the `t2006` command available in your terminal.

### Configuration

t2006 is driven by two main configuration files:

- `data.json`: Defines the structure and content of your site.
- `style.json`: Specifies the visual styling of your site.

Both files examples can be found inside `sample` folder.

#### `data.json` structure

```json
{
  "title": "My Portfolio",
  "header": {
    "name": "MY NAME"
  },
  "sections": [
    {
      "title": "SECTION NAME",
      "items": [
        {
          "name": "Text",
          "image": {
            "path": "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/beacon.svg"
          },
          "links": [
            {
              "text": "example link",
              "url": "https://example.com/"
            }
          ],
          "extra": "extra text"
        }
      ]
    }
  ]
}
```

### Usage

```bash
t2006 --input "path/to/json/data/files" --output "path/to/html/output"
```

#### `--input <path>`

**path**: A path with data.json and style.json.

#### `--output <path>`

**path**: A path where index.html and style.css are generated.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

Clone the repository and install dependencies:

```bash
git clone git@github.com:cinnabar-forge/t2006.git
cd t2006
npm install
```

## License

t2006 is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Authors

- Timur Moziev ([@TimurRin](https://github.com/TimurRin))
