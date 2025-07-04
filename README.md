# Fidelización SB - Aplicación de Escritorio

Esta es una aplicación de escritorio desarrollada con Electron que embebe la página web de Fidelización SB para uso en PC.

## Características

- ✅ Aplicación de escritorio nativa para Windows
- ✅ Interfaz moderna y responsiva
- ✅ Manejo de errores de conexión
- ✅ Notificaciones del sistema
- ✅ Menú personalizado
- ✅ Soporte para enlaces externos
- ✅ Página de respaldo en caso de errores

## Requisitos Previos

- Node.js (versión 16 o superior)
- npm (incluido con Node.js)

## Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   git clone <url-del-repositorio>
   cd fidelizacion-sb-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

## Desarrollo

### Ejecutar en modo desarrollo
```bash
npm start
```

### Ejecutar con herramientas de desarrollador
```bash
# En Windows
set NODE_ENV=development && npm start

# En macOS/Linux
NODE_ENV=development npm start
```

## Compilación para Windows

### Compilar la aplicación
```bash
npm run build
```

### Generar instalador para Windows
```bash
npm run dist
```

Los archivos compilados se generarán en la carpeta `dist/`.

## Estructura del Proyecto

```
fidelizacion-sb-app/
├── main.js              # Proceso principal de Electron
├── preload.js           # Script de precarga para comunicación segura
├── renderer.js          # Script del proceso de renderizado
├── index.html           # Página de respaldo
├── package.json         # Configuración del proyecto
├── assets/              # Recursos (iconos, imágenes)
└── README.md           # Este archivo
```

## Configuración

### Cambiar la URL de destino
Para cambiar la URL que se carga en la aplicación, edita el archivo `main.js` en la línea donde se define `loadURL`:

```javascript
mainWindow.loadURL('https://fidelizacionsb.cl/access?token=123719872391872391723');
```

### Personalizar el icono
1. Coloca tu icono en formato `.ico` en la carpeta `assets/`
2. Actualiza la referencia en `package.json`:

```json
"win": {
  "target": "nsis",
  "icon": "assets/tu-icono.ico"
}
```

### Personalizar el nombre de la aplicación
Edita el archivo `package.json`:

```json
{
  "name": "tu-nombre-app",
  "productName": "Tu Nombre de Aplicación"
}
```

## Características Técnicas

### Seguridad
- Context isolation habilitado
- Node integration deshabilitado
- Preload script para comunicación segura
- Manejo seguro de enlaces externos

### Funcionalidades
- **Menú personalizado**: Archivo, Ver, Ayuda
- **Atajos de teclado**: Ctrl+R (recargar), Ctrl+Q (salir)
- **Notificaciones**: Sistema de notificaciones nativo
- **Manejo de errores**: Página de respaldo en caso de problemas
- **Enlaces externos**: Se abren en el navegador predeterminado

### Compatibilidad
- Windows 10/11 (64-bit)
- Requiere conexión a internet para funcionar

## Solución de Problemas

### Error: "No se pudo conectar con el servidor"
1. Verifica tu conexión a internet
2. Comprueba que la URL sea accesible desde tu navegador
3. Revisa si hay firewall o proxy bloqueando la conexión

### La aplicación no se inicia
1. Verifica que Node.js esté instalado correctamente
2. Ejecuta `npm install` para reinstalar dependencias
3. Verifica que no haya errores en la consola

### Problemas de compilación
1. Asegúrate de tener todas las dependencias instaladas
2. Verifica que el icono esté en el formato correcto (.ico)
3. Comprueba que no haya caracteres especiales en las rutas

## Scripts Disponibles

- `npm start`: Ejecuta la aplicación en modo desarrollo
- `npm run build`: Compila la aplicación
- `npm run dist`: Genera el instalador para Windows

## Licencia

MIT License - Ver archivo LICENSE para más detalles.

## Soporte

Para soporte técnico o reportar problemas, contacta al equipo de desarrollo.

---

**Desarrollado con ❤️ usando Electron** #   g a n a p u n t o s - d e s k t o p  
 