let meses = new Array; //Se declara un Array con el nombre que deseamos;

meses[0] = "Enero";
meses[1] = "Febrero";
meses[2] = "Marzo";
meses[3] = "Abril";
meses[4] = "Mayo";
meses[5] = "Junio";
meses[6] = "Julio";
meses[7] = "Agosto";
meses[8] = "Septiembre";
meses[9] = "Octubre";
meses[10] = "Nomviembre";
meses[11] = "Diciembre"; /*En este caso, introducir los datos uno a uno, puede ser cualquier tipo de dato*/

for(let i = 0; i < meses.length; i++){ //Con este bucle escribimos uno a uno los espacios asignados del Array con datos disponibles.
    console.log(meses[i]);  //Así escribimos exclusivamente el valor al que corresponde I al momeno de pasar por el Array
}

console.log(meses); /*Este hace lo mismo, pero los muestra seguidos y con elementos de String (Comillas dobles)
además del la esctructura del Array, comenzando y acabando con corchetes además de la longitud del mismo*/