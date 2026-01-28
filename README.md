# Documentación y uso de Electron App Template

Gracias por descargar y utilizar este proyecto personal.

Este proyecto es utilizado para generar y empaquetar Aplicaciones Web para ser convertidas en Nativas. 

---
Esta documentación te llevará **desde cero** hasta obtener un **.exe instalable** usando **Electron** y **electron-builder (NSIS)** utilizando este ***template***.

Requisitos:

- La aplicación debe realizarse utilizando tecnologias `html`, `css` y `js`.

- Ejecutar el build en sistemas ***Windows 10*** o ***Windows 11***. 

- Tener instalado `Node.js`.

    Para verificar

~~~bash
node -v
npm -v
~~~

- Tener instalado `Git` (No estrictamente necesario).

---

## Paso 1. Descargar este Repositorio.

Descargar el repositorio en nuestro equipo:

~~~bash
git clone 
~~~

***Nota:*** Una vez descargado nuestro proyecto, seguiremos dentro de nuestro proyecto creado.

## Paso 2. Instalar Dependencias necesarias.

~~~bash
npm install
~~~

***Nota:*** Este comando, instalará de manera automatica, todo lo necesario, para el funcionamiento de la App, tanto para desarrollo, como para el Build final.

## Paso 3. Visualizar en Desarrollo.

~~~
npm start
~~~

***Nota:*** Este comando desplegará la visualización de nuestro proyecto en modo de desarrollo.

Aqui podremos modificar y crear nuestra App personalizada utilizando ***HTML***, ***CSS*** y ***JavaScript***.

## Paso 4. Preparar para generar Instalador (.exe).

Una vez, terminada nuestra App, estamos listos para generar nuestro instalador, solo falta:

- Modificar metadatos utiles para nuestra App.


Para ello, debemos agregar y modificar los siguientes datos en el `package.json`, segun nuestros datos personales y aplicables:

~~~json
"name": "electron-app-template"
"description": "..."
"author": "TU NOMBRE O EMPRESA AQUÍ"
"build.appId": "com.tudominio.tuapp"
"build.productName": "Nombre de tu aplicación"
"build.copyright": "..."
~~~

- Agregar un favicon.ico.

Puedes generar un `.ico` valido desde la página:

~~~
https://www.icoconverter.com/
~~~

Seleccciona todas las opciones de `size`, incluyendo la opcion (obligatorio) de:

    256 pixeles (only works with 32 bits)

Y: 

    32 bits (16.7M colors & alpha transparency)

Luego, cambia el icon del proyecto `src/icons/favicon.ico` por tu `.ico` personalizado.

***Nota:*** Llamandole siempre `favicon.ico`.

**¡Listo, el `package.json` esta configurado para colocar tu .ico en tu App!**


## Paso 5.Generar Instalador (.exe).

Finalmente, con todas las configuraciones terminadas, podemos generar el `build` e instalador para nuestra App.

Para ello, ejecutamos el siguiente comando desde la `/` de nuestro proyecto:

~~~bash
npm run build
~~~

Al terminar de empaquetar nuestra App, podremos visualizar un nuevo directorio `dist/`.

Dentro de la carpeta llamada `dist/`, encontraremos el `.exe`.

Listo para compartir nuestra App con quien deseemos.


