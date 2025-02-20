import superhéroesRepository from '../Repository/superhéroesRepository.mjs';
const repo = new superhéroesRepository();
export function obtenerSuperhéroePorId(id) {
    const superhéroes = repo.obtenerTodos();
    return superhéroes.find(héroe => héroe.id === id);
}
export function buscarSuperhéroesPorAtributo(atributo, valor) {
    const superhéroes = repo.obtenerTodos();
    return superhéroes.filter(héroe => String(héroe[atributo]).toLowerCase().includes(valor.toLowerCase()));
}
export function obtenerSuperhéroesMayoresDe30() {
    const superhéroes = repo.obtenerTodos();
    return superhéroes.filter(héroe => héroe.edad > 30);
}