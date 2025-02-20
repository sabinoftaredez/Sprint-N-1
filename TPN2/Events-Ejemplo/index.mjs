import {EventEmitter} from 'events';
// Crear una Instancia de EventEmitter
const emisor = new EventEmitter();
// Definir un evento Personalizado
emisor.on('Saludo', () => {
    console.log('Hola, ${nombre}!');
});
// Emitir un evento de Hola Mundo
emisor.emit('Saludo', 'Mundo');