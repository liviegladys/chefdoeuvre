const url="http://localhost:3090/api/users";



  document.querySelector('#formAddProduct').addEventListener('submit',(e)=>{
      e.preventDefault();
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        
        },
        
        body: JSON.stringify({
          Email: document.querySelector("#mail").value,
        
        }),
      };
    

      fetch(url,config)
      .then(()=>{
        console.log('merci de le supprimer')
      })
     .catch((err)=>{
       console.error(err)
     })
   })
  




// //'api/createProduct' c'est l url vers laquelle yao va envoyer tout le body du form via fetch