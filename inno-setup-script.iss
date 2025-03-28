#define MyAppName "Excalidraw Desktop"
#define MyAppVersion "1.0.0"
#define MyAppPublisher "Excalidraw"
#define MyAppURL "https://excalidraw.com/"
#define MyAppExeName "ExcalidrawDesktop.exe"

[Setup]
; NOTA: O valor de AppId deve ser único para cada aplicativo
AppId={{F8A54A80-9D44-4FC5-A49E-793A79C86E9F}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={autopf}\{#MyAppName}
DisableProgramGroupPage=yes
; Remova as linhas a seguir para não solicitar privilégios de administrador
PrivilegesRequired=lowest
OutputDir=installers
OutputBaseFilename=excalidraw-desktop-setup
SetupIconFile=assets\excalidraw.ico
Compression=lzma
SolidCompression=yes
WizardStyle=modern

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"
Name: "portuguese"; MessagesFile: "compiler:Languages\Portuguese.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked

[Files]
Source: "release\ExcalidrawDesktop-win32-x64\{#MyAppExeName}"; DestDir: "{app}"; Flags: ignoreversion
Source: "release\ExcalidrawDesktop-win32-x64\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs

[Icons]
Name: "{autoprograms}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"
Name: "{autodesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; Tasks: desktopicon

[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "{cm:LaunchProgram,{#StringChange(MyAppName, '&', '&&')}}"; Flags: nowait postinstall skipifsilent 