let intento = 1; //Contamos los intentos, se inician en 0

let confimacion; //Declaramos una confirmación para después.

let igual;

let aleat = Math.round(((Math.random()*100)+1)); //Generamos un número aleatorio del 1 al 100 (el +1 hace esto posible)

let num = prompt("Introduzca un número del 1 al 100. Intente adivinar el número elegido por la máquina. Puee cancelar en cualquier momento"); //Se lo pedimos al usuario

 //Si no es un número
do{
    if(isNaN(num) && num != null && num != ''){
        num = prompt("Ha introducido algo que no es un número. Por favor, introduzca un valor del 1 - 100");
        igual = parseInt(num);
        intento++;
    }
    do{
        if(num > aleat && num != null && num != ''){ //Cuando es mayor se le indica que lo es
            num = prompt("El número que ha inroducido es mayor que el que se ha calculado, vuelva a intentarlo");
            igual = parseInt(num);
            intento++;
        }else if(num < aleat && num != null && num != ''){ //También cuando es mejor
            num = prompt("El número que ha introducido es menor que el que se ha calculado, vuelva a intentarlo");
            igual = parseInt(num);
            intento++ //Aumentamos intento en 1 por cada vez que se le indica, también cuando isNaN es activado
        }
    }while(num > aleat || num < aleat && num != '' && num != null); //Las condiciones que permiten que este bucle te diga donde estás
}while (isNaN(num)); //Se pide de nuevo hasta que introduzca un número

if( igual === aleat){ //Si has acertado
    alert("Acertó, su número de intentos ha sido: "+intento); //Se da la enhorabuena y sus respectivos intentos
}

if(num === null || num == ''){ //Si te has cansado por cualquier motivo
    alert("Ha cancelado el juego. El número elegido era: "+ aleat+". Intentos: "+intento); //Se sale del programa y se muestra el número y los intnetos
}

confimacion = window.confirm("¿Va a volver a Jugar?"); //Se pregunta si quiere volver a jugar

if(confimacion == true){ //En caso de que responda con un si
    window.location.reload(); //Se recarga la página y se vuelve a empezar
}
