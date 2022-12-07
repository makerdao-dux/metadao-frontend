const { app, BrowserWindow, ipcMain, Menu } = require("electron");
const { autoUpdater } = require("electron-updater");
const path = require("path");
const { format } = require("url");
const isDev = require("electron-is-dev");
const logo = path.join(__dirname, "..", "renderer", "public", "images", "logo.png");
const windowWidth = 1024;
const windowHeight = 768;
let win;
async function launchApp() {
  var splash = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    transparent: true,
    frame: false,
    alwaysOnTop: true
  });
  splash.loadFile(path.join(__dirname, "splash.html"));
  splash.center();
  const url = isDev ? "http://127.0.0.1:5173" : format({
    pathname: path.join(__dirname, "..", "renderer", "dist", "index.html"),
    protocol: "file:",
    slashes: true
  });
  win = new BrowserWindow({
    height: windowHeight,
    width: windowWidth,
    icon: logo,
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js")
    }
  });
  win.loadURL(url);
  setTimeout(() => {
    win.center();
    splash.close();
    win.show();
  }, 2e3);
}
function sendStatusToWindow(text) {
  log.info(text);
  win.webContents.send("message", text);
}
autoUpdater.on("checking-for-update", () => {
  sendStatusToWindow("Checking for update...");
});
autoUpdater.on("update-available", (info) => {
  sendStatusToWindow("Update available.");
});
autoUpdater.on("update-not-available", (info) => {
  sendStatusToWindow("Update not available.");
});
autoUpdater.on("error", (err) => {
  sendStatusToWindow("Error in auto-updater. " + err);
});
autoUpdater.on("download-progress", (progressObj) => {
  let log_message = "Download speed: " + progressObj.bytesPerSecond;
  log_message = log_message + " - Downloaded " + progressObj.percent + "%";
  log_message = log_message + " (" + progressObj.transferred + "/" + progressObj.total + ")";
  sendStatusToWindow(log_message);
});
autoUpdater.on("update-downloaded", (info) => {
  sendStatusToWindow("Update downloaded");
});
if (process.platform === "darwin") {
  app.dock.setIcon(logo);
}
function hideHelpMenu() {
  const menu = Menu.getApplicationMenu();
  menu.items.filter((item) => ["filemenu", "editmenu", "viewmenu", "windowmenu", "help"].includes(item.role)).forEach((item) => item.visible = false);
  Menu.setApplicationMenu(menu);
}
app.on("ready", () => {
  launchApp();
  hideHelpMenu();
  setTimeout(() => {
    autoUpdater.checkForUpdatesAndNotify().catch((_error) => {
    });
  }, 3e3);
});
if (!app.requestSingleInstanceLock()) {
  app.quit();
}
app.on("second-instance", () => {
  if (win) {
    if (win.isMinimized()) {
      win.restore();
    }
    win.show();
  }
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (win === null) {
    launchApp();
  }
});
ipcMain.on("message", (event, message) => {
  event.sender.send("message", message);
});
