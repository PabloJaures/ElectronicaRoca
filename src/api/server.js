// Importa los módulos necesarios
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Crea una instancia de Express
const app = express();
app.use(cors()); // Habilita CORS si estás haciendo peticiones desde otro origen
app.use(express.json()); // Permite recibir datos en formato JSON

// Configura la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: '45.236.129.231',
    user: 'tiendita',
    password: 'contrawena',
    database: 'tienda',
    port: 3306
});

// Conecta a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Define el endpoint /api/productos para obtener los productos
app.get('/api/productos', (req, res) => {
    // Ejecuta una consulta a la base de datos para obtener todos los productos
    connection.query('SELECT * FROM TBL_Producto', (err, results) => {
        if (err) {
            // Si hay un error, envía una respuesta con el error
            return res.status(500).json({ error: err.message });
        }
        // Si la consulta es exitosa, envía los resultados como JSON
        res.json(results);
    });
});

// Configura el servidor para escuchar en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor ejecutándose en el puerto 3000');
});
