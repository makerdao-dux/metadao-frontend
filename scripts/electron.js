const { app, BrowserWindow, ipcMain } = require('electron');
const { createServer } = require('http');
const next = require('next');
const { autoUpdater } = require('electron-updater');

// Check that we are on dev or production
const dev = process.env.NODE_ENV !== 'production';

const hostname = 'localhost';
const port = 3000;

// Instantiate next.js app
const nextApp = next({ dev, hostname, port });

// handler to handle http requests to nextjs
const handle = nextApp.getRequestHandler();

// Store the UI variable
let win;

function createWindow() {
  const windowWidth = 1024;
  const windowHeight = 768;

  // Initial load splash screen
  var splash = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    transparent: true,
    frame: false,
    alwaysOnTop: true
  });

  splash.loadFile('splash.html');
  splash.center();

  // Start nextjs
  nextApp.prepare().then(() => {
    const server = createServer((req, res) => {
      // If the request is outside from electron, return 404.
      if (req.headers['user-agent'].indexOf('Electron') === -1) {
        res.writeHead(404);
        res.end();
        return;
      }

      res.setHeader('Access-Control-Request-Method', 'GET');

      // Only allow GET methods
      if (req.method !== 'GET') {
        res.writeHead(405);
        res.end('Method Not Allowed');
        return;
      }

      // Let nextjs handle the rest of the requests
      return handle(req, res);
    });

    // Listen to port 3000
    server.listen(3000, error => {
      if (error) throw error;

      // Open a new desktop window
      win = new BrowserWindow({
        height: windowHeight,
        width: windowWidth,
        icon: '../pubic/images/logo.png',
        show: false
      });

      // and load the nextjs app
      win.loadURL('http://localhost:3000');

      setTimeout(() => {
        // Hide splash screen and open window
        win.center();
        splash.close();
        win.show();
      }, 2000);

      // Open devtools on development mode
      if (dev) {
        win.webContents.openDevTools();
      }

      win.on('close', () => {
        // Stop http server when user closes the window
        win = null;
        server.close();
      });
    });
  });
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

// Once the app is ready, start the window
app.on('ready', () => {
  createWindow();
  // Checks for app updates and notifies the user.
  // For auto-updating to work on macOS, your code needs to be signed. For more information check this post:
  // https://samuelmeuli.com/blog/2019-04-07-packaging-and-publishing-an-electron-app/
  autoUpdater.checkForUpdatesAndNotify();
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
    createWindow();
  }
});

// uses `ipcMain` to receive messages from our UI process
ipcMain.on('message', (event, message) => {
  event.sender.send('message', message);
});
