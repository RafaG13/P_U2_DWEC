
window.onload = function(){
	let tabla = "<tr><th>Intentos</th><th>Números introducidos</th><th>Número secreto</th></tr>"; 
	do{
		
		let numeroSecreto = Math.round(Math.random()*100+1);
		let intentos = 0;
		let intento = 0;
		let acierto = false;
		let introduceCadena = false;
		let numerosIntroducidos = [];	
		do{
			intento = parseFloat(prompt("Introduce un número: "));
			
			if(isNaN(intento)){
				alert("Has introducido un valor no numérico.");
			}else if(intento%1!=0 || intento<=0){
				alert("Debes introducir números enteros positivos");
			}else{
				
				intentos++;
				
				if(!comprobarRepetido(numerosIntroducidos, intento)) numerosIntroducidos.push(intento);
				
				if(intento>numeroSecreto){
					alert("¡Te has pasado! El número secreto es más pequeño");
				}else if(intento<numeroSecreto){
					alert("¡Te has quedado corto! El número secreto es más grande");
				}else{
					alert("¡Has acertado! El número secreto era "+numeroSecreto+"\nHas necesitado "+intentos+" intentos.");
					acierto = true;
				}
			}
		}while(acierto==false && introduceCadena==false);
		
		tabla+= `<tr><td>${intentos}</td><td>${numerosIntroducidos}</td><td>${numeroSecreto}</td></tr>`;
		
	}while(confirm("¿Quieres volver a jugar?"));
	
	document.getElementById("tabla").innerHTML = tabla;
	
}
	
