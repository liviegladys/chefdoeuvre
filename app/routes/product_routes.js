const express = require("express");
const router = express.Router();

const products = require("../controllers/product_controller");

// Create a new Tutorial
router.post("/", products.create);

// Retrieve all Tutorials
router.get("/", products.findAll);

// Retrieve all published Tutorials
// router.get("/sell", products.findAllSell);

// Retrieve a single Tutorial with id
// router.get("/:id", products.findOne);

// Update a Tutorial with id
router.put("/:id", products.update);

// Delete a Tutorial with id
router.delete("/:id", products.delete);

// Create a new Tutorial
router.delete("/", products.deleteAll);
router.get("/:Cate", products.findByCate)

// Exports
module.exports = router;