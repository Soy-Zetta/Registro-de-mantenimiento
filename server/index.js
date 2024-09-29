const mysql = require('mysql2');
const express = require('express');
const app = express();
const cors = require("cors");

// Configurar body-parser para que Express pueda interpretar JSON
app.use(cors());
app.use(express.json());

// Configurar la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: '192.168.1.2', // Dirección IP de tu máquina Windows
  user: 'root',        // Usuario de MySQL
  password: 'alfonso123', // Tu contraseña
  database: 'registro_mantenimiento' // Asegúrate de que la base de datos existe
});

// Comprobar conexión a la base de datos
db.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});

// Ruta para crear un nuevo registro de mantenimiento
app.post("/create", (req, res) => {
  const { equipo, frecuencia, estado, observaciones } = req.body;

  db.query(
    'INSERT INTO mantenimiento (equipo, frecuencia, estado, observaciones) VALUES (?, ?, ?, ?)', 
    [equipo, frecuencia, estado, observaciones], 
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error al registrar mantenimiento');
        return;
      }
      res.send("Mantenimiento registrado con éxito");
    }
  );
});

// Iniciar el servidor
app.listen(3001, () => {
  console.log('Servidor corriendo en http://localhost:3001');
});



