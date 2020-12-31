const url="http://localhost:3090/api/products";



  document.querySelector('#formAddProduct').addEventListener('submit',(e)=>{
      e.preventDefault();
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        
        },
        
        body: JSON.stringify({
          ProduitTitre: document.querySelector("#NomProduit").value,
          ProduitPic: document.querySelector("#photo").value.split('\\')[2],//  split c'est couper tous les elements qui sont separés par des anti slash
          ProduitDescrip: document.querySelector("#DescriptionProd").value,
          ProduitRegion: document.querySelector("#Region").value,
          ProduitPrix: document.querySelector("#prix").value,
          Cate:document.querySelector("#Categorie").value
          
          
        }),
      };
      
      fetch(url,config)
      
      .then(()=>{
        console.log('merci de me l envoyer en BD')
      })
     .catch((err)=>{
       console.error(err)
     })
   })
  




//'api/createProduct' c'est l url vers laquelle yao va envoyer tout le body du form via fetch
