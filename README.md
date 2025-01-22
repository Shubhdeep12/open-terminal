# VSCode Terminal Opener Extension

The **VSCode Terminal Opener** extension adds a custom icon to the Activity Bar in Visual Studio Code. Clicking the icon opens your system's default terminal for the currently opened workspace folder. If no folder is open, it defaults to the root directory.

## Features

- Adds an icon to the Activity Bar.
- Opens the system terminal in the workspace's root folder.
- Defaults to the system's root directory if no workspace is open.
- Supports Windows, macOS, and Linux.

## Installation

1. Download and install the extension from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/).
2. Reload or restart Visual Studio Code.

## Usage

1. Click on the terminal icon in the Activity Bar.
2. The system's default terminal will open in the folder of the currently active workspace.

### Commands

| Command                 | Description                                |
|-------------------------|--------------------------------------------|
| `Open Terminal`         | Opens the terminal in the current folder. |

## Supported Platforms

- Windows
- macOS
- Linux

## Development

### Prerequisites

- Install [Node.js](https://nodejs.org/).
- Install the latest version of Visual Studio Code.
- Clone this repository.

### Build and Test

1. Run `npm install` to install dependencies.
2. Use `npm run compile` to compile the TypeScript code.
3. Launch the extension in a debug instance by pressing `F5` in Visual Studio Code.

### Package for Distribution

Use `npx vsce package` to create a `.vsix` file that can be installed or published.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
s