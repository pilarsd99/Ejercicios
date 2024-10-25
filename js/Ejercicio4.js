let numero , aletorio; // numero a ingresar
// generar un numero aletorio
aleatorio = Math.trunc(Math.random()*10);
alert('Vamos a jugar a adivinar un número del 1 al 10');
numero = prompt('Ingresar un número');
while(numero!=aletorio){
    alert('Erraste probá de nuevo');
    numero = prompt('Ingresar un número');
}
alert('Embocaste');