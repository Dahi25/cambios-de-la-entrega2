const express = require('express')
const app=express()
const path = require('path')
const hbs = require('hbs')
const bodyParser =require ('body-parser')

require('./helpers/helpers')


//path//
 const dirPublic=path.join(__dirname ,"../public")//para unir carpetas//
 const dirViews=path.join(__dirname ,"../template/views")
 const dirPartials=path.join(__dirname ,"../template/partials")

 //Static
app.use(express.static(dirPublic))

//BodyParser
app.use(bodyParser.urlencoded({extended : false}))

//hbs
app.set('view engine', 'hbs');
app.set ('views', dirViews);
hbs.registerPartials(dirPartials)

//Paginas
app.get('/', function (req, res) {
    res.render('index', {
        titulo: 'Inicio'
    })
  })
  app.post('/matricular', function (req, res){
    res.render('index', {
      titulo:'inscripcion',
      idC: req.body.idCurso,
      nombreEst: req.body.nombreEstudiante,
      cedula:req.body.Cedula,
      correo:req.body.email,
      modalidad:req.body.modalidad,
      intensidadh:req.body.intensidad_horaria,
      descurso:req.body.descripcioncurso
      
  })
  });

  app.post('/cursos', function (req, res){
    res.render('index', {
      titulo:'Registro de curso',
      idCu: req.body.idCurso,
      nombreCu: req.body.nombre,
      duracionCu:req.body.duracion,
      precioCu:req.body.precio,
      modalidadCu:req.body.modalidad,
      intensidadh:req.body.inth,
      descrip:req.body.descripcion
      
  })
  console.log("funciona " +req.body.idCurso)
  });
  
  app.get('/cursos2', function(req, res) {
    res.render('cursos2',{
      titulo: 'Ver cursos disponibles',
      id: req.body.id,
      nombre: req.body.nombre,
      duracion:req.body.duracion,
      precio:req.body.precio,
      modalidad:req.body.modalidad,
      intensidadh:req.body.inth,
      descurso:req.body.descripcion
    })
  });
  
  app.get('/descripcion', function (req, res){
    res.render('descripcion', {
      titulo:'Descripcion de los cursos'		
    })
  })
  
  app.post('/descripcion', function (req, res){
    res.render('descripcion', {
      titulo:'Descripcion de los cursos',
      id: req.body.id,
      nombre: req.body.nombre,
      intensidadh:req.body.inth,
      descurso:req.body.descripcion
  })
     })
  app.listen(3000, () => {
	console.log ('Servidor en el puerto 3000')
})
 
