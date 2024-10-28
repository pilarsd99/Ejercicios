let numero , aletorio, salir, contador; // numero a ingresar
// generar un numero aletorio
salir = false;
contador = 1;
aleatorio = Math.trunc(Math.random()*100);
alert('Vamos a jugar a adivinar un número del 1 al 100, ingresar 200 si te aburres');
numero = prompt('Ingresar un número');
salir = FuncionSalir(numero);
while(!salir){
    if(numero == aletorio){
        alert('Ganaste el numero era ese');
        salir = true;
    }else{
        alert('Erraste probá de nuevo');
        numero = prompt('Ingresar un número'); 
        salir = FuncionSalir(numero);
    }
   contador ++; 
}

function FuncionSalir(numero){
    if(numero == 200){
        salir = ture;
        }
    return salir
}