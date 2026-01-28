# Documentación y uso de Electron App Template

Gracias por descargar y utilizar este proyecto personal.

Este proyecto está diseñado para generar y empaquetar **Aplicaciones Web** y convertirlas en **Aplicaciones Nativas** utilizando **Electron**.

Esta documentación te llevará **desde cero** hasta obtener un **.exe instalable** usando **Electron** y **electron-builder (NSIS)** a partir de este **template**.

---

## Requisitos

- La aplicación debe desarrollarse utilizando:
  - ``HTML``
  - ``CSS``
  - ``JavaScript``

- El proceso de build debe ejecutarse en:
  - ***Windows 10***
  - ***Windows 11***

- Tener instalado **Node.js**

Para verificar la instalación:

~~~bash
node -v
npm -v
~~~

- Tener instalado **Git** (opcional, pero recomendado).

---

## Paso 1. Descargar este repositorio

Clona el repositorio en tu equipo:

~~~bash
git clone https://github.com/SamuelDzibLopez/electron-app-template.git
~~~

***Nota:*** Una vez descargado el repositorio, trabaja siempre dentro del directorio del proyecto.

---

## Paso 2. Instalar dependencias necesarias

Ejecuta el siguiente comando:

~~~bash
npm install
~~~

**Nota:** Este comando instalará automáticamente todas las dependencias necesarias tanto para desarrollo como para el build final.

---

## Paso 3. Visualizar la aplicación en desarrollo

Para ejecutar la aplicación en modo desarrollo:

~~~bash
npm start
~~~

**Nota:** Este comando abrirá la aplicación en una ventana nativa de Electron.

Aquí podrás modificar y desarrollar tu aplicación usando ``HTML``, ``CSS`` y ``JavaScript``.

---

## Paso 4. Preparar el proyecto para generar el instalador (``.exe``)

### Modificar metadatos

Antes de generar el instalador, es necesario modificar algunos metadatos importantes en el archivo `package.json`.

Actualiza los siguientes campos con la información de tu **aplicación**:

~~~json
"name": "electron-app-template",
"description": "Descripción de tu aplicación",
"author": "TU NOMBRE O EMPRESA AQUÍ",
"build.appId": "com.tudominio.tuapp",
"build.productName": "Nombre de tu aplicación",
"build.copyright": "Copyright © AÑO TU NOMBRE"
~~~

---

<!-- ### Personalizar ventana de Aplicación para Build



--- -->

### Agregar favicon.ico

Para que tu aplicación tenga **icono** en:

- El archivo `.exe`.
- El instalador.
- El acceso directo.
- La ventana de la aplicación.

Debes generar un archivo **favicon.ico** válido.

Puedes hacerlo desde la siguiente página:

[https://www.icoconverter.com/](https://www.icoconverter.com/)

Al generar el `.ico`, asegúrate de seleccionar:

- Todos los tamaños disponibles.
- ``256 px (only works with 32 bits)`` (obligatorio).
- ``32 bits (16.7M colors & alpha transparency)``.

Luego, reemplaza el archivo:


`src/assets/icons/favicon.ico`


por tu icono personalizado.

**Nota:** El archivo debe llamarse exactamente `favicon.ico`.

**El `package.json` ya está configurado para usar este icono automáticamente.**

---

## Paso 5. Generar el instalador (``.exe``)

Una vez terminada tu aplicación y configurados los metadatos, ejecuta el ***build***:

~~~bash
npm run build
~~~

Al finalizar el proceso, se creará una carpeta llamada `dist/`.

Dentro de esta carpeta encontrarás:

- El instalador `.exe`
- La versión empaquetada de la aplicación

Este archivo `.exe` está listo para ser distribuido e instalado en otros equipos con Windows.

---

## Notas finales

- Este template está pensado para ser ***simple***, ***limpio*** y ***escalable***.
- No utiliza frameworks externos.
- Está inspirado en arquitecturas modernas como ***React*** o ***Next.js***, pero construido únicamente con tecnologías web estándar.

Disfruta creando aplicaciones nativas con **Electron**.

Realizado por ***DZEL21S***.
