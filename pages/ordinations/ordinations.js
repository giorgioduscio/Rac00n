
// TODO innerHTML
// generateOrdinations > generateOrdinationsItems > cardsImage & ordinationAmount
// optimize inserisce i titoli di categoria
document.querySelector('#ordination').innerHTML=
`<h2>Ordinazioni</h2><div class="generateOrdinations"></div>`;

const generateOrdinations=document.querySelector(".generateOrdinations");//seleziona dove scrivere
for (let a = 0; a < arrayCategories.length; a++) {//per tante volte quanto i records dell'array
    generateOrdinations.innerHTML+=`
        <h2 id="${arrayCategories[a]}">${arrayCategories[a]}</h2>
        <div class="generateOrdinationsItems"></div>
    `;
}
    // optimize inserische le singole cards
    const generateOrdinationsItems=document.querySelectorAll(".generateOrdinationsItems");

    for (let a = 0; a < arrayProducts.length; a++) {//
        for (let b = 0; b < arrayProducts[a].length; b++) {//
            generateOrdinationsItems[a].innerHTML+=`
                <div class="ordinationCard">
                    <div class="cardsImage" style="background-image:url(${arrayProducts[a][b].imageUrl})">
                        <div>
                            <h3 class="priceFood">${arrayProducts[a][b].price}€</h3>
                            <h3 class="nameFood">${arrayProducts[a][b].name}</h3>
                            <h4 class="ingredientsFood">${arrayProducts[a][b].ingredients}</h4>
                        </div>
                    </div>

                    <div class="ordinationAmount">
                        <div class="output">0</div>
                        <button class="increment">+</button>
                        <button class="decrement">-</button>
                        <button class="send">
                            <img src="https://cdn.icon-icons.com/icons2/2645/PNG/512/cart_icon_160296.png" alt="">   
                        </button>
                    </div>
                </div>
            `;//aggiungi il testo
        }
    }

// TODO ordinationAmount
    const ordinationAmount=document.querySelectorAll('.ordinationAmount');
        const output=document.querySelectorAll('.output');
        const increment=document.querySelectorAll('.increment');
        const decrement=document.querySelectorAll('.decrement');
    const counter=[];
    for (let a = 0; a < ordinationAmount.length; a++) {
        counter.push(0); // inizializza tutti i contatori
    }

    for (let a = 0; a < ordinationAmount.length; a++) {
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

    // optimize sendButton
    const sendButton=document.querySelectorAll("button.send");
    const nameFood=document.querySelectorAll(".nameFood");
    const point=document.querySelector("#pointCart"); 
    const cart=[];

    for (let a = 0; a < ordinationAmount.length; a++) {
        sendButton[a].addEventListener('click',function(){//quando premi il pulsante
            if(counter[a]>=1){//se le porzioni sono almeno una
                cart.push(`${counter[a]} porzioni di ${nameFood[a].innerText}`)

                console.log(cart);
                counter[a]=output[a].innerText=0;
                point.style.display='block';
            }
        })
    }
