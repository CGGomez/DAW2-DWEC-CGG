function palindromo(cadena) {

    let resultado = "La cadena \""+cadena+"\" \n";

    let re = /[^A-Za-z0-9]/g;
  
    // Pasar a minusculas la cadena
    let cadenaOriginal = cadena.toLowerCase();
  
    // Convertir la cadena en un array
    let letrasEspacios = cadenaOriginal.split("");
  
    // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
    let cadenaSinEspacios = "";
    for(i in letrasEspacios) {
      if(letrasEspacios[i] != " ") {
        cadenaSinEspacios += letrasEspacios[i];
      }
    }
  
    let letras = cadenaSinEspacios.split("");
    let letrasReves = cadenaSinEspacios.split("").reverse();
  
    // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
    let iguales = true;
    for(i in letras) {
      if(letras[i] == letrasReves[i]) {
        // Todo bien
      }
      else {
        // Alguna letra es distinta, por lo que ya no es un palindromo
        iguales = false;
      }
    }
  
    if(iguales) {
      resultado += " es un palíndromo";
    }
    else {
      resultado += " no es un palíndromo";
    }
  
    return resultado;
  }

  let texto = prompt("Introduzca una frase o palabra, se le indicará si es un palíndromo"); 
  
  alert(palindromo(texto));