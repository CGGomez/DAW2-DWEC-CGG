alert("Se le va a exigir introducr cifras para su fecha de cumpleaños, asegurese de que las cifras en cuestión están compuestos por 2 dígitos");

let dia = prompt("Introdudzca una cifra para el día");
let mes = prompt("Introduzca una cifra para el mes");
let anio = prompt ("Introduzca una cifra para el año");

if(dia.length,mes.length,anio.length != 2){
    do{
        alert("Digtos no válidos. Poseen más o menos de 2 dígitos; inserte de nuevo");
        dia = prompt("Introdudzca una cifra para el día");
        mes = prompt("Introdudzca una cifra para el mes");
        anio = prompt("Introdudzca una cifra para el año");
    } while (dia.length, mes.length, anio.length !=2);
}

let d = parseInt(dia);
let m = parseInt(mes);
let a = parseInt(anio);

let date1 = new Date();
date1.setFullYear(d,m,a);

console.log(date1.getTime());