const db = require("../models");// il va chercher index dans models
const Product = db.product;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.ProduitTitre) {//si le titre n' existe pas 
      res.status(400).send({ message: "Le titre du produit ne peut etre vide!" });
      return;// le programme s' arrete 
    } 

    if (!req.body.ProduitPrix) {//si le titre n' existe pas 
      res.status(400).send({ message: "Le Prix du produit  est obligatoire!" });
      return;// le programme s' arrete 
    } 
  
    // Create a Tutorial
    const product = new Product({
      ProduitTitre: req.body.ProduitTitre,
      ProduitDescrip: req.body.ProduitDescrip,
      ProduitPrix: req.body.ProduitPrix ,
      ProduitRegion:req.body.ProduitRegion,
      ProduitPic:req.body.ProduitPic
    
    });
  
    // Save Tutorial in the database
    product
      .save(product)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "il y a eu des erreurs lors de la création du produit."
        });
      });
  };

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    // const ProduitTitre = req.query.ProduitTitre;
    // var condition = ProduitTitre ? { ProduitTitre: { $regex: new RegExp(ProduitTitre), $options: "i" } } : {};
  
    Product.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "il y a eu des erreurs lors de la recherche des produits."
        });
      });
  };

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Product.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Ne trouve pas le produit avec l' ID " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Tutorial with id=" + id });
      });
  };

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })//chercher un produit 
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        } else res.send({ message: "Tutorial was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Product.findByIdAndRemove(id)
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
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Product.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Tutorials were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
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
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
  
