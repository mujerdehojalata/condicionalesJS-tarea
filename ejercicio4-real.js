function preciotraje(precio){
	if (precio>2500)
		return 0.85*precio;
	else 
		return 0.92*precio;
}

function descuento(precio){
	if (precio>2500)
		return "descuento del 15%";
	else 
		return "descuento del 8%";
}
console.log("el precio que debe pagar por un traje es "+preciotraje(1000)+" con "+descuento(1000));