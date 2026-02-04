# 🚀 Instrucciones para Subir a GitHub Pages

Sigue estos pasos para publicar el directorio telefónico en GitHub:

## 📋 Paso 1: Crear un Repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón verde "New" o "Nuevo repositorio"
3. Nombre sugerido: `notaria-134-extensiones`
4. Descripción: "Directorio telefónico de la Notaría 134"
5. Selecciona **Public** (público)
6. NO agregues README, .gitignore ni licencia (ya los tenemos)
7. Haz clic en "Create repository"

## 💻 Paso 2: Subir los Archivos

Tienes dos opciones:

### Opción A: Desde la interfaz web de GitHub (Más fácil)

1. En la página del repositorio recién creado, haz clic en "uploading an existing file"
2. Arrastra estos archivos desde tu carpeta:
   - `index.html`
   - `style.css`
   - `script.js`
   - `data.js`
   - `README.md`
   - `404.html`
3. Escribe un mensaje de commit: "Versión inicial del directorio"
4. Haz clic en "Commit changes"

### Opción B: Usando Git (Línea de comandos)

Abre PowerShell en la carpeta y ejecuta:

```powershell
git init
git add .
git commit -m "Versión inicial del directorio"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/notaria-134-extensiones.git
git push -u origin main
```

## 🌐 Paso 3: Activar GitHub Pages

1. Ve a la página del repositorio en GitHub
2. Haz clic en "Settings" (Configuración) en el menú superior
3. En el menú lateral izquierdo, haz clic en "Pages"
4. En "Source" (Fuente), selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Haz clic en "Save"
6. Espera 1-2 minutos

## ✅ Paso 4: Acceder al Sitio

Tu sitio estará disponible en:
```
https://TU_USUARIO.github.io/notaria-134-extensiones/
```

¡Comparte este enlace con el personal de la notaría!

## 🔄 Actualizar Extensiones en el Futuro

Para agregar, modificar o eliminar extensiones:

1. Edita el archivo `data.js` directamente en GitHub:
   - Ve al repositorio
   - Haz clic en `data.js`
   - Haz clic en el ícono de lápiz (editar)
   - Modifica los datos
   - Escribe un mensaje descriptivo del cambio
   - Haz clic en "Commit changes"

2. Los cambios se reflejarán automáticamente en el sitio en 1-2 minutos

## 🎨 Personalización

Si deseas cambiar los colores de las auras, edita las variables CSS en `style.css` (líneas 15-25):

```css
--aura-pb: #7C3AED;     /* Planta Baja */
--aura-1: #10B981;      /* Piso 1 */
--aura-2: #3B82F6;      /* Piso 2 */
--aura-3: #F59E0B;      /* Piso 3 */
--aura-4: #EC4899;      /* Piso 4 */
```

## 📱 Crear un Acceso Directo en Móviles

Para acceso rápido en smartphones:

### iPhone/iPad
1. Abre el sitio en Safari
2. Toca el botón "Compartir"
3. Selecciona "Agregar a pantalla de inicio"
4. Nombra el acceso: "Extensiones N134"

### Android
1. Abre el sitio en Chrome
2. Toca el menú (⋮)
3. Selecciona "Agregar a pantalla de inicio"

---

**¿Necesitas ayuda?** Contacta al equipo de sistemas.
