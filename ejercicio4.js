function costoplato (nropersonas){
	if(nropersonas<=200)
		return 95;
	else if(nropersonas>200 && nropersonas<=300)
		return 85;
	else if(nropersonas>300)
		return 75;
}

function costobanquete (nropersonas){
	return costoplato(nropersonas)*nropersonas;
}
console.log("el costo del banquete es $"+costobanquete(300));