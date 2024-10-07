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
console.log(Persona.nombre);
console.log(Persona.edad);
Persona.edad = 21;
console.log('nueva edad: '+ Persona.edad);
console.log('Con []: '+ Persona['nombre']);
console.log(Persona.saludar());
console.log(Persona2.saludar());