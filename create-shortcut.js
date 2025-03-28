const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const os = require("os");

// Caminho para a área de trabalho do usuário
const desktopPath = path.join(os.homedir(), "Desktop");

// Caminho para o executável do aplicativo
const appPath = path.resolve(
  __dirname,
  "release/ExcalidrawDesktop-win32-x64/ExcalidrawDesktop.exe"
);

// Caminho para o ícone
const iconPath = path.resolve(__dirname, "assets/excalidraw.ico");

// Verificar se o executável existe
if (!fs.existsSync(appPath)) {
  console.error(`Executável não encontrado: ${appPath}`);
  process.exit(1);
}

// Criar um script VBScript para gerar o atalho
const vbsScript = `
Set oWS = WScript.CreateObject("WScript.Shell")
sLinkFile = "${desktopPath.replace(/\\/g, "\\\\")}\\\\Excalidraw Desktop.lnk"
Set oLink = oWS.CreateShortcut(sLinkFile)
oLink.TargetPath = "${appPath.replace(/\\/g, "\\\\")}"
oLink.IconLocation = "${iconPath.replace(/\\/g, "\\\\")}"
oLink.Save
`;

// Salvar o script VBScript em um arquivo temporário
const vbsPath = path.join(__dirname, "create-shortcut.vbs");
fs.writeFileSync(vbsPath, vbsScript);

try {
  // Executar o script VBScript
  console.log("Criando atalho na área de trabalho...");
  execSync(`cscript //nologo "${vbsPath}"`);
  console.log(`Atalho criado com sucesso na área de trabalho: ${desktopPath}`);
} catch (error) {
  console.error(`Erro ao criar atalho: ${error.message}`);
} finally {
  // Remover o arquivo temporário
  fs.unlinkSync(vbsPath);
}
