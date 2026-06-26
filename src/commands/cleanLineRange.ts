import * as vscode from "vscode";
import { removeEmojis } from "../emojiCleaner";

export async function cleanLineRange() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const document = editor.document;

  const startInput = await vscode.window.showInputBox({
    prompt: "Start line number (1-based)",
  });

  if (!startInput) return;

  const endInput = await vscode.window.showInputBox({
    prompt: "End line number (1-based)",
  });

  if (!endInput) return;

  const startLine = parseInt(startInput) - 1;
  const endLine = parseInt(endInput) - 1;

  if (isNaN(startLine) || isNaN(endLine)) {
    vscode.window.showErrorMessage("Invalid line numbers");
    return;
  }

  const startPos = new vscode.Position(startLine, 0);
  const endPos = document.lineAt(endLine).range.end;

  const range = new vscode.Range(startPos, endPos);

  const text = document.getText(range);
  const cleaned = removeEmojis(text);

  await editor.edit((editBuilder) => {
    editBuilder.replace(range, cleaned);
  });

  vscode.window.showInformationMessage(
    `Removed emojis from lines ${startLine + 1} to ${endLine + 1}`,
  );
}
