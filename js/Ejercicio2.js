const mascotas = [
'muzarella',
'olivia',
'asteroid',
'olivia',
'popi',
'catrina',
];
console.log(mascotas[3]);
// Asignacion de valores
console.log(mascotas[5]);
mascotas[5] = 'Michi nuevo';
console.log(mascotas[5]);
// agregar elemento
mascotas.push('Almendro');
console.log(mascotas);
//Sacar la ultima mascota 
const ultimoMichi = mascotas.pop();
console.log(mascotas);
console.log(ultimoMichi);
//loopear un array
console.log(mascotas.length);
for(let i = 0; i< mascotas.length; i++){
    console.log(mascotas[i]);
}