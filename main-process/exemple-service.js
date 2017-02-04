const ipc = require('electron').ipcMain;

ipc.on('say-hello-nodejs', function(event) {
    event.returnValue = 'Hello from exemple-service.js';
});