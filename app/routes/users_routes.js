module.exports = app => {
      const users = require("../controllers/users_controller.js");
    
      var router = require("express").Router();

      router.post("/", users.create);


      router.put("/:id", users.update);
  
      // Delete  
      router.delete("/:id", users.delete);
    
      app.use('/api/users', router);


};