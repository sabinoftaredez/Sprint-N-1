import express from 'express';
const app = express();
const PORT = 3003;
// Ruta GET con Parámetro de Consulta
    // Solicitud: http://localhost:3003/Profile?edad=50
app.get('profile', (req, res) => {
    const edad = req.query.edad;
    console.log(`Edad: ${edad}`);
    res.send(`Edad del Perfil: ${edad}`);
});
app.listen(PORT, () => {
    console.log(`Servidor Corriendo en http//:localhots:${PORT}`);
});