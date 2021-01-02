const url="http://localhost:3090/api/users";
console.log(true)
let form=document.getElementById('formAddUser')
  form.addEventListener('submit',(e)=>{
      e.preventDefault();
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        
        },
      
        body: JSON.stringify({
          Nom: document.querySelector("#nom").value,
          Email: document.querySelector("#mail").value,
          Mot_de_passe: document.querySelector("#password").value,
          
          
          
        }),
      };
      
      fetch(url,config)
      
      .then(()=>{
        console.log('Enregistre l utilisateur dans la BD')
      })
     .catch((err)=>{
       console.error(err)
     })
   })
  




//'api/createProduct' c'est l url vers laquelle yao va envoyer tout le body du form via fetch