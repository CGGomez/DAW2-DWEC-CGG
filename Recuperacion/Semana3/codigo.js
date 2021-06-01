let texto = prompt("Introduzca un texto");
let clave = prompt("Introduzca la clave");

let num = parseInt(clave);
let codigo ="";
let cadena = texto.toUpperCase();

if(num === 0 || num >=27){
    do{
        clave = prompt("Clave no válida, por favor asegurese de que está comprendida entre las cifras 0 y 27");
        num = parseInt(clave);
    }while(num === 0 || num >= 27);
}


let alphbet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for(let i =0; i < cadena.length; i++){
    for(let j = 0; j < alphbet.length; j++){
        if(cadena.charAt(i) == alphbet.charAt(j)){
            if(alphbet.charAt(j+num > alphbet.length)){
                codigo += alphbet.charAt((j+num)-alphbet.length);
            }
            codigo += alphbet.charAt(j+num);
            
        }
    }
}

alert(codigo);