const db = require("../models");// il va chercher index dans models
const User = require("../models/users_model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sercetCode = "qhdsddhqGLADYSd;sjkjhfdfbhdf";

exports.create = (req, res) => {
    
      const user = new User({
            Nom: req.body.Nom,
            Prenom: req.body.Prenom,
            Email: req.body.Email ,
            Mot_de_passe:req.body.Mot_de_passe
      } );

      user
      .save((err,user)=>{
        if(err){

          res.send('erreur' +err)
        }else{
          res.send(user)
        }
      })
     
}
exports.findAll = (req, res) => {
  // const ProduitTitre = req.query.ProduitTitre;
  // var condition = ProduitTitre ? { ProduitTitre: { $regex: new RegExp(ProduitTitre), $options: "i" } } : {};

  User.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "il y a eu des erreurs lors de la recherche des utilisateurs."
      });
    });
};

// Find a single user with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Ne trouve pas l'utilisateur cet ID " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};

exports.findAndLog = (req, res) => {
      console.log(req.body)
      User.findOne({ Mail: req.body.Mail }).then((user) => {
        console.log('verification',user)
        if (user !== null) {
          bcrypt.compare(req.body.Password, user.Password, (function (error, same) {
            if (same ) {
              const token = jwt.sign(
                {
                  email: user.Mail,
                  userId: user._id
                },
                sercetCode,
                {
                  expiresIn: "24h"
                }
              );
              console.log(user)
              res.status(200).json({
                "user": user,
                "token":token
              });
            }
            else {
              console.log("err");
              res.send(error)
            }
          }))
        } else {
          console.log("f err");
          res.sendStatus(401).send('Utilisateur non reconnu')
        }
      });
    
    };


// Update a user by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "l'utilisateur à mettre à jpour ne peut etre vide!"
    });
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })//chercher un produit 
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Ne peut mettre à jour avec l'id=${id}. peut etre l' utilisateur ne peut etre trouvé!`
        });
      } else res.send({ message: "Mise à jour de l' utilisateur a réussi." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};// erreur du criptage du mot de passe lors du update

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

exports.findAllSell = (req, res) => {
  Product.find({Sell: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user."
      });
    });
};


