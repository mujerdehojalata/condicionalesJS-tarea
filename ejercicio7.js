function cuotacompañia(alumnos){
	if (alumnos>=100)
		return alumnos*65;
	else if (alumnos>50 && alumnos<99)
		return alumnos*70;
	else if (alumnos>30 && alumnos<49)
		return alumnos*95;
	else if (alumnos<30)
		return 4000;
}

function cuotalumno(alumnos){
	if (alumnos>=100)
		return 65;
	else if (alumnos>50 && alumnos<99)
		return 70;
	else if (alumnos>30 && alumnos<49)
		return 95;
	else if (alumnos<30)
		return 4000/alumnos; 
}

console.log("se debe pagar "+cuotacompañia(60)+ "y cada alumno debe pagar" +cuotalumno(60));