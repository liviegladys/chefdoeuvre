  const users = require("../controllers/users_controller.js");
    
      const router = require("express").Router();

      router.post("/", users.create);

      router.post("/login",users.findAndLog)

  
    // Afficher tous les utilisateurs
    router.get("/", users.findAll);
   
    // Retrouver l utilisateur par son id
    router.get("/:id", users.findOne);

    //router.get("/:id", users.findAndLog);
  
    // Mettre à jour l' utilisateur par id
    router.put("/:id", users.update);

  
      // Delete  
       router.delete("/:id", users.delete);
    
    module.exports=router;


