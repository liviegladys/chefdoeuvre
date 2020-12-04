module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            ProduitTitre: { type: String,required:true },
            ProduitPic: { type: String, },
            ProduitDescrip: { type: String, },
            ProduitRegion: { type: String, },
            ProduitPrix: { type: Number,required:true },
            Sell:{type:Boolean,default:false}
            //Categorie: { type: mongoose.Schema.Types.ObjectId, ref: 'cat' },
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