import express from 'express';
// Crear la Instancia del Ru'teo
const router = express.Router();
// Ruta Básica de Ubicación del Servidor
router.get('/', (req, res) => {
    res.send('Hola Universo');
});
// Otra Ruta de Ejemplo
router.get('/About', (req, res) => {
    res.send('Acerca de Nosotros');
});
export default router;