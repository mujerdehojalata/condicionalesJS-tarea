function manodeobra(articulo,materia){
	if (articulo==3 || articulo==4)
		return materia*0.75;
	else if (articulo==1 || articulo==5)
		return materia*0.8;
	else if (articulo==2 || articulo==6)
		return materia*0.3;
} 

function fabricacion(articulo,materia){
	if (articulo==2 || articulo==5)
		return materia*0.3;
	else if (articulo==3 || articulo==6)
		return materia*0.35;
	else if (articulo==1 || articulo==4)
		return materia*0.28;
}

function produccion(articulo,materia){
	return materia+manodeobra(articulo,materia)+fabricacion(articulo,materia);
}

function preciodeventa(articulo,materia){
	return produccion(articulo,materia)*1.45;
}
console.log("el precio de venta del articulo elegido es : s/."+preciodeventa(1,0.5));