let numero1 = 5;
let numero2 = 8;

if(numero1 < numero2) { //Comprueba el primer valor y el segundo
    console.log("numero1 no es mayor que numero2"); //Cuando cumple entra en esta parte y escribe el texto por consola
}

if(numero2 >= 0) {
    console.log("numero2 es positivo");
}
 
if(numero1 < 0 || numero1 !=0) {
        console.log("numero1 es negativo o distinto de cero");
}

if(numero1+1 <= numero2) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}