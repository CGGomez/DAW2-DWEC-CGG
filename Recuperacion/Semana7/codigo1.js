let texto = prompt("Introduzca el texto para sustituir en párrafo");
let numero = prompt("Ahora el número del párrafo a sustituir");

let n = parseInt(numero);

if(n > document.getElementsByTagName("li").length){
    do{
        alert("Ese párrafo no existe, vuelva a introdicirlo");
        numero = prompt("Numero dentro del rango");
        n = parseInt(numero);
    }while(n > document.getElementsByTagName("li").length);
}else{
    for(let i = 0; i < document.getElementsByTagName("li".length);i++){
        if(i == n){
            
        }
    }
}
