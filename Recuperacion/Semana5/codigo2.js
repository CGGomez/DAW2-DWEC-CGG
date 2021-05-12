function Descripcion(){
    let descr = document.getElementsByClassName("desc");
    descr.innerHTML ="<p>Descripción</p><p><textarea></textarea></p>";
}

let selection = document.getElementsByClassName("informe").value;

if(selection =="Distribución"){
    document.write("<img src='Junk.png'");
}

function serie(){
    let largo = document.getElementById("numerodeSerie").value;
    if(largo.charAt(largo.length -1) == "A" || largo.charAt(largo.length -1) == "1" || largo.charAt(largo.length -1) == "2"){
        document.getElementById("numerodeSerie").style.borderColor = "green";
    }else{
        document.getElementById("numerodeSerie").style.borderColor = "red";
    }
}