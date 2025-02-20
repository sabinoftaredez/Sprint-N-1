import { obtenerSuperhéroePorId, buscarSuperhéroesPorAtributo, obtenerSuperhéroesMayoresDe30 } from '../Service/superhéroesService.mjs';
import { renderizarSuperhéroes, renderizarListaSuperhéroes } from '../View/superhéroesView.mjs';

export function obtenerSuperhéroePorIdControllers(req, res) {
    const { id } = req.params;
    const superhéroe = obtenerSuperhéroePorId(parseInt(id));
    if (superhéroe) {
        res.send(renderizarSuperhéroes(superhéroe));
    } else {
        res.status(404).send('Superhéroe no encontrado');
    }
}
export function buscarSuperhéroesPorAtributoControllers(req, res) {
    const { atributo, valor } = req.params;
    const superhéroes = buscarSuperhéroesPorAtributo(atributo, valor);
    if (superhéroes.length > 0) {
        res.send(renderizarListaSuperhéroes(superhéroes));
    } else {
        res.status(404).send('Superhéroes no encontrados');
    }
}
export function obtenerSuperhéroesMayoresDe30Controllers(req, res) {
    const superhéroes = obtenerSuperhéroesMayoresDe30();
    res.send(renderizarListaSuperhéroes(superhéroes));
}
