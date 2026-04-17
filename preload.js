const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('storage', {
  get: (key) => localStorage.getItem(key),
  set: (key, val) => localStorage.setItem(key, val),
  remove: (key) => localStorage.removeItem(key)
})
