let numeros = [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];

numeros.sort(function(a, b) {
    return a % 2 - b % 2 || a - b;
});

console.log(numeros);
document.write(numeros);