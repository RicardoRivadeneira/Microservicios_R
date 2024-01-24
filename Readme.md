```bash
# Proyecto de Microservicios

Este proyecto sirve como ejemplo de la creación de dos microservicios que se comunican entre sí.

## Microservicio 1

El Microservicio 1 se encuentra en la carpeta `microservicio1` y se ejecuta en el puerto 3001. Este microservicio recibe solicitudes HTTP y las procesa.

El archivo principal es `servicio.js`, que inicia un servidor Express y define varias rutas.

### Instalación y Ejecución

```bash
cd microservicio1
npm install
npm start
```

En caso de existir errores, inicia el microservicio con el comando `nodemon servicio.js` desde la carpeta `microservicio1`.

## Microservicio 2

El Microservicio 2 se encuentra en la carpeta `microservicio2` y se ejecuta en el puerto 3002. Este microservicio recibe solicitudes del Microservicio 1 y devuelve respuestas.

Al igual que el Microservicio 1, el archivo principal es `servicio.js`.

### Instalación y Ejecución

```bash
cd microservicio2
npm install
npm start
```

En caso de existir errores, inicia el microservicio con el comando `nodemon servicio.js` desde la carpeta `microservicio2`.

## Cliente de Microservicios

El cliente se encuentra en la carpeta `cliente-microservicios` y utiliza React con Vite para crear una interfaz que consume los dos microservicios.

### Instalación y Ejecución

```bash
cd cliente-microservicios
npm install
npm run dev
```

## Dependencias

Este proyecto utiliza las siguientes dependencias:

```bash
express: Un marco de aplicación web para Node.js
axios: Un cliente HTTP basado en promesas para el navegador y Node.js
nodemon: Una herramienta que ayuda a desarrollar aplicaciones basadas en node.js al reiniciar automáticamente la aplicación de nodo cuando se detectan cambios de archivo en el directorio.
react: Biblioteca de JavaScript para construir interfaces de usuario.
vite: Herramienta de construcción web que es rápida, eficiente y modular.
```
