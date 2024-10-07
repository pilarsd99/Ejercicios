let nombre
let apellido
const Persona = {
    nombre: 'Tita',
    edad: 20,
    saludar: function(){
        return 'Hola ' + this.nombre;
    }
}
const Persona2 = {
    nombre: 'Juana',
    edad: 20,
    saludar: function(){
        return 'Hola ' + this.nombre;
    }
}
function crearPersona(nombre, edad){
    const obj = {};
    obj.nombre = nombre;
    obj.edad = edad;
    obj.saludar = function(){
        return 'Hola soy ' + this.nombre;
    }
    return obj;
}
console.log(Persona.nombre);
console.log(Persona.edad);
Persona.edad = 21;
console.log('nueva edad: '+ Persona.edad);
console.log('Con []: '+ Persona['nombre']);
console.log(Persona.saludar());
console.log(Persona2.saludar());
const Tita = crearPersona('Tita', 30);
console.log(Tita);