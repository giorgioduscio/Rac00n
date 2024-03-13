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
for (let a = 0; a < amount.length; a++) {
    counter.push(0); // inizializza tutti i contatori
}

for (let a = 0; a < amount.length; a++) {
    increment[a].addEventListener("click", function (){
        counter[a]+=1; //incrementa
        output[a].innerText=counter[a]; //aggiorna l'output
    })
    decrement[a].addEventListener("click", function (){ //quando clicca -
        if (counter[a]>=1) { //se conta almeno una porzione
            counter[a]-=1; //incrementa
            output[a].innerText=counter[a]; //aggiorna l'output
        }
    })    
}

// TODO sendButton
const sendButton=document.querySelectorAll("button.send");
const nameFood=document.querySelectorAll(".nameFood");
const point=document.querySelector("#pointCart"); 
const cart=[];

for (let a = 0; a < amount.length; a++) {
    sendButton[a].addEventListener('click',function(){//quando premi il pulsante
        if(counter[a]>=1){//se le porzioni sono almeno una
            cart.push(`${counter[a]} porzioni di ${nameFood[a].innerText}`)

            console.log(cart);
            counter[a]=output[a].innerText=0;
            point.style.display='block';
        }
    })
}
