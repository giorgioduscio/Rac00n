// TODO Cart
document.querySelector('#cart').innerHTML=`
    <h2>Carrello attuale</h2> 
    <div class="cart"> 
        <div>
            <table>
                <tbody class="generateCartItems"></tbody>                    
            </table>
            <button class="cartButton">Ordina e paga</button>
        </div>
    </div>
`;

// TODO ordinazioni > arrayCart
const arrayCart=[]
function CartObject(name,price) {
    this.name=name;
    this.price=price;

    this.pushCart=function(){
        arrayCart.push(this)
    }
    this.pushCart()
}
new CartObject(arrayProducts[0][0].name,arrayProducts[0][0].price)
new CartObject(arrayProducts[0][1].name,arrayProducts[0][1].price)
new CartObject(arrayProducts[0][0].name,arrayProducts[0][0].price)

// TODO innerHTML
const generateCartItems=document.querySelector('.generateCartItems');
for (let a = 0; a < arrayCart.length; a++) {
    generateCartItems.innerHTML+=`<tr>
        <td class="cartFoodName">${arrayCart[a].name}</td>
        <td class="cartFoodPrice">${arrayCart[a].price}€</td>
    </tr>`;
}
