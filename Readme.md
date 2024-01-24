# Proyecto de Microservicios

Este proyecto sirve como ejemplo de la creación de dos microservicios que se comunican entre sí.

## Microservicio 1

El Microservicio 1 se encuentra en la carpeta `microservicio1` y se ejecuta en el puerto 3001. Este microservicio recibe solicitudes HTTP y las procesa.

El archivo principal es `servicio.js`, que inicia un servidor Express y define varias rutas. En este microservicio, se realiza una operación ficticia (`realizarOperacionMicroservicio1`) que se ejecuta cada 5 segundos y cambia el color del texto de la respuesta.

### Instalación y Ejecución

Para instalar las dependencias del Microservicio 1, ejecuta el siguiente comando en tu terminal desde la raíz del proyecto:

```
cd microservicio1
npm install
```

Luego, para iniciar el Microservicio 1, ejecuta:

```
npm start
```

En caso de existir errores, inicia el microservicio con el comando `nodemon servicio.js` desde la carpeta `microservicio1`.

## Microservicio 2

El Microservicio 2 se encuentra en la carpeta `microservicio2` y se ejecuta en el puerto 3002. Este microservicio recibe solicitudes del Microservicio 1 y devuelve respuestas.

Al igual que el Microservicio 1, el archivo principal es `servicio.js`. En este microservicio, se realiza una operación ficticia (`realizarOperacionMicroservicio2`) que se ejecuta cada 5 segundos y cambia el color del texto de la respuesta. Además, se puede cambiar manualmente el color haciendo clic en un botón.

### Instalación y Ejecución

Para instalar las dependencias del Microservicio 2, ejecuta el siguiente comando en tu terminal desde la raíz del proyecto:

```
cd microservicio2
npm install
```

Luego, para iniciar el Microservicio 2, ejecuta:

```
npm start
```

En caso de existir errores, inicia el microservicio con el comando `nodemon servicio.js` desde la carpeta `microservicio2`.

## Cliente de Microservicios

El cliente se encuentra en la carpeta `cliente-microservicios` y utiliza React con Vite para crear una interfaz que consume los dos microservicios.

### Instalación y Ejecución

Para instalar las dependencias del Cliente de Microservicios, ejecuta el siguiente comando en tu terminal desde la raíz del proyecto:

```
cd cliente-microservicios
npm install
```

Luego, para iniciar el cliente, ejecuta:

```bash
npm run dev
```
