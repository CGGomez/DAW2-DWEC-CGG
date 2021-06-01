let texto = prompt("Introduzca un texto");
let clave = prompt("Introduzca la clave");

let codigo = '';
let num;

let mayus = "ABCDEFGHIJKLMNOPQRSTUWXYZ"
let minus = mayus.toLowerCase();

if(clave.length < texto.length || clave.length > texto.length){
    do{
        clave = prompt ("Su clave tiene una longitud menor o mayor al texto. Por favor, prcure que seu clave tenga una longitud de "+ texto.length+" caracteres");
    }while(clave.length < texto.length || clave.length > texto.length);
}

for(let i= 0; i < texto.length; i++){
    num = parseInt(clave.charAt(i));
    for (let j = 0 ; j < mayus.length; j++){
        if(texto.charAt(i) == mayus.charAt(j)){
            if(mayus.charAt(j+num > mayus.length)){
                codigo += mayus.charAt((j+num)-mayus.length);
            }
            codigo += mayus.charAt(j+num);
        }else if (texto.charAt(i) == minus.charAt(j)){
            if(minus.charAt(j+num > minus.length)){
                codigo += alphbet.charAt((j+num)-minus.length);
            }
            codigo += minus.charAt(j+num);
        }
    }
    if(texto.charAt(i) == " "){
        codigo+="%";
    }
}

alert(codigo);