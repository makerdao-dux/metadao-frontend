const { ipcRenderer, contextBridge } = require('electron');

// used to communicate between the application and the ipcRenderer
// see : https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
contextBridge.exposeInMainWorld('electron', {
  openLink: () => ipcRenderer.send('open-link')
});
