let velocidad = 0;

let p = document.getElementsByTagName("div");

p = document.write("Velocidad: "+velocidad);
document.onkeydown = checkKey;

function checkKey(e){
    e = e || window.event;

    if(e.keyCode == '38'){
        velocidad++;
        if(velocidad > 120){
            velocidad = 0;
        }
        p = document.write ("Velocidad: "+velocidad);
        document.write("<br>");
        document.onkeydown = checkKey;
    }

    if(e.keyCode =='40'){
        velocidad--;
        if(velocidad < 0){
            velocidad = 120;
        }
        p = document.write("Velocidad: "+velocidad);
        document.write("<br>");
        document.onkeydown = checkKey;
    }
}