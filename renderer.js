// Script del proceso de renderizado
// Este archivo se ejecuta en el contexto de la página web

// Función para inicializar la aplicación
function initializeApp() {
  console.log('Aplicación Fidelización SB inicializada');
  
  // Verificar si estamos en el contexto de Electron
  if (window.electronAPI) {
    console.log('Ejecutando en Electron');
    
    // Obtener información del sistema
    const systemInfo = window.electronAPI.getSystemInfo();
    console.log('Información del sistema:', systemInfo);
    
    // Obtener versión de la aplicación
    window.electronAPI.getAppVersion().then(version => {
      console.log('Versión de la aplicación:', version);
    });
  } else {
    console.log('Ejecutando en navegador web');
  }
}

// Función para manejar errores de conexión
function handleConnectionError() {
  console.error('Error de conexión con el servidor');
  
  if (window.electronAPI) {
    window.electronAPI.showNotification(
      'Error de Conexión',
      'No se pudo conectar con el servidor. Verifique su conexión a internet.'
    );
  }
}

// Función para manejar la carga de la página
function handlePageLoad() {
  console.log('Página cargada correctamente');
  
  // Agregar estilos personalizados si es necesario
  addCustomStyles();
  
  // Configurar listeners para enlaces externos
  setupExternalLinks();
}

// Función para agregar estilos personalizados
function addCustomStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* Estilos personalizados para la aplicación Electron */
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    
    /* Ocultar barras de desplazamiento en algunos casos */
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  `;
  document.head.appendChild(style);
}

// Función para configurar enlaces externos
function setupExternalLinks() {
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (link && link.href && !link.href.startsWith(window.location.origin)) {
      event.preventDefault();
      
      if (window.electronAPI) {
        window.electronAPI.openExternal(link.href);
      } else {
        window.open(link.href, '_blank');
      }
    }
  });
}

// Función para mostrar notificaciones
function showNotification(title, message) {
  if (window.electronAPI) {
    window.electronAPI.showNotification(title, message);
  } else {
    // Fallback para navegador
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, { body: message });
    } else if ('Notification' in window && Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification(title, { body: message });
        }
      });
    }
  }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  handlePageLoad();
});

// Manejar errores de red
window.addEventListener('online', () => {
  console.log('Conexión restaurada');
  showNotification('Conexión Restaurada', 'Se ha restaurado la conexión a internet.');
});

window.addEventListener('offline', () => {
  console.log('Conexión perdida');
  showNotification('Sin Conexión', 'Se ha perdido la conexión a internet.');
});

// Manejar errores de carga de recursos
window.addEventListener('error', (event) => {
  if (event.target.tagName === 'IMG' || event.target.tagName === 'SCRIPT') {
    console.error('Error cargando recurso:', event.target.src || event.target.href);
  }
});

// Exportar funciones para uso global
window.fidelizacionApp = {
  showNotification,
  reload: () => {
    if (window.electronAPI) {
      window.electronAPI.reload();
    } else {
      window.location.reload();
    }
  },
  quit: () => {
    if (window.electronAPI) {
      window.electronAPI.quit();
    }
  }
}; 