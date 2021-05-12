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

alert ("Introduzca la fecha de hoy, mismo reglamento que la fecha de su cumpleaños");

let dia1 = prompt("Introdudzca una cifra para el día");
let mes2 = prompt("Introduzca una cifra para el mes");
let anio2 = prompt ("Introduzca una cifra para el año");

if(dia.length,mes.length,anio.length != 2){
    do{
        alert("Digtos no válidos. Poseen más o menos de 2 dígitos; inserte de nuevo");
        dia1 = prompt("Introdudzca una cifra para el día");
        mes2 = prompt("Introdudzca una cifra para el mes");
        anio2 = prompt("Introdudzca una cifra para el año");
    } while (dia1.length, mes2.length, anio2.length !=2);
}

let d1 = parseInt(dia1);
let m2 = parseInt(mes2);
let a2 = parseInt(anio2);

let hoy = new Date();
hoy.setFullYear(d1,m2,a2);

let hasta = hoy.getTime() - date1.getTime();

alert("El tiempo hasta su próximo cumpleaños es de: "+hasta+" milisegundos");