/*Este archivo se enlaza en el html para usar esta función en el js principal*/
function comprobarRepetido(vector, candidato){
	for(let valor of vector){
		if(valor==candidato){
			alert("Ese valor está repetido. Cuenta como intento...");
			return true;	
		}
	}
	return false;
}


