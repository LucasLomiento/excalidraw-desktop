# Excalidraw Desktop

**Um wrapper Electron para o Excalidraw Web**

Esta é uma aplicação desktop que encapsula o [Excalidraw](https://excalidraw.com/) - uma ferramenta de quadro branco virtual para criar diagramas com aparência de desenho à mão. O aplicativo utiliza Electron para fornecer uma experiência nativa em seu computador.

## Características

- Acesso offline ao Excalidraw
- Interface nativa para desktop
- Mesma experiência do Excalidraw Web, mas como aplicativo nativo
- Disponível para Windows

## Como usar

### Instalação

#### Método 1: Instalador

1. Baixe o instalador da seção de releases
2. Execute o instalador e siga as instruções
3. O aplicativo será instalado e um atalho será criado na área de trabalho

#### Método 2: Versão portátil

1. Baixe a versão portátil da seção de releases
2. Extraia o arquivo
3. Execute o arquivo `ExcalidrawDesktop.exe`

### Desenvolvimento

Para clonar e executar este repositório, você precisará do [Git](https://git-scm.com) e do [Node.js](https://nodejs.org/en/download/) (que vem com [npm](http://npmjs.com)) instalados em seu computador. Execute em seu terminal:

```bash
# Clone este repositório
git clone https://github.com/seu-usuario/excalidraw-desktop
# Entre no repositório
cd excalidraw-desktop
# Instale as dependências
npm install
# Execute o aplicativo em modo de desenvolvimento
npm run dev
```

### Comandos disponíveis

| Comando                    | Descrição                                             |
| -------------------------- | ----------------------------------------------------- |
| `npm run start`            | Inicia o Electron                                     |
| `npm run build`            | Compila os arquivos usando Webpack                    |
| `npm run dev`              | Compila e inicia o aplicativo em modo desenvolvimento |
| `npm run pack-win`         | Empacota o aplicativo para Windows                    |
| `npm run create-installer` | Cria um instalador usando Inno Setup                  |
| `npm run dist`             | Gera distribuições com electron-builder               |
| `npm run create-shortcut`  | Cria um atalho na área de trabalho                    |
| `npm run full-install`     | Empacota e cria atalho em um único comando            |

## Por que um aplicativo desktop para Excalidraw?

Embora o Excalidraw já esteja disponível como um PWA (Progressive Web App), este aplicativo desktop oferece:

- Integração mais profunda com o sistema operacional
- Ícone na barra de tarefas/dock
- Experiência offline mais robusta
- Startup mais rápido

## Licença

[MIT](LICENSE)
