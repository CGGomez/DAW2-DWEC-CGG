let hoy = new Date();

if(hoy.getDay() == 7  || hoy.getDay() == 6 || hoy.getHours()>=14 || hoy.getHours() <= 9){
    alert ("Pagina Cerrada");
}else{
    alert("Bienvenido");
}