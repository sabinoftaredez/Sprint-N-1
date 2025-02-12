let a = 1;
let b = 2;
let c = 5;
function sumar(a, b) {
    return a + b;
}
function multiplicar(c, b) {
    return c * b;
}
function completa(a, b, c) {
    return multiplicar(sumar(a, b), c);
}
function completaParaHumanos(a, b, c) {
    console.log("Estoy en la Funcion para Humanos me llego", a, b, c);
    let suma = sumar(a, b);
    console.log("La suma es", suma);
    let resultado = multiplicar(suma, c);
    console.log("El resultado es", resultado);
    return resultado;
}
console.log(completaParaHumanos(a + b));
