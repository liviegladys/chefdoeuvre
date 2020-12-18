module.exports = app => {
   
    var router = require("express").Router();
  router.get('/',(req,res)=>{
      res.render("accueil")
  })
  router.get('/produits',(req,res)=>{
    res.render("produits")
})
    
router.get('/modifierProduit',(req,res)=>{
  res.render("modifierProduit")
})

router.get('/supprimerProduit',(req,res)=>{
  res.render("supprimerProduit")
})

router.get('/ajoutProduit',(req,res)=>{
  res.render("ajoutProduit")
})

router.get('/inscription',(req,res)=>{
  res.render("inscription")
})

  router.get('/inscriptionParticulier',(req,res)=>{
    res.render("inscriptionParticulier")
  })
  
  router.get('/inscriptionProfessionnel',(req,res)=>{
    res.render("inscriptionProfessionnel")
  })
  
    app.use('/', router);
  };