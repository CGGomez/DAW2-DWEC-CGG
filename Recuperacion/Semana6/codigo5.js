function suma(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let res = parseInt(n1) + parseInt(n2);
    console.log(res);
    document.getElementsById("result").readonly = res;
}

function resta(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let res = parseInt(n1) - parseInt(n2);
    console.log(res);
    document.getElementsById("result")= res;
}

function multiple(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let res = parseInt(n1) * parseInt(n2);
    console.log(res);
    document.getElementsById("result")= res;
}

function divid(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    if(n2 <= 0){
        alert("El segundo número no puede ser 0 o menor que este, por favor introduzca de nuevo el valor");
    }else{
        let res = n1 / n2;
        console.log(res);
        document.getElementsById("result") = res;
    }
}