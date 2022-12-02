const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');
const prepareRenderer = require('./electron-next');
const { format } = require('url');

// Check that we are on dev or production
const isDev = require('electron-is-dev');

const logo = path.join(__dirname, '..', 'renderer', 'public', 'images', 'logo.png');

const windowWidth = 1024;
const windowHeight = 768;

// Store the UI variable
let win;

async function launchApp() {
  // Initial load splash screen
  var splash = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    transparent: true,
    frame: false,
    alwaysOnTop: true
  });

  splash.loadFile(path.join(__dirname, 'splash.html'));
  splash.center();

  // Start nextjs+
  await prepareRenderer(path.join(__dirname, '..', 'renderer'));

  const url = isDev
    ? 'http://localhost:8000/'
    : format({
        pathname: path.join(__dirname, '..', 'renderer', 'out', 'index.html'),
        protocol: 'file:',
        slashes: true
      });

  win = new BrowserWindow({
    height: windowHeight,
    width: windowWidth,
    icon: logo,
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadURL(url);

  setTimeout(() => {
    // Hide splash screen and open window
    win.center();
    splash.close();
    win.show();
  }, 2000);
}

// Open a window and notify about the updates: See https://github.com/iffy/electron-updater-example/blob/master/main.js
function sendStatusToWindow(text) {
  log.info(text);
  win.webContents.send('message', text);
}

autoUpdater.on('checking-for-update', () => {
  sendStatusToWindow('Checking for update...');
});

autoUpdater.on('update-available', info => {
  sendStatusToWindow('Update available.');
});

autoUpdater.on('update-not-available', info => {
  sendStatusToWindow('Update not available.');
});

autoUpdater.on('error', err => {
  sendStatusToWindow('Error in auto-updater. ' + err);
});

autoUpdater.on('download-progress', progressObj => {
  let log_message = 'Download speed: ' + progressObj.bytesPerSecond;
  log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
  log_message = log_message + ' (' + progressObj.transferred + '/' + progressObj.total + ')';
  sendStatusToWindow(log_message);
});

autoUpdater.on('update-downloaded', info => {
  sendStatusToWindow('Update downloaded');
});

// Set doc icon for macOs
if (process.platform === 'darwin') {
  app.dock.setIcon(logo);
}

function hideHelpMenu() {
  const menu = Menu.getApplicationMenu(); // get default menu
  menu.items
    .filter(item => ['filemenu', 'editmenu', 'viewmenu', 'windowmenu', 'help'].includes(item.role))
    .forEach(item => (item.visible = false)); // modify it
  Menu.setApplicationMenu(menu); // set the modified menu
}

// Once the app is ready, start the window
app.on('ready', () => {
  launchApp();
  // Checks for app updates and notifies the user.
  // For auto-updating to work on macOS, your code needs to be signed. For more information check this post:
  // https://samuelmeuli.com/blog/2019-04-07-packaging-and-publishing-an-electron-app/
  hideHelpMenu();

  setTimeout(() => {
    autoUpdater.checkForUpdatesAndNotify().catch(_error => {});
  }, 3000);
});

// Prevent multiple instances of the app
if (!app.requestSingleInstanceLock()) {
  app.quit();
}

app.on('second-instance', () => {
  if (win) {
    if (win.isMinimized()) {
      win.restore();
    }

    win.show();
  }
});

// Quit the app when closing all the windows
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Reopen window when re-enabling app (only for mac)
app.on('activate', () => {
  if (win === null) {
    launchApp();
  }
});

// uses `ipcMain` to receive messages from our UI process
ipcMain.on('message', (event, message) => {
  event.sender.send('message', message);
});
