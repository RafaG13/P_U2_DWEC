
let cuerpo = document.getElementById("cuerpo");

let	rojo = 0;
let	verde = 0;
let	azul=0;
let posicionX = 0;
let posicionY = 0;	

for(let i=0;i<2000;i++){
	rojo = Math.floor(Math.random()*255);
	verde =  Math.floor(Math.random()*255);
	azul =  Math.floor(Math.random()*255);
	posicionX = Math.floor(Math.random()*100);
	posicionY = Math.floor(Math.random()*100);
	
	
	
	document.write(`<div style='background-color:rgb(${rojo},${verde},${azul}); top:${posicionX}vh; left:${posicionY}vw;'></div>`);
	
}

	
