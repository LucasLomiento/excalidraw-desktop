const createWindowsInstaller =
  require("electron-winstaller").createWindowsInstaller;
const path = require("path");
const fs = require("fs");

async function buildInstaller() {
  console.log("Iniciando a criação do instalador...");

  // Verificar se o diretório de origem existe
  const appDirectory = path.join(
    __dirname,
    "release/ExcalidrawDesktop-win32-x64"
  );
  if (!fs.existsSync(appDirectory)) {
    console.error(`Diretório da aplicação não encontrado: ${appDirectory}`);
    return;
  }
  console.log(`Diretório da aplicação encontrado: ${appDirectory}`);

  // Garantir que o diretório de saída exista
  const outputDirectory = path.join(__dirname, "installers");
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
    console.log(`Diretório de saída criado: ${outputDirectory}`);
  } else {
    console.log(`Diretório de saída já existe: ${outputDirectory}`);
  }

  // Usar o PNG como ícone (electron-winstaller pode converter automaticamente)
  const iconPath = path.join(__dirname, "assets/excalidrawicon.png");
  if (!fs.existsSync(iconPath)) {
    console.error(`Arquivo de ícone não encontrado: ${iconPath}`);
    return;
  }
  console.log(`Arquivo de ícone encontrado: ${iconPath}`);

  try {
    console.log("Configurações do instalador:");
    const options = {
      appDirectory: appDirectory,
      outputDirectory: outputDirectory,
      authors: "Excalidraw",
      exe: "ExcalidrawDesktop.exe",
      name: "ExcalidrawDesktop",
      description: "Excalidraw Desktop Application",
      title: "Excalidraw Desktop",
      iconUrl: iconPath,
      setupIcon: iconPath,
      noMsi: false,
      setupExe: "ExcalidrawDesktopSetup.exe",
      setupMsi: "ExcalidrawDesktopSetup.msi",
      loadingGif: path.join(__dirname, "assets/excalidrawicon.png"), // Usar o mesmo ícone como GIF de carregamento
    };
    console.log(JSON.stringify(options, null, 2));

    console.log("Iniciando o processo de criação do instalador...");
    await createWindowsInstaller(options);
    console.log("Instalador criado com sucesso!");
  } catch (e) {
    console.error(`Erro ao criar o instalador: ${e.message}`);
    console.error(e.stack);
  }
}

buildInstaller();
