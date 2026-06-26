import * as vscode from "vscode";
import { removeEmojis } from "../emojiCleaner";

export async function cleanWholeFile() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const document = editor.document;
  const text = document.getText();

  const cleaned = removeEmojis(text);

  const fullRange = new vscode.Range(
    document.positionAt(0),
    document.positionAt(text.length),
  );

  await editor.edit((editBuilder) => {
    editBuilder.replace(fullRange, cleaned);
  });

  vscode.window.showInformationMessage("Removed emojis from entire file.");
}
