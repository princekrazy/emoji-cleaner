import * as vscode from "vscode";
import { removeEmojis } from "../emojiCleaner";

export async function cleanSelection() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const selection = editor.selection;

  if (selection.isEmpty) {
    vscode.window.showInformationMessage("No selection found.");
    return;
  }

  const text = editor.document.getText(selection);
  const cleaned = removeEmojis(text);

  await editor.edit((editBuilder) => {
    editBuilder.replace(selection, cleaned);
  });

  vscode.window.showInformationMessage("Removed emojis from selection.");
}
