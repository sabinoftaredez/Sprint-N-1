export default class superhéroes {
    constructor (id, nombre, atributo, edad)
        {this.id = id;
        this.nombre = nombre;
        this.atributo = atributo;
        this.edad = edad;        
    }

    mostrarInformación() {
        return
        `ID: ${this.id}, 
        Nombre: ${this.nombre},
        Atributo: ${this.atributo},
        Edad: ${this.edad}`;
    }
}