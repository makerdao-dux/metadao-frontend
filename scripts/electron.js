const { app, BrowserWindow, ipcMain } = require('electron');
const { createServer } = require('http');
const next = require('next');
const autoUpdater = require("electron-updater");

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
        height: 768,
        width: 1024,
        icon: '../pubic/images/logo.png'
      });

      // and load the nextjs app
      win.loadURL('http://localhost:3000');

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
