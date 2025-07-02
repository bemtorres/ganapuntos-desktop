const { contextBridge, ipcRenderer } = require('electron');

// Exponer APIs protegidas al proceso de renderizado
contextBridge.exposeInMainWorld('electronAPI', {
  // Función para obtener información del sistema
  getSystemInfo: () => {
    return {
      platform: process.platform,
      arch: process.arch,
      version: process.version
    };
  },
  
  // Función para mostrar notificaciones
  showNotification: (title, body) => {
    ipcRenderer.invoke('show-notification', title, body);
  },
  
  // Función para obtener la versión de la aplicación
  getAppVersion: () => {
    return ipcRenderer.invoke('get-app-version');
  },
  
  // Función para abrir enlaces externos
  openExternal: (url) => {
    ipcRenderer.invoke('open-external', url);
  },
  
  // Función para recargar la aplicación
  reload: () => {
    ipcRenderer.invoke('reload-app');
  },
  
  // Función para cerrar la aplicación
  quit: () => {
    ipcRenderer.invoke('quit-app');
  }
});

// Escuchar eventos del proceso principal
ipcRenderer.on('app-version', (event, version) => {
  console.log('Versión de la aplicación:', version);
});

// Manejar errores de carga de página
window.addEventListener('error', (event) => {
  console.error('Error en la página:', event.error);
});

// Manejar errores de recursos no cargados
window.addEventListener('unhandledrejection', (event) => {
  console.error('Promesa rechazada no manejada:', event.reason);
}); 