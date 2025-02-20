import os from 'os';
// Obtener Arquitectura del Sistema Operativo
console.log('Arquitectura:',os.arch());
// Obtener la Plataforma del Sistema Operativo
console.log('Plataforma:',os.platform());
// Obtener la Cantidad de Memoria
console.log('Memoria Total:',os.totalmem());
// Obtener la Memoria Libre
console.log('Memoria Libre:',os.freemem());
// Obtener la Cantidad de CPUs
console.log('CPUs:',os.cpus());