let DNI = window.prompt("Indique su número de DNI"); //En una ventana emergente escribimos el valor del DNI
let letra = window.prompt("Ahora indique su letra"); //En otra ventana emergente la letra que creemos que coincide

var letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
//Definimos un Array con todas las opciones disponibles para el resultado que haremos después

if(DNI > 99999999 || DNI <=0){ //Comprobamos el valor del DNI introducido por el usuario
    alert("Numero proporcionado no válido. Fin del programa"); //Aquí se pasó o se quedó corto, no son valores válidos
}else{
    let correstpond =DNI % 23;
    if(letra == letras[correstpond]){
        alert("la letra proporcionada corresponde a la que le toca en su DNI");
    }else{
        alert("la letra proporcionada no corresponde a la que le toca en su DNI");
    }
}

/*Advertencia, puede darse el caso de que el Prompt en ciertos navegadores aparezcan del mismo color que el fondo
haciendo imposible saber si se está introduciendo algún tipo de texto o número. En este caso, pase el cursor
y seleccione lo que haya escrito para segurarse de que está bien. El navegador en cuestión ha sido Opera*/ 