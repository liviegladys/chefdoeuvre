const express= require('express');
const bodyParser=require('body-parser');
const cors = require('cors');
const app= express()
const db = require("./app/models");
const routerProduit= require('./app/routes/product_routes')
const routerAjoutProduit= require('./app/routes/client_routes')

const routerUser=require('./app/routes/users_routes')
app.set('views','./app/views')
app.set('view engine','ejs')




const corsOption={
    origin:"http:/localhost:3090"
}

app.use(express.static("public"))
app.use(cors(corsOption));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// app.get('/',(req,res)=>{
//     res.json({message:"Bienvenue chez Gladys"})
// });


db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// require("./app/routes/product_routes")(app);
// require("./app/routes/client_routes")(app);
//require("./app/routes/users_routes")(app);
app.use('/api/users', routerUser)
app.use('/produits', routerProduit)
 app.use('/', routerAjoutProduit)


const PORT=process.env.PORT||3090;
app.listen(PORT,()=>{
    console.log(`Ecoute sur le port ${PORT}`)
})