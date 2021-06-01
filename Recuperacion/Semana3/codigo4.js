let asterisco =[];

for (let i = 0; i < 20; i++){
    asterisco[i] = Math.floor(Math.random()*50+1);
}

for (let i = 0; i < asterisco.length; i++){
    console.log(asterisco[i]);
    let num = parseInt(asterisco[i]);
    for(let j = 0; j < num; j++){
        document.write("*");
    }
    document.write("<br>");
}