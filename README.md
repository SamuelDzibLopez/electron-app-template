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
