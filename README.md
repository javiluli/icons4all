# Repositiorio SVG icons

Repositiorio libre de iconos SVG 

## Un sitio web típico necesita

- CSS styles
- A template engine
- Javascript files
- Custom Fonts

## Este Webpack workflow permite

- Carga y compilar Pug a HTML y minificarlo
- Carga y compilar SCSS a CSS y minificarlo
- Carga tipografias/fonts woff, woff2, ttf & eot
- Carga imagenes gif, jpg y png y minifica el peso
- Carga archivos SVG

## Consideraciones

- La entrada de tus archivos está dentro de la carpeta: `src`
- La carpeta webpack es para configurar webpack.

## Generar conexion con [GitHub](https://github.com/javiluli/webpack-template-workflow) y descripcion en `package.json`

- Desde GitHub creamos un repositorio e iniciamos seguimiento de Git en el proyecto local.
- Crear conexion con el repositorio de GitHub que queramos tener asociado al proyecto: `npm init`. Esto permite renombrar el proyecto y generar una descripcion (por defecto primer parrafo del README). Al mismo tiempo esto generara la conexion con el repositio creado en GitHub

## Instalar dependencias de node.js

- Instalar dependencias de node.js: `npm i`

## Scripts creados para dev

- Borra y crea el proyecto en produccion:

  - Se inicia con: `npm run buid'`
  - `"build": "rimraf dist && webpack --config webpack/webpack.config.js -p",`

- Iniciar un servidor local para desarrollo:
  - Se inicia con: `npm start`
  - `"start": "webpack-dev-server --config webpack/webpack.config.js -d"`
