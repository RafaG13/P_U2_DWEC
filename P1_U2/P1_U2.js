window.onload = function(){
	let numero = 0;
	do{
		numero = parseInt(prompt("Introduce un número (-1 para salir): "));
		if(isNaN(numero)) {
			alert("No has introducido un número")
		}else{
			alert("Has introducido un número");
		};
	}while(numero!=-1);
	alert("Cerrando programa");
}