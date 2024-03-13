// TODO array
const arrayOrdinations=[];
function ordinationItems(name, price, ingredients, urlImage) {
    this.name=name;
    this.price=price;
    this.ingredients=ingredients;
    this.urlImage=urlImage;

    this.addItems=function(){ arrayOrdinations.push(this); } 
    this.addItems();
}
new ordinationItems("Margherita",4,"Pomodoro, mozzarella, basilico","https://ilfattoalimentare.it/wp-content/uploads/2022/12/Depositphotos_505971914_L-1.jpg")
new ordinationItems("Romana",6,"Pomodoro, mozzarella, prociuto cotto","https://ilfattoalimentare.it/wp-content/uploads/2022/12/Depositphotos_505971914_L-1.jpg")
console.log("arrayOrdinations:",arrayOrdinations);

// TODO innerHTML
// optimize righe
const writeOrdinations=document.querySelector(".writeOrdinations");//seleziona dove scrivere
for (let a = 0; a < arrayOrdinations.length; a++) {//per tante volte quanto i records dell'array
    writeOrdinations.innerHTML+=`<row class="card"></row>`;//aggiungi una card
}

// optimize card
const card=document.querySelectorAll(".card");//seleziona tutte le card
for (let a = 0; a < card.length; a++) {//per tante volte quanto le card
    card[a].innerHTML=`
        <column class="show">
            <div>
                <img src="${arrayOrdinations[a].urlImage}">
                <div>
                    <h2 class="priceFood">${arrayOrdinations[a].price}€</h2>
                    <div>
                        <h2 class="nameFood">${arrayOrdinations[a].name}</h2>
                        <h4 class="ingredientsFood">${arrayOrdinations[a].ingredients}</h4>
                    </div>
                </div>
            </div>
        </column>
        <column class="amount">
            <h5>Quantità</h5>
            <h3 class="output">0</h3>
            <button class="increment">+</button>
            <button class="decrement">-</button>
            <button class="send">
                <img src="https://cdn.icon-icons.com/icons2/2645/PNG/512/cart_icon_160296.png" alt="">   
            </button>
        </column>
    `;//aggiungi il testo
}



// TODO amount
const amount=document.querySelectorAll('.amount');
    const output=document.querySelectorAll('.output');
    const increment=document.querySelectorAll('.increment');
    const decrement=document.querySelectorAll('.decrement');
const counter=[];
for (let index = 0; index < amount.length; index++) {
    counter.push(0); // inizializza tutti i contatori
}

for (let index = 0; index < amount.length; index++) {
    increment[index].addEventListener("click", function (){
        counter[index]+=1; //incrementa
        output[index].innerText=counter[index]; //aggiorna l'output
    })
    decrement[index].addEventListener("click", function (){ //quando clicca -
        if (counter[index]>=1) { //se conta almeno una porzione
            counter[index]-=1; //incrementa
            output[index].innerText=counter[index]; //aggiorna l'output
        }
    })    
}

// TODO sendButton
const sendButton=document.querySelectorAll("button.send");
const nameFood=document.querySelectorAll(".nameFood");
const cart=[];
console.log(sendButton,nameFood);

for (let index = 0; index < amount.length; index++) {
    sendButton[index].addEventListener('click',function(){
        if(counter[index]>=1){//se le porzioni sono almeno una
            cart.push(`${counter[index]} porzioni di ${nameFood[index].innerText}`)

            console.log(cart);
            counter[index]=output[index].innerText=0;
        }
    })
}
