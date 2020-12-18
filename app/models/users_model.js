 const mongoose=require('mongoose')
  const bcrypt= require('bcrypt');
const Schema=mongoose.Schema

      const userSchema = new Schema(
          {

            Nom: { type: String,required:true },
            Prenom: { type: String, required:true },
            Email: { type: String, required:true,unique:true},
            Mot_de_passe: { type: String, required:true},
           
        },

      )
      userSchema.pre('save',async function(next){
        try{
            const salt=await bcrypt.genSalt(10);// augmenter les options du cryptage 
            const hash=await bcrypt.hash(this.Mot_de_passe,salt);//cryptage de mot de passe
            this.Mot_de_passe= hash; 
            console.log('ok')
            
         next()
    
        }catch(error){
            next(error);
        }
    })

  
   
    // schema.method("toJSON", function() {
    //     const { __v, _id, ...object } = this.toObject();
    //     object.id = _id;
    //     return object;
    //   });
      const Users = mongoose.model("users", userSchema);

    module.exports=Users