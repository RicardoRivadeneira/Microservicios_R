const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3001;

app.use(cors());

let colorMicroservicio1 = '#333';  // Color inicial

app.get('/', (req, res) => {
    const resultado = realizarOperacionMicroservicio1();

    res.setHeader('Content-Type', 'text/html');
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Microservicio 1</title>
            <style>
                body {
                    font-family: 'Arial, sans-serif';
                    background-color: #f0f0f0;
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

                #contenidoMicroservicio1 {
                    font-size: 1.5em;
                    transition: color 0.5s ease-in-out;
                }
            </style>
        </head>
        <body>
            <h1>¡Hola desde el Microservicio 1!</h1>
            <div id="contenidoMicroservicio1" style="color: ${colorMicroservicio1}">${resultado}</div>
            <script>
                setInterval(function() {
                    cambiarColorMicroservicio1();
                }, 5000);

                function cambiarColorMicroservicio1() {
                    const nuevoColor = getRandomColor();
                    document.getElementById('contenidoMicroservicio1').style.color = nuevoColor;
                    // Enviar el nuevo color al servidor
                    fetch('/color-microservicio1', {
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
app.post('/color-microservicio1', express.json(), (req, res) => {
    colorMicroservicio1 = req.body.color;
    res.sendStatus(200);
});

app.listen(puerto, () => {
    console.log(`Microservicio 1 está escuchando en http://localhost:${puerto}`);
});

function realizarOperacionMicroservicio1() {
    return `Cambio de Color en la Letra desde el Microservicio 1 cada 5 segundos`;
}
