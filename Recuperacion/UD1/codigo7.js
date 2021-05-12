let num = window.prompt("Introduzca un número, se realizará su factorial"); //Recibe el número por parte del usuario

document.write("<p> !"+num+": "); //Preparamos para escribir

for(let i = num; i > 1;i--){ //Recorremos desde el número introducido hasta 1
    document.write(i+"*"); //Añadimos una nueva interacción a la cadena que empezamos arriba con cada valor
    if(i-1 != 0){ //Debemos realizar la operación y guardarla mientras no sea 0 para que no afecte al resultado
        num = num *(i-1); 
    }
}

document.write("1 ="+num+"</p>"); //Escribimos el final y el resultado, cerrando también la etiqueta HTML
