// TODO carrello attuale
const writeCart=document.querySelector('.writeCart');
for (let a = 0; a < arrayProducts.length; a++) {
    writeCart.innerHTML+=`<div class="product"></div>`;        
}

const product=document.querySelectorAll('.product');
console.log("product",product);
for (let a = 0; a < product.length; a++) {
    product[a].innerHTML=`
        <div>
            <row>
                <h3>${arrayProducts[a].name}</h3> 
                <h3 class="price">${arrayProducts[a].price}€</h3> 
            </row>
            <p>${arrayProducts[a].ingredients}</p> 
        </div>
`;    
}

// TODO cronologia

