var numLoads = parseInt(getCookie('pageLoads'), 10);

if (isNaN(numLoads) || numLoads <= 0) { setCookie('pageLoads', 1); }
else { setCookie('pageLoads', numLoads + 1); }

console.log(getCookie('pageLoads'));