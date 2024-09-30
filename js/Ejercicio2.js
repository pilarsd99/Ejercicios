/*const mascotas = [
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
//prueba de otro tipo de for
console.log('prueba de for')
for(const mascota of mascotas){
    console.log(mascota);
}
//while
console.log('WHILE');
let i = 0;
while(i < mascotas.length){
    console.log(mascotas[i]);
    i++;
}*/
function valormayor(x,y){
    let mayores = [];
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x.length; j++) {
            if(x[i]> x[j]){
                //
            }
        }
    }
    return mayores
}
let arrayRecb= [1,2,3,4], valorpedido = 2;
if(valorpedido<= arrayRecb.length && valorpedido!=0){
    console.log( valormayor(arrayRecb,valorpedido));
}else{
    console.log('No me sirve');
}