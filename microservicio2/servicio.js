const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3002;

app.use(cors());

let colorMicroservicio2 = '#333';  // Color inicial

app.get('/', (req, res) => {
    const resultado = realizarOperacionMicroservicio2();

    res.setHeader('Content-Type', 'text/html');
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Microservicio 2</title>
            <style>
                body {
                    font-family: 'Arial, sans-serif';
                    background-color: #f8f8f8;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                }

                h1 {
                    color: #333;
                    margin-bottom: 20px;
                }

                #contenidoMicroservicio2 {
                    font-size: 1.5em;
                    transition: color 0.5s ease-in-out;
                }

                button {
                    margin-top: 20px;
                    padding: 10px;
                    font-size: 1em;
                    cursor: pointer;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    transition: background-color 0.3s ease-in-out;
                }

                button:hover {
                    background-color: #45a049;
                }
            </style>
        </head>
        <body>
            <h1>¡Hola desde el Microservicio 2!</h1>
            <div id="contenidoMicroservicio2" style="color: ${colorMicroservicio2}">${resultado}</div>
            <button onclick="cambiarColorMicroservicio2()">Cambiar Color</button>
            <script>
                setInterval(function() {
                    cambiarColorMicroservicio2();
                }, 5000);

                function cambiarColorMicroservicio2() {
                    const nuevoColor = getRandomColor();
                    document.getElementById('contenidoMicroservicio2').style.color = nuevoColor;
                    // Enviar el nuevo color al servidor
                    fetch('/color-microservicio2', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ color: nuevoColor }),
                    });
                }

                function getRandomColor() {
                    const letters = '0123456789ABCDEF';
                    let color = '#';
                    for (let i = 0; i < 6; i++) {
                        color += letters[Math.floor(Math.random() * 16)];
                    }
                    return color;
                }
            </script>
        </body>
        </html>
    `);
});

// Nueva ruta para recibir el color actual desde el cliente
app.post('/color-microservicio2', express.json(), (req, res) => {
    colorMicroservicio2 = req.body.color;
    res.sendStatus(200);
});

app.listen(puerto, () => {
    console.log(`Microservicio 2 está escuchando en http://localhost:${puerto}`);
});

function realizarOperacionMicroservicio2() {
    return `Operación realizada en Microservicio 2 con la funcionalidad de cambiar de color mediante un botón`;
}
