// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "react-native-snippet-by-kuldeep" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('react-native-snippet-by-kuldeep.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from React Native Snippet by Kuldeep!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

// //====================
// // The module 'vscode' contains the VS Code extensibility API
// // Import the module and reference it with the alias vscode in your code below
// import * as vscode from "vscode";
// import { jsSnippets } from "./snippets/js-snippets.js"; // Import JS snippets
// import { tsSnippets } from "./snippets/ts-snippets.js"; // Import TS snippets

// // This method is called when your extension is activated
// // Your extension is activated the very first time the command is executed
// export function activate(context: vscode.ExtensionContext) {
//   // Use the console to output diagnostic information (console.log) and errors (console.error)
//   // This line of code will only be executed once when your extension is activated
//   console.log(
//     'Congratulations, your extension "react-native-snippet-by-kuldeep" is now active!'
//   );

//   // The command has been defined in the package.json file
//   // Now provide the implementation of the command with registerCommand
//   // The commandId parameter must match the command field in package.json
//   const disposable = vscode.commands.registerCommand(
//     "react-native-snippet-by-kuldeep.helloWorld",
//     () => {
//       // The code you place here will be executed every time your command is executed
//       const editor = vscode.window.activeTextEditor;
//       if (!editor) {
//         vscode.window.showInformationMessage("No active editor!");
//         return;
//       }

//       // Get the file type (.js, .jsx, .ts, .tsx)
//       const fileType = editor.document.languageId;

//       let snippet = "";

//       if (fileType === "javascript" || fileType === "javascriptreact") {
//         // JS or JSX file - load JS snippets
//         snippet = jsSnippets.componentTemplate; // Change to the appropriate JS snippet
//       } else if (fileType === "typescript" || fileType === "typescriptreact") {
//         // TS or TSX file - load TS snippets
//         snippet = tsSnippets.componentTemplate; // Change to the appropriate TS snippet
//       } else {
//         vscode.window.showInformationMessage("Unsupported file type");
//         return;
//       }

//       // Insert the correct snippet at the cursor position
//       editor.edit((editBuilder) => {
//         const position = editor.selection.active;
//         editBuilder.insert(position, snippet);
//       });

//       // Display a message box to the user
//       vscode.window.showInformationMessage(
//         "Hello World from React Native Snippet by Kuldeep!"
//       );
//     }
//   );

//   context.subscriptions.push(disposable);
// }

// // This method is called when your extension is deactivated
// export function deactivate() {}
