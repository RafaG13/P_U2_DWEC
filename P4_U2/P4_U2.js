window.onload = function(){
	let numero = 0;

	do{
		numero = parseFloat(prompt("Introduce un número: "));
		if(isNaN(numero)) 
			alert("No has introducido un número");
		if(isNaN(numero<0)) 
			alert("Debes introducir un número mayor o igual que 0");
		if(numero%1!=0) 
			alert("Debes introducir un número entero");
	}while(isNaN(numero) || numero<0 || numero%1!=0);
	
	document.getElementById("tituloTabla").innerHTML = `Factorial de ${numero}`;
	
	function funFactorial(num){
		let cadenaOperaciones = "";
		cadenaOperaciones = num+"! = ";
		let factorial = 1;
		for(let i = 1;i<=num;i++) {
			factorial*=i;
			if(i!=num) {
				cadenaOperaciones+=i+"x";
			}else {
				cadenaOperaciones+=i;
			}
		}	
		if(num==0) {
			cadenaOperaciones+=factorial;
			return cadenaOperaciones;
		}else{
			cadenaOperaciones+=" = "+factorial;
			return cadenaOperaciones;
		}
		
	}
	
	let factorialFlecha = function(num) {let cadenaOperaciones = "";
		cadenaOperaciones = num+"! = ";
		let factorial = 1;
		for(let i = 1;i<=num;i++) {
			factorial*=i;
			if(i!=num) {
				cadenaOperaciones+=i+"x";
			}else {
				cadenaOperaciones+=i;
			}
		}	
		if(num==0) {
			cadenaOperaciones+=factorial;
			return cadenaOperaciones;
		}else{
			cadenaOperaciones+=" = "+factorial;
			return cadenaOperaciones;
		}};
	let factorialAnonima = ((num) => {let cadenaOperaciones = "";
		cadenaOperaciones = num+"! = ";
		let factorial = 1;
		for(let i = 1;i<=num;i++) {
			factorial*=i;
			if(i!=num) {
				cadenaOperaciones+=i+"x";
			}else {
				cadenaOperaciones+=i;
			}
		}	
		if(num==0) {
			cadenaOperaciones+=factorial;
			return cadenaOperaciones;
		}else{
			cadenaOperaciones+=" = "+factorial;
			return cadenaOperaciones;
		}});
	
	document.getElementById("funcionNormal").innerHTML = funFactorial(numero);
	document.getElementById("funcionAnonima").innerHTML = factorialFlecha(numero);
	document.getElementById("funcionFlecha").innerHTML = factorialAnonima(numero);
}
