var express = require('express');
var router = express.Router();

/* para novedades. */
router.get('/', async function(req, res, next) {
  res.render('admin/novedades',  { 
    layout: 'admin/layout',
    usuario:req.session.nombre
   });
});

module.exports = router;