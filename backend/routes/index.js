const { Router } = require('express');

const productoRouter= require('./productoRoutes')
// Importa el nuevo enrutador de roles// Asegúrate de que esta ruta sea correcta

const router = Router();

// Usa el courseRouter bajo el prefijo '/courses'

router.use('/productos', productoRouter);


module.exports = router;