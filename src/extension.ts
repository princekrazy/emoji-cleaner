import * as vscode from "vscode";
import { cleanWholeFile } from "./commands/cleanWholeFile";
import { cleanSelection } from "./commands/cleanSelection";
import { cleanLineRange } from "./commands/cleanLineRange";

export function activate(context: vscode.ExtensionContext) {
  const wholeFileCmd = vscode.commands.registerCommand(
    "emoji-cleaner.cleanWholeFile",
    cleanWholeFile,
  );

  const selectionCmd = vscode.commands.registerCommand(
    "emoji-cleaner.cleanSelection",
    cleanSelection,
  );
  const lineRangeCmd = vscode.commands.registerCommand(
    "emoji-cleaner.cleanLineRange",
    cleanLineRange,
  );

  context.subscriptions.push(lineRangeCmd);

  context.subscriptions.push(wholeFileCmd, selectionCmd);
}

export function deactivate() {}
