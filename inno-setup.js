const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Possíveis locais para o compilador do Inno Setup
const possiblePaths = [
  "C:\\Program Files (x86)\\Inno Setup 6\\ISCC.exe",
  "C:\\Program Files\\Inno Setup 6\\ISCC.exe",
  "C:\\Program Files (x86)\\Inno Setup 5\\ISCC.exe",
  "C:\\Program Files\\Inno Setup 5\\ISCC.exe",
];

// Encontrar o compilador
let isccPath = null;
for (const path of possiblePaths) {
  if (fs.existsSync(path)) {
    isccPath = path;
    break;
  }
}

if (!isccPath) {
  console.error(
    "Erro: Não foi possível encontrar o compilador do Inno Setup (ISCC.exe)."
  );
  console.error(
    "Por favor, instale o Inno Setup a partir de https://jrsoftware.org/isdl.php"
  );
  process.exit(1);
}

const scriptPath = path.join(__dirname, "inno-setup-script.iss");

if (!fs.existsSync(scriptPath)) {
  console.error(`Erro: O arquivo de script ${scriptPath} não foi encontrado.`);
  process.exit(1);
}

try {
  console.log(`Compilando o instalador usando ${isccPath}...`);
  execSync(`"${isccPath}" "${scriptPath}"`, { stdio: "inherit" });
  console.log("Instalador criado com sucesso!");
  console.log(`O instalador está na pasta "installers" do projeto.`);
} catch (error) {
  console.error(`Erro ao compilar o instalador: ${error.message}`);
  process.exit(1);
}
