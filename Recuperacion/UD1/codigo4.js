let valores = [true, 5, false, "hola", "adios", 2];

for(let i = 0; i <= 4; i++){ //Aumentamos el valor de i en 1 a cada vuelta que da
    switch(i){ //Por cada caso realizará la operación correspondiente
        case 0:
            console.log(valores[1] + valores[5]); //Y lo escribe por consola con cada caso
            break;
        case 1: 
            console.log(valores[1] - valores[5]);
            break;
        case 2:
            console.log(valores[5] - valores[1]);
            break;
        case 3:
            console.log(valores[1] * valores[5]);
            break;
        case 4:
            console.log(valores[1] / valores[5]);
            break;
    }
}

if(valores[3] > valores[4]){  //El programa calcula inmediatamente el valor del String
    console.log(valores[0]); //En este caso si es mayor devolverá un "True" por consola
}else{
    console.log(valores[2]); //Devolverá false en caso contrario
}