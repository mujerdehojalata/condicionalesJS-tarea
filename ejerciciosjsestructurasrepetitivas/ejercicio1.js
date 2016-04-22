  var prompt = require('prompt');
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