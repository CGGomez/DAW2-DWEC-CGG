alert("Se le va a exigir introduci cifras para un fecha, asegurese de que las cifras en cuestión están compuestos por 2 dígitos");

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

alert("Ahora introduzca otras cifras ddiferenes. Recuerde que deben tener dos dígitos");

dia = prompt("Introdudzca una cifra para el día");
mes = prompt("Introdudzca una cifra para el mes");
anio = prompt("Introdudzca una cifra para el año");

if(dia.length,mes.length,anio.length != 2){
    do{
        alert("Digtos no válidos. Poseen más o menos de 2 dígitos; inserte de nuevo");
        dia = prompt("Introdudzca una cifra para el día");
        mes = prompt("Introdudzca una cifra para el mes");
        anio = prompt("Introdudzca una cifra para el año");
    } while (dia.length, mes.length, anio.length !=2);
}

let d1 = parseInt(dia);
let m1 = parseInt(mes);
let a1 = parseInt(anio);

let date1 = new Date();
date1.setFullYear(d,m,a);
let date2 = new Date();
date2.setFullYear(d1,m1,a1);

let dif = date1.getTime() - date2.getTime();

let difDay = dif / (1000*3600*24);

document.write("Fecha 1: "+date1+"<br> Fecha 2: "+ date2+"<br> Diferencia entre ambos: "+difDay);