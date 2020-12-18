module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            ProduitTitre: { type: String,required:true },
            ProduitPic: { type: String,default:"fruits.jpg" },
            ProduitDescrip: { type: String, },
            ProduitRegion: { type: String, },
            ProduitPrix: { type: Number },
            Sell:{type:Boolean,default:false},
            Cate:{type:String,enum:['Fruits et Legumes','Produits laitiers','Poisson et Viande','Patisserie']} //

            
        },


        { timestamps: true }
      )
   
    // schema.method("toJSON", function() {
    //     const { __v, _id, ...object } = this.toObject();
    //     object.id = _id;
    //     return object;
    //   });
      const Products = mongoose.model("product", schema);

    return Products;
  };






