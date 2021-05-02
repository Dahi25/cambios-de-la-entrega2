const fs = require ('fs'); 
listaCursos= [];

const crear = (cursos) => {
	verCursos ();
	console.log(cursos)
	let Est = {
		id:cursos.id,
		nombre: Est.nombre,
		duracion: Est.duracion,
        precio:Est.precio,
		modalidad:Est.modalidad,
	    descripcion:Est.descripcion,
		intensidadh:Est.inth
	}
}
	//let duplicado = listaCursos.find(id => nombre.id == Est.id )//
	/*if (duplicado){
		console.log('ya existe')
	}
	else {
	listaCursos.push(Est)
	console.log(listaCursos)
	guardar()
	}
}*/
//guardar()//
const guardar = () => {
	let datos = JSON.stringify(listaCursos);
	fs.writeFile('src/Cursos.json', datos, (err)=>{
		if (err) throw (err);
		console.log('Archivo fue creado con éxito')
	})
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


//funcion para  crear un curso nuevo//
const crearCurso=(curso) =>{
	console.log("funciona " +curso.idCurso)
	if (curso){
		let cur= {
			id:curso.idCurso,
		    nombre:curso.nombreCurso,
			duracion:curso.duracionCurso,
			precio:curso.precioCurso,
			modalidad:curso.modalidadCurso,
			inth:curso.intensidadCurso,
			descripcion:curso.descripcionCurso
        }
		console.log(cur)
		listaCursos=require('./Cursos.json')
		listaCursos.push(cur)
		console.log(listaCursos)
        let resultado=`<div class='alert alert-success alert-dismissible fade show' role='alert'> se ha registrado el curso  correctamente<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
		let datos = JSON.stringify(listaCursos);
		fs.writeFile('src/Cursos.json', datos, (err)=>{
		if (err) throw (err);
			console.log('El curso fue creado con éxito')
		})
		resultado="correcto"
	}else{
	resultado=`<div class='alert alert-danger alert-dismissible fade show' role='alert'>ese id pertenece a un curso no disponible<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
	}
	return resultado
};
//para eliminar cursos//
       const eliminar = (id) => {
			console.log("holi"+idCu)
			//verCursos();//
			listaCursos = require ('./Cursos.json')
			let nuevo = listaCursos.filter(id=> id.idCu!=id.idCu)
			if (nuevo.length == listaCursos.length){
				return respuesta=`<div class='alert alert-danger alert-dismissible fade show' role='alert'>no se ha encontrado ese id<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
			}
			else {
			listaCursos = nuevo
			guardar()
		     respuesta=`<div class='alert alert-succes alert-dismissible fade show' role='alert'>${id}se ha eliminado el curso<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
			}
			return eliminar
		}
		/*let nuevo=listaCursos.filter(elemento1=>elemento1.idCurso!=Est.id)
     if(nuevo.length==listaCursos.length){
		   return respuesta=`<div class='alert alert-succes alert-dismissible fade show' role='alert'>se ha registrado correctamente el curso<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
	   }
	   else{
	   listaCursos=nuevo
	   guardar()
	}
}
*/


module.exports = {
	crear,
	
	guardar,
	
	matricular,
	//inscripcion//
	crearCurso,
	eliminar
};