function costokilomentros(tipobus){
	var costokilomentros = null;
	switch (tipobus) {
	case "A":
		costokilomentros = 2.0;
		break;
	case "B":
		costokilomentros = 2.5;
		break;
	case "C":
		costokilomentros = 3.0;
		break;
	}
	return costokilomentros;
}

//function costokilomentros(tipobus){
//	if (tipobus === "A")
//		return 2.0;
//	else if (tipobus === "B")
//		return 2.5;
//	else if (tipobus === "C")
//		return 3.0;
//}



function costototal(numeropersonas,costokilomentros,kilometros){
	if (numeropersonas>=20) 
		return numeropersonas*costokilomentros*kilometros;
	else if (numeropersonas<20)
		return 20*costokilomentros*kilometros;
}
 

console.log("el costo total es "+costototal(11,costokilomentros("B"),100));