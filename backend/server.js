const express = require('express');
const contactosRoutes = require('./routes/contactosRoutes');
const cors = require('cors');
const morgan = require('morgan');

const server = express();
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use('/contactos', contactosRoutes);
server.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente.');
});
server.use((req, res, next) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});
server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error interno del servidor' });
});

module.exports = server;


