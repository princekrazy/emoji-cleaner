# 🧹 Emoji Cleaner

A Visual Studio Code extension that removes emoji characters from source code quickly and efficiently.

Whether you're cleaning copied code, preparing files for production, or enforcing coding standards, Emoji Cleaner provides simple commands to remove emojis from an entire file, a selected block of text, or a specific line range.

---

## Features

- Remove emojis from an entire file
- Remove emojis from selected text
- Remove emojis from a specified line range
- Fast, lightweight, and easy to use
- Built with the Visual Studio Code Extension API and TypeScript

## Installation

Install **Emoji Cleaner** from the Visual Studio Code Marketplace.

Or install manually:

1. Download the latest `.vsix` release.
2. Open Visual Studio Code.
3. Open the Command Palette (`Ctrl+Shift+P`).
4. Run:

```
Extensions: Install from VSIX...
```

5. Select the downloaded package.

---

## Usage

### Remove emojis from an entire file

Open the Command Palette and run:

```
Remove Emojis: Whole File
```

---

### Remove emojis from selected text

1. Highlight the desired code.
2. Open the Command Palette.
3. Run:

```
Remove Emojis: Selection
```

---

### Remove emojis from a line range

1. Open the Command Palette.
2. Run:

```
Remove Emojis: Line Range
```

3. Enter the starting and ending line numbers.

---

## Built With

- TypeScript
- Node.js
- Visual Studio Code Extension API

---

## Project Structure

```
src/
│
├── commands/
│   ├── cleanWholeFile.ts
│   ├── cleanSelection.ts
│   └── cleanLineRange.ts
│
├── emojiCleaner.ts
│
└── extension.ts
```

---

## Why I Built This

This project was created to learn the Visual Studio Code Extension API while building a practical developer tool.

The extension demonstrates:

- Command registration
- Text editor manipulation
- User input handling
- Workspace editing
- TypeScript development
- Extension packaging and publishing

---

## Contributing

Contributions, suggestions, and bug reports are welcome.

If you have an idea for an improvement, feel free to open an issue or submit a pull request.

---

## 📄 License

Licensed under the MIT License.

---

## Author

**Prince Kuvenga**
