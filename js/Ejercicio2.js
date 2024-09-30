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
const ultimoMichi = mascotas.pop();
console.log(mascotas);
console.log(ultimoMichi);
console.log(mascotas.length);
