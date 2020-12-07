const db = require("../models");// il va chercher index dans models
const User = db.user;

exports.create = (req, res) => {
      
      

      const user = new User({
            Nom: req.body.Nom,
            Prenom: req.body.Prenom,
            Email: req.body.Email ,
            Mot_de_passe:req.body.Mot_de_passe
      } );

      user
      .save(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "il y a eu des erreurs lors de la création de votre compte."
        });
      });
}
  