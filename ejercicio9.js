function costotipoham(tipohan){
	var costotipoham = null;
	switch (tipohan) {
	case "S":
		costotipoham = 20;
		break;
	case "D":
		costotipoham = 25;
		break;
	case "T":
		costotipoham = 28;
		break;
	}
	return costotipoham;
}

function formadepago(credito){
	if (credito==1)
		return 1.05;
	else 
		return 1;
}

function costoham(Nhamburguesas,costotipoham,formadepago){
	if (Nhamburguesas>=1)
		return formadepago*Nhamburguesas*costotipoham;
	else 
		return "ingresa datos correctos";
}

console.log("el costo por "+costoham(4,costotipoham("T"),formadepago(1)));