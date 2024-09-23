//Fucion de Numeros randos enteres
function NAletorio(min, max) {
    let x , y ;
    x = Math.random() * (max - min) + min;
    y = Math.trunc(x);
    return y;
}
//Funcion de adivinaza 
function adivina(pen,ped){
if(ped>0 && Number.isInteger(ped) == true ){
    if(pen > ped){
        alert('El numero es menor');
    }else if(pen < ped){
        alert('El numero es mayor');
    } else{ alert('Ganaste una torta frita');}
}else{
    alert('cambial el numero');
}
}
let min = 1;
let max = 100;
// numero aletorio 
let npensado = NAletorio(min,max);
//alert(npensado);
//pedir dato 
let npedido = 34;
alert(npensado+','+npedido);
adivina(npensado,npedido);


