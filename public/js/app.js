const url="api/products";

fetch(url)
.then(result=>result.json())
.then(data=>{
    const products=data.map((product)=>{// methode de boucle comme foreach
return `<tr>
<td>${product.ProduitTitre}</td>
<td><img src="./images/${product.ProduitPic}" alt="${product.ProduitTitre}"/></td>
<td>${product.ProduitDescrip}</td>
<td>${product.ProduitRegion}</td>
<td>${product.ProduitPrix}</td>
<td>${product.Sell}</td>
<td>${product.Cate}</td>
</tr>`
    }).join("")// boucler et rajouter entre eux sans ecraser les autres
    document.getElementById("products").innerHTML=products
})



// 