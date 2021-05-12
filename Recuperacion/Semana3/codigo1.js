let texto = prompt("Introduzca una frase");
let textomayor = texto.toUpperCase();
console.log(textomayor);
let clave = prompt("Ahora introduzca la clave");
let clavenum = parseInt(clave);

do{
    clave = prompt("Clave no válida, por favor asegurese que su clave está comprendida entre los valores 1 y 26");
    clavenum = parseInt(clave);
}while(clavenum == 0 || clavenum >= 27);


console.log(clavenum);

let alphabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let cifrado = "";

for(let i = 0; i < textomayor.length; i++){
   for(let j = 0; j < alphabeto.length; j++){
        if(textomayor.charAt(i) == alphabeto.charAt(j)){
            if(alphabeto.charAt(j+clavenum > alphabeto.length)){
                cifrado += alphabeto.charAt((j+clavenum)-alphabeto.length)
            }
            cifrado += alphabeto.charAt(j+clavenum);
        }   
   }
}

alert(cifrado);