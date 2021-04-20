const fs = require ('fs'); 
listaCursos= [];

const crear = (cursos) => {
	verCursos ();
	let Est = {
		id: Est.id,
		nombre: Est.nombre,
		duracion: Est.duracion,
        precio:Est.precio,
		modalidad:Est.modalidad,
		descripcion:Est.descripcion,
		intensidadh:Est.inth
	}
	let duplicado = listaCursos.find(id => nombre.id == Est.id )
	if (duplicado){
		console.log('ya existe')
	}
	else {
	listaCursos.push(Est)
	console.log(listaCursos)
	guardar()
	}
}



const guardar = () => {
	let datos = JSON.stringify(listaCursos);
	fs.writeFile('src/Cursos.json', datos, (err)=>{
		if (err) throw (err);
		console.log('Archivo fue creado con éxito')
	})
}

const ver = () => {
	verCursos()
	listaCursos.forEach(Est=> {
		console.log("El id es " + Est.id)
		console.log("el nombre  del curso es " + Est.nombre)
		console.log("la duracion es " + Est.duracion)
        console.log("el precio del curso es" + Est.precio)
		console.log("la modalidad del curso es" + Est.modalidad)
		console.log("la descripcion del curso es" + Est.descripcion)
		console.log("la intensidad del curso es" + Est.inth)
		console.log("\n")
	})	
}
/*
const actualizar = (cursos) => {
	verCursos()
	console.log (cursos)
	let descubrir = listaCursos.find(buscar => buscar.id.nombre == Est.id)
	if (!descubrir){
		console.log("no existe el curso ni el id")
	}
	else {
		if (Est.prueba != 'no') encontrar['nombreEst'] = Est.prueba
		if (Est.Cedula != 'no') encontrar['Cedula'] = Est.Cedula
		//console.log(listaCursos)
		//console.log(encontrar)
		//console.log(curso.nombre)
		guardar()
	}
}
*/
const eliminar = (id) => {
	ver()
	let nuevo = listaCursos.filter(id => id.id!= id)
	if (nuevo.length == listaCursos.length){
		console.log ("el id ya pertenece a otro curso")
	}
	else {
	listaCursos = nuevo
	guardar()
	}
}

//funcion para matricularce//
const matricular=(aspirante) =>{
	if (aspirante){
		let Est= {
		    nombre:aspirante.nombre,
			cedula:aspirante.cedula,
			correo:aspirante.correo,
			modalidad:aspirante.modalidad,
		intensidadhoraria:aspirante.inth,
		descripcionCurso:aspirante.descripcion
			}
		listaestudiante = require ('./estudiantes.json')
		listaaspicur = require ('./aspicur.json')
		let union={
             cedula:aspirante.cedula,
			 curso:aspirante.id,
			 modalidad:aspirante.modalidad,
			 intensidadhoraria:aspirante.inth,
			descripcionCurso:aspirante.descripcion
		
		}
		listaaspicur.push(union)
		listaestudiante.push(Est)
		let datos2 = JSON.stringify(listaaspicur);
		fs.writeFile('src/aspicur.json', datos2, (err)=>{
		if (err) throw (err);
			console.log('La relacion fue creada')
		})	
        let resultado= `<div class='alert alert-success alert-dismissible fade show' role='alert'>  matriculad@<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
		let datos = JSON.stringify(listaestudiante);
		fs.writeFile('src/estudiantes.json', datos, (err)=>{
		if (err) throw (err);
			console.log('El estudiante fue creado con éxito')
		})
		return resultado
	}else{
	resultado=`<div class='alert alert-danger alert-dismissible fade show' role='alert'>ese id pertenece a un curso no disponible<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`//
	}
};

//funcion para matricularce//
const crearCurso=(curso) =>{
	/*console.log("funciona " +curso)*/
	if (curso){
		let cur= {
			id:curso.idCu,
		    nombreCurso:curso.nombreCu,
			duracionCurso:curso.duracionCu,
			precioCurso:curso.precioCu,
			modalidadCurso:curso.modalidadCu,
			intensidadCurso:curso.intensidadh,
			descripcion:curso.descrip
        }
		listacurso = require ('./Cursos.json')
		
		listacurso.push(cur)
        let resultado= `<div class='alert alert-success alert-dismissible fade show' role='alert'>  matriculad@<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
		let datos = JSON.stringify(listacurso);
		fs.writeFile('src/Cursos.json', datos, (err)=>{
		if (err) throw (err);
			console.log('El curso fue creado con éxito')
		})
		return resultado
	}else{
	resultado=`<div class='alert alert-danger alert-dismissible fade show' role='alert'>ese id pertenece a un curso no disponible<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
	}
};



module.exports = {
	crear,
	ver	,
	//verCursos,//
	//actualizar//
	eliminar,
	matricular,
	//inscripcion//
	crearCurso
}