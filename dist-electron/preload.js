const { ipcRenderer, contextBridge } = require("electron");
contextBridge.exposeInMainWorld("electron", {
  openLink: () => ipcRenderer.send("open-link")
});
