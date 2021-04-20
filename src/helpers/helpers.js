const hbs = require ('hbs');
const funciones = require('../funciones')
const fs = require ('fs');
/*const { type } = require('node:os');*/


hbs.registerHelper('verCursos', ()=>{
	listaCursos = require ('../Cursos.json')
	let resultado = "";
	resultado=resultado+"<table><thead><th>id</th><th>nombre</th><th>duracion</th><th>precio</th><th>Modalidad</th> <th>Descripcion</th><th>Intensidad horaria</th></thead>"
	listaCursos.forEach(Cur => {
		resultado = `${resultado} <tr><td> ${Cur.id} </td> 
						<td> ${Cur.nombre} </td>
						<td> ${Cur.duracion} </td>
						 <td>${Cur.precio}</td>
						   <td>${Cur.modalidad}</td>
						   <td>${Cur.descripcion}</td>
						   <td>${Cur.inth}</td>
						   </tr>`
})	
		resultado= resultado + "</tbody></table>"			
	return resultado
});

hbs.registerHelper('listarCursos',()=>{
	listaCursos= require ('../Cursos.json')
	 /*let resultado="<select name='id' class='form-control'>";	
	listaCursos.forEach(Est => {
		resultado = `${resultado} <option value='${Est.id}'>${Est.nombre}</option>`		
		})	
		
		resultado = resultado + "</select>"
		*/
/*	return resultado */
});

hbs.registerHelper('vercursos', (name="id") => {
	listaCursos = require ('../Cursos.json')
	let descubrir = listaCursos.find(buscar => buscar.id == id)
	if (descubrir){
		resultado = "<div class='alert alert-success' role='alert'> Curso encontrado</div>"
		resultado = resultado + ` El id es ${descubrir.id} <br> 
					El nombre es ${descubrir.nombre} <br>
					La duracion es ${descubrir.duracion} <br>
					El precio del curso   es ${descubrir.precio}
					La modalidad de este curso es:${descubrir.modalidad}
					La modalidad descripcion de este curso es:${descubrir.descripcion}
					Este  curso  tiene una intensidad horaria de:${descubrir.inth}
					<br>`
	               
				}
	else resultado = "<div class='alert alert-danger' role='alert'> Ese id ya existe en otro curso</div><br>"
	return resultado 
});

     
hbs.registerHelper('registrar', (idC, nombreEst, cedula, correo,modalidad, intensidadh, descurso) =>{
	if(cedula ){
		let aspirante={
			id:idC,
			nombre:nombreEst,
			cedula:cedula,
			correo:correo,
			modalidad:modalidad,
	        inth:intensidadh,
			descripcion:descurso
			
		}
		try{
			return funciones.matricular(aspirante)
		}catch (error){
			
	 return	resultado=`<div class='alert alert-danger alert-dismissible fade show' role='alert'>ese id pertenece a un curso no disponible<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
	}
    }
});



     //para crear un curso en la pagina cursos//
hbs.registerHelper('crear_Curso', (idCu, nombreCu, duracionCu, precioCu,modalidadCu, intensidadh, descrip) =>{
	//console.log("funciona " +idCu)//
	if(idCu){
		let curso={
			idCurso:idCu,
			nombreCurso:nombreCu,
			duracionCurso:duracionCu,
			precioCurso:precioCu,
			modalidadCurso:modalidadCu,
	        intensidadCurso:intensidadh,
			descripcionCurso:descrip
			
		}
		try{
			return funciones.crearCurso(curso)
		}catch (error){
			
	 return	resultado=`<div class='alert alert-danger alert-dismissible fade show' role='alert'>ese id pertenece a un curso no disponible<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
	}
    }
});



