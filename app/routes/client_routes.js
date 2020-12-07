module.exports = app => {
   
    var router = require("express").Router();
  router.get('/',(req,res)=>{
      res.send("accueil")
  })
  router.get('/app/views/produits',(req,res)=>{
    res.send("produits.html")
})
    
   
  
    app.use('/', router);
  };