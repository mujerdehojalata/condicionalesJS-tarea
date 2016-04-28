/*  var prompt = require('prompt');
  var suma=0;
var A = 0;

 prompt.start();
function sumfunction(){
	while(A<10){
		 
		prompt.get("ingresa un dato"+ (A+1), function(err, result) {
			numero=result;
			console.log(numero);	
			suma=suma+numero;
			// A++;
		});
		A++;
	}
	return suma;
};

suma2 = sumfunction();

console.log("la suma es" +suma2);
*/



// EJERCICIO 1
//variables globales!!!

var sumaUno = 0;
var i = 0;

function sumatoria() {
	while(i < 10) {
		numero = Number(prompt(" ingresa tu número " + (i+1)));
		sumaUno = sumaUno + numero; // Se almacena la sumaUno
		i++;
	}
	document.getElementById("p1").innerHTML = "La suma de tus números es " + sumaUno;
}

// EJERCICIO 2

function sumatoriawhile(){
	do{
		numero = Number(prompt(" ingresa tu número " + (i+1)));
		sumaUno = sumaUno + numero; // Se almacena la sumaUno
		i++;
		document.getElementById("p2").innerHTML = "La suma de tus números es " + sumaUno;
	}while(i<10);
}

// EJERCICIO 3

function sumatoriafor(){
	for(i=0;i<10;i++){
		numero = Number(prompt(" ingresa tu número " + (i+1)));
		sumaUno = sumaUno + numero; // Se almacena la sumaUno
		document.getElementById("p3").innerHTML = "La suma de tus números es " + sumaUno;
	}
}

// EJERCICIO 4
// con FOR

function promedio_uno(){
	for(i=0;i<8;i++){
		numero = Number(prompt(" ingresa tu número " + (i+1)));
		sumaUno = sumaUno + numero; // Se almacena la sumaUno
		document.getElementById("p4_1").innerHTML = "el promedio de tus números es " + (sumaUno/8);
	}
}

// CON WHILE

function promedio_dos(){
	while(i<8){
		numero = Number(prompt(" ingresa tu número " + (i+1)));
		sumaUno = sumaUno + numero; 
		i++;
		document.getElementById("p4_2").innerHTML = "el promedio de tus números es " + (sumaUno/8);
	}
}



// CON DO WHILE

function promedio_tres(){
	do{
		numero = Number(prompt(" ingresa tu número " + (i+1)));
		sumaUno = sumaUno + numero; 
		i++;
		document.getElementById("p4_3").innerHTML = "el promedio de tus números es " + (sumaUno/8);
	}while(i<8);
}

// EJERCICIO 5

//Realice un algoritmo para generar e imprimir los números pares que se encuentran entre 0 y 100.

//http://www.forosdelweb.com/f13/aporte-ejercicio-algoritmo-907930/

function pares(){
	for(i=1;i<=100;i++)
{
  if(i%2==0)
  {
  	document.write= (i,"<br/>");
  }
}
}

//EJERCICIO 6
//Un triangulo rectángulo puede tener 
//lados que sean todos enteros. El conjunto de tres valores enteros para los 
//lados de un triángulo rectángulo se conoce como una terna pitagórica. Estos 
//tres lados deben satisfacer la relación de que la suma de los cuadrados de dos lados 
//es igual al cuadrado de la hipotenusa. Encuentre todas las ternas de Pitágoras para el 
//cateto opuesto, cateto adyacente e hipotenusa, todos ellos no mayores de 500.

function ternasPitagoricas(){
	for ( var i = 1; i <= 500; i++ )
		for ( var j = 1; j <= 500; j++ )
			for ( var k = 1; k <= 500; k++ )
				if ( i*i == j*j + k*k )
					document.write("("+i+" , "+j+" , "+k+" ) ");
}

