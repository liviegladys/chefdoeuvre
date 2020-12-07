module.exports = mongoose => {
      var schema = mongoose.Schema(
          {

            Nom: { type: String,required:true },
            Prenom: { type: String, required:true },
            Email: { type: String, required:true},
            Mot_de_passe: { type: String, required:true},
            //Categorie: { type: mongoose.Schema.Types.ObjectId, ref: 'cat' },
        },


        { timestamps: true }
      )
   
    // schema.method("toJSON", function() {
    //     const { __v, _id, ...object } = this.toObject();
    //     object.id = _id;
    //     return object;
    //   });
      const Users = mongoose.model("users", schema);

    return Users;
  };