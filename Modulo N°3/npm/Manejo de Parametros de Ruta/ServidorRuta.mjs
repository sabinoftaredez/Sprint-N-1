import express from 'express';
const app = express();
const PORT = 3002;

// Ruta del GET con Parámetro de Ruta
    // Solicitud: http://localhost:3002/user/123
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    console.log(`El id del Usuario: ${userId}`);
    res.send(`Perfil del Usuario id: ${userId}`);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});