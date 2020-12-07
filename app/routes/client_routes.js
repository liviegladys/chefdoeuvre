module.exports = app => {
   
    var router = require("express").Router();
  router.get('/',(req,res)=>{
      res.send("accueil")
  })
  router.get('/produits',(req,res)=>{
    res.send("produit")
})
    
   
  
    app.use('/', router);
  };