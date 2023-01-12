var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

/* para novedades. */
router.get('/', async function(req, res, next) {
  var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades',  { 
    layout: 'admin/layout',
    usuario:req.session.nombre,
    novedades
   });
});

// Para agregar uno Nuevo
router.get('/agregar',(req, res, next)=> {
  res.render('admin/agregar', { //agregar.hbs
    layout:'admin/layout'
  }) //cierre render
}); //cierre Get

router.post('/agregar', async(req, res, next)=>{
  // console.log('estoy adentro');
  try {
    console.log('estoy pasando');
    // var img_id = '';

    // if(req.files && Object.keys(req.files).length > 0) {
    //   imagen = req.files.imagen;
    //   img_id = (await uploader(imagen.tempFilePath)).public_id;
    // }

    console.log(req.body)
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") 
    {
      console.log(req.body)
      await novedadesModel.insertNovedad(req.body);
        // {
        // ...req.body,
        // img_id
      // });
      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo la novedad'
    })
  }
})


router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id; // obtengo el id
  var novedad = await novedadesModel.getNovedadById(id);
  
  res.render('admin/modificar', {
    layout: 'admin/layout',
    novedad
  });
});


router.post('/modificar', async (req, res, next) => {
  try{
    let img_id = req.body.img_original;
    let borrar_img_vieja = false;

    console.log(img_id) //Para ver los datos
    if(req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if(req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;        
      }
    }
    if(borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    var obj = {
      titulo: req.body.titulo,
      subtitulo:req.body.subtitulo,
      cuerpo: req.body.cuerpo,
      img_id
    }

    console.log(obj) //Para ver los datos
    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');
  } catch (error) {
    console.log(error);
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico la novedad'
    })
  }
});

module.exports = router;