import express from 'express';
import { obtenerSuperhéroePorIdControllers, buscarSuperhéroesPorAtributoControllers, obtenerSuperhéroesMayoresDe30Controllers } from './Controllers/superhéroesControllers.mjs';
const app = express();
const PORT = 3000;
app.get('/superhéroes/:id', obtenerSuperhéroePorIdControllers);
app.get('/superhéroes/:atributo/:valor', buscarSuperhéroesPorAtributoControllers);
app.get('/superhéroes', obtenerSuperhéroesMayoresDe30Controllers);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el http://localhost:${PORT}`);
});