let texto = prompt("Introduzca un texto");
let clace = prompt ("Introduzca una clave, a poder ser de la misma longitud que el texto introducido");

let codigo = '';
let num;

let mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let minus = mayus.toLowerCase();

if (clace.length != texto.length){
    do{
        clace = prompt("La longitud de su clave no es igual a la de su texto. Longitud de texto: "+ texto.length);
    }while(clace.length < texto.length || clace.length > texto.length);
}


for(let i = 0; i < texto.length; i++){
    for (let j = 0; j < mayus.length; j++){
        let num = ParseInt(clace.charAt(i));
        if(texto.charAt(i)== mayus.charAt(j)){
            if(mayus.charAt(j+num > mayus.length)){
                codigo += mayus.charAt((j+num)-mayus.length)
            }
            codigo += mayus.charAt(j+num);
        }else if (texto.charAt(i) == minus.charAt(j)){
            if(minus.charAt(j+num > minus.length)){
                codigo += minus.charAt((j+num)-minus.length)
            }
            codigo += minus.charAt(i+num);
        }
    }
    if (texto.charAt(i)== " "){
        codigo+= "%";
    }
}

alert(codigo);