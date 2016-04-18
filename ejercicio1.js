function promedio (a,b,c){

	if(a>=1 && a<=10 && b>=1 && b<=10 && c>=1 && c>=10)
	return (a+b+c)/3;
	else 
	return "ingresa ota vez los numeros";
}

function mensaje (nota) {
	if (nota<=6)
	return "desaprobado";
	else
	return "aprobado";
} 

console.log(mensaje(promedio(6,7,8)));