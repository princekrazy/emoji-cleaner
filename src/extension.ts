import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "emoji-cleaner.removeEmojis",
    async () => {
      const editor = vscode.window.activeTextEditor;

      if (!editor) {
        return;
      }

      const document = editor.document;
      const text = document.getText();

      const cleaned = text.replace(/[\p{Extended_Pictographic}]/gu, "");

      const fullRange = new vscode.Range(
        document.positionAt(0),
        document.positionAt(text.length),
      );

      await editor.edit((editBuilder) => {
        editBuilder.replace(fullRange, cleaned);
      });

      vscode.window.showInformationMessage("Emojis removed!");
    },
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
