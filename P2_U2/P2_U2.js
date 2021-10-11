window.onload = function(){

	const cabecera = document.getElementById("cabecera");

	let	rojo = Math.floor(Math.random()*255);
	let	verde =  Math.floor(Math.random()*255);
	let	azul =  Math.floor(Math.random()*255);
		
	let cadenaColor = `* {background-color:rgb(${rojo},${verde},${azul});}`;
	cabecera.innerHTML = cadenaColor;

	let porcentajeRojo = ((rojo/255)*100).toFixed(2);
	let porcentajeVerde = ((verde/255)*100).toFixed(2);
	let porcentajeAzul = ((azul/255)*100).toFixed(2);
		
	document.getElementById("rojo").innerHTML = `${porcentajeRojo}%`;
	document.getElementById("verde").innerHTML = `${porcentajeVerde}%`;
	document.getElementById("azul").innerHTML = `${porcentajeAzul}%`;
	
}