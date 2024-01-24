import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [microservicio1Data, setMicroservicio1Data] = useState('');
  const [microservicio2Data, setMicroservicio2Data] = useState('');

  useEffect(() => {
    // Microservicio 1 - Cambio automático de color cada 5 segundos
    axios.get('http://localhost:3001')
      .then(response => setMicroservicio1Data(response.data))
      .catch(error => console.error(error));

    const intervalId1 = setInterval(() => {
      axios.get('http://localhost:3001')
        .then(response => setMicroservicio1Data(response.data))
        .catch(error => console.error(error));
    }, 5000);

    // Microservicio 2 - Cambio automático de color cada 5 segundos
    axios.get('http://localhost:3002')
      .then(response => setMicroservicio2Data(response.data))
      .catch(error => console.error(error));

    const intervalId2 = setInterval(() => {
      axios.get('http://localhost:3002')
        .then(response => setMicroservicio2Data(response.data))
        .catch(error => console.error(error));
    }, 5000);

    // Limpiar los intervalos al desmontar el componente
    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
    };
  }, []);

  const containerStyle = {
    textAlign: 'center',
    margin: '50px auto',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
  };

  const microservicioStyle = {
    flex: '1',
    padding: '20px',
    backgroundColor: '#e0e0e0',  // Cambiado el fondo detrás de los contenedores
    borderRadius: '8px',
    margin: '10px',
    fontSize: '14px',  // Reducido el tamaño de la fuente dentro del contenedor
  };

  const buttonStyle = {
    marginTop: '20px',
    backgroundColor: '#581845',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  // Cambiar manualmente el color del Microservicio 2
  const cambiarColorMicroservicio2 = () => {
    const nuevoColor = getRandomColor();
    document.getElementById('contenidoMicroservicio2').style.color = nuevoColor;
    document.getElementById('contenidoMicroservicio1').style.color = nuevoColor;
    // Enviar el nuevo color al servidor
    axios.post('http://localhost:3002/color-microservicio2', { color: nuevoColor })
      .catch(error => console.error(error));
  };

  // Función auxiliar para obtener un color aleatorio
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '24px' }}>Bienvenido Ricardo a la Unión de los Microservicios</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <div id="contenidoMicroservicio1" style={microservicioStyle}>
          <h2>Microservicio 1</h2>
          <div dangerouslySetInnerHTML={{ __html: microservicio1Data }} />
        </div>
        <div id="contenidoMicroservicio2" style={microservicioStyle}>
          <h2>Microservicio 2</h2>
          <div dangerouslySetInnerHTML={{ __html: microservicio2Data }} />
        </div>
      </div>
      <button onClick={cambiarColorMicroservicio2} style={buttonStyle}>Cambiar Color</button>
    </div>
  );
}

export default App;
