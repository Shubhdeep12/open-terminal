// Import necessary VS Code APIs
import * as vscode from 'vscode';
import * as child_process from 'child_process';
import * as path from 'path';

// Activate function for the extension
export function activate(context: vscode.ExtensionContext) {
  // Register the activity bar command
  const disposable = vscode.commands.registerCommand('extension.openTerminal', () => {
    try {
      // Get the currently opened folder
      const folders = vscode.workspace.workspaceFolders;
      const folderPath = folders && folders.length > 0 ? folders[0].uri.fsPath : process.cwd();

      // Open the terminal
      openSystemTerminal(folderPath);
    } catch (error) {
      vscode.window.showErrorMessage(`Failed to open terminal`);
    }
  });

  // Add the activity bar icon
  context.subscriptions.push(
    vscode.window.registerWebviewPanelSerializer('terminalLauncher', {
      deserializeWebviewPanel: async () => {
        vscode.commands.executeCommand('extension.openTerminal');
      },
    })
  );

  // Register the activity bar view
  vscode.window.createTreeView('terminalLauncher', {
    treeDataProvider: new TerminalLauncherProvider(context),
    showCollapseAll: false,
  });

  context.subscriptions.push(disposable);
}

// Open the system terminal in the specified folder
function openSystemTerminal(folderPath: string) {
  const platform = process.platform;

  if (platform === 'win32') {
    child_process.exec(`start cmd.exe`, { cwd: folderPath });
  } else if (platform === 'darwin') {
    child_process.exec(`open -a Terminal`, { cwd: folderPath });
  } else if (platform === 'linux') {
    child_process.exec(`x-terminal-emulator`, { cwd: folderPath });
  } else {
    throw new Error('Unsupported platform');
  }
}

// Tree Data Provider for the Activity Bar
class TerminalLauncherProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
  constructor(private context: vscode.ExtensionContext) {}

  getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
    return element;
  }

  getChildren(): vscode.ProviderResult<vscode.TreeItem[]> {
    const openTerminalItem = new vscode.TreeItem(
      'Open Terminal',
      vscode.TreeItemCollapsibleState.None
    );
    openTerminalItem.command = {
      command: 'extension.openTerminal',
      title: 'Open Terminal',
    };

    return [openTerminalItem];
  }
}


// Deactivate function for the extension
export function deactivate() {}
