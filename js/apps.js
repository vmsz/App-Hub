let nonGStaticApps = [
  "Tweaks",
  "Hardware Tools",
  "MySQL",
  "Ubisoft Connect",
];
let essentials = [
  (app = {
    friendlyName: `Brave`,
    downloadUrl: `https://drive.usercontent.google.com/download?id=1rDCN8M3nYeLiZhtsYO36q1ZJ4zH04HRH&export=download&authuser=1&confirm=t&uuid=4afea93d-f0d1-40e8-95a9-31a1745e299c&at=APZUnTX0vA8KvGgKHWIbVXyImHWS%3A1705029588848`,
    iconSrc: `https://brave.com/pt-br/`,
    fileName: `Brave Setup.exe`,
  }),
  (app = {
    friendlyName: `7-Zip`,
    downloadUrl: `https://www.7-zip.org/a/7z2301-x64.exe`,
    iconSrc: `https://www.7-zip.org`,
    fileName: `7-Zip 2301 Setup.exe`,
  }),
  (app = {
    friendlyName: `Tweaks`,
    downloadUrl: `https://drive.usercontent.google.com/download?id=1mwx-FIOdab787WbxaNr8_-h2WQ-UfTjJ&export=download&authuser=1&confirm=t&uuid=cef3b40c-4590-448d-a480-4727cafa8aba&at=APZUnTWXe0au0DWf6nPAsqMzQNlz%3A1705028653488`,
    iconSrc: `./assets/apps/Tweaks.png`,
    fileName: `Tweaks (senha 0811).7z`,
  }),
];
let tools = [
  (app = {
    friendlyName: `Blender`,
    downloadUrl: `https://mirrors.ocf.berkeley.edu/blender/release/Blender4.0/blender-4.0.2-windows-x64.msi`,
    iconSrc: `https://www.blender.org/`,
    fileName: `Blender 4.0.2 Setup.msi`,
  }),
  (app = {
    friendlyName: `Figma`,
    downloadUrl: `https://www.figma.com/download/desktop/win`,
    iconSrc: `https://www.figma.com/`,
    fileName: `Figma Setup.exe`,
  }),
  (app = {
    friendlyName: `GIMP`,
    downloadUrl: `https://download.gimp.org/gimp/v2.10/windows/gimp-2.10.36-setup-1.exe`,
    iconSrc: `https://www.gimp.org/`,
    fileName: `GIMP 2.10.exe`,
  }),
  (app = {
    friendlyName: `OpenShot`,
    downloadUrl: `https://github.com/OpenShot/openshot-qt/releases/download/v3.1.1/OpenShot-v3.1.1-x86_64.exe`,
    iconSrc: `https://www.openshot.org/`,
    fileName: `OpenShot 3.1.1.exe`,
  }),
  (app = {
    friendlyName: `LibreOffice`,
    downloadUrl: `https://download.documentfoundation.org/libreoffice/stable/24.2.1/win/x86_64/LibreOffice_24.2.1_Win_x86-64.msi`,
    iconSrc: `https://www.libreoffice.org/`,
    fileName: `LibreOffice 24.2.1.msi`,
  }),
  (app = {
    friendlyName: `Hardware Tools`,
    downloadUrl: `https://drive.google.com/uc?export=download&id=1ywrv9hshWOMpZJeqqKZcMxvT1i5jIJOH`,
    iconSrc: `./assets/apps/HW Pack.png`,
    fileName: `Hardware Tools.7z`,
  }),
];
let devTools = [
  (app = {
    friendlyName: `VS Code`,
    downloadUrl: `https://code.visualstudio.com/sha/download?build=stable&os=win32-x64`,
    iconSrc: `https://code.visualstudio.com/`,
    fileName: `VSCode Setup.exe`,
  }),
  (app = {
    friendlyName: `Node.js`,
    downloadUrl: `https://nodejs.org/dist/v20.11.0/node-v20.11.0-x64.msi`,
    iconSrc: `https://nodejs.org/en`,
    fileName: `Nodejs 20.11.0 Setup.msi`,
  }),
  (app = {
    friendlyName: `MongoDB`,
    downloadUrl: `https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-7.0.5-signed.msi`,
    iconSrc: `https://www.mongodb.com/`,
    fileName: `MongoDB 7.0.5 Setup.msi`,
  }),
  (app = {
    friendlyName: `MySQL`,
    downloadUrl: `https://dev.mysql.com/get/Downloads/MySQLInstaller/mysql-installer-community-8.0.35.0.msi`,
    iconSrc: `./assets/apps/MySQL.png`,
    fileName: `MySQL 8.0.35.0 Setup.msi`,
  }),
  (app = {
    friendlyName: `Insomnia`,
    downloadUrl: `https://updates.insomnia.rest/downloads/windows/latest?app=com.insomnia.app&source=website`,
    iconSrc: `https://insomnia.rest/`,
    fileName: `Insomnia Setup.exe`,
  }),
  (app = {
    friendlyName: `Docker`,
    downloadUrl: `https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=module`,
    iconSrc: `https://www.docker.com/`,
    fileName: `Docker Setup.exe`,
  }),
  (app = {
    friendlyName: `Git`,
    downloadUrl: `https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe`,
    iconSrc: `https://git-scm.com/`,
    fileName: `Git 2.43.0 Setup.exe`,
  }),
];
let visual = [
  (app = {
    friendlyName: `Rectify11`,
    downloadUrl: `https://github.com/Rectify11/Installer/releases/download/v-3.1-fixed2/Rectify11Installer.exe`,
    iconSrc: `https://rectify11.net/`,
    fileName: `Rectify11 V3.1.exe`,
  }),
  (app = {
    friendlyName: `StartAllBack`,
    downloadUrl: `https://www.startallback.com/download.php`,
    iconSrc: `https://www.startallback.com/`,
    fileName: `StartAllBack Setup.exe`,
  }),
  (app = {
    friendlyName: `Cursors`,
    downloadUrl: `https://drive.google.com/uc?export=download&id=1v6Z0sDyyV3A9UukNzqjK7JCJtko8OZrc`,
    iconSrc: `https://custom-cursor.com/`,
    fileName: `Cursores.7z`,
  }),
];
let games = [
  (app = {
    friendlyName: `Steam`,
    downloadUrl: `https://cdn.cloudflare.steamstatic.com/client/installer/SteamSetup.exe`,
    iconSrc: `https://store.steampowered.com/`,
    fileName: `Steam Setup.exe`,
  }),
  (app = {
    friendlyName: `Epic Games`,
    downloadUrl: `https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi`,
    iconSrc: `https://www.epicgames.com/`,
    fileName: `Epic Games Setup.msi`,
  }),
  (app = {
    friendlyName: `Ubisoft Connect`,
    downloadUrl: `https://ubi.li/4vxt9`,
    iconSrc: `./assets/apps/Ubisoft.png`,
    fileName: `Ubisoft Connect Setup.exe`,
  }),
  (app = {
    friendlyName: `EA App`,
    downloadUrl: `https://origin-a.akamaihd.net/EA-Desktop-Client-Download/installer-releases/EAappInstaller.exe`,
    iconSrc: `https://www.ea.com/`,
    fileName: `EA App Setup.exe`,
  }),
];
let chat = [
  (app = {
    friendlyName: `Telegram`,
    downloadUrl: `https://telegram.org/dl/desktop/win64`,
    iconSrc: `https://desktop.telegram.org/`,
    fileName: `Telegram Setup.exe`,
  }),
  (app = {
    friendlyName: `WhatsApp`,
    downloadUrl: `https://drive.usercontent.google.com/download?id=1EPCA_NWEH5-00ARXXvntaDQmwfsCkyFx&export=download&confirm=t&uuid=220c4c91-92af-4bbd-8d68-b764669da932`,
    iconSrc: `https://web.whatsapp.com/`,
    fileName: `WhatsApp Setup.Msixbundle`,
  }),
  (app = {
    friendlyName: `Discord`,
    downloadUrl: `https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x86`,
    iconSrc: `https://discord.com/`,
    fileName: `Discord Setup.exe`,
  }),
  (app = {
    friendlyName: `TeamSpeak 3`,
    downloadUrl: `https://files.teamspeak-services.com/releases/client/3.6.1/TeamSpeak3-Client-win64-3.6.1.exe`,
    iconSrc: `https://www.teamspeak.com/`,
    fileName: `TeamSpeak 3 3.6.1 Setup.exe`,
  }),
  (app = {
    friendlyName: `Microsoft Teams`,
    downloadUrl: `https://go.microsoft.com/fwlink/?linkid=2196106&clcid=0x416&culture=pt-br&country=br`,
    iconSrc: `https://teams.microsoft.com/v2/`,
    fileName: `Microsoft Teams.msix`,
  }),
]
let miscellaneous = [
  (app = {
    friendlyName: `qBittorrent`,
    downloadUrl: `https://drive.usercontent.google.com/download?id=1xX1pLlNoQo2AATftZCx9GQ_nw0uQXjs6&export=download&confirm=t&uuid=0292b98f-9b78-40dd-83a2-263705adde82`,
    iconSrc: `https://www.qbittorrent.org/`,
    fileName: `qBittorrent 4.6.3 Setup.exe`,
  }),

  (app = {
    friendlyName: `Deezer`,
    downloadUrl: `https://www.deezer.com/desktop/download?platform=win32&architecture=x86`,
    iconSrc: `https://www.deezer.com/`,
    fileName: `Deezer Setup.exe`,
  }),
  (app = {
    friendlyName: `Spotify`,
    downloadUrl: `https://download.scdn.co/SpotifySetup.exe`,
    iconSrc: `https://open.spotify.com`,
    fileName: `Spotify Setup.exe`,
  }),
];
