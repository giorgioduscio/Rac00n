
// TODO innerHTML
// writeOrdinations > generateTitleCategories > ordinationRow > show & ordinationAmount
// optimize titoli di categoria
const writeOrdinations=document.querySelector(".writeOrdinations");//seleziona dove scrivere
for (let a = 0; a < arrayCategories.length; a++) {//per tante volte quanto i records dell'array
    writeOrdinations.innerHTML+=`
        <h2 id="${arrayCategories[a]}">${arrayCategories[a]}</h2>
        <div class="generateTitleCategories"></div>
    `;//aggiungi una ordinationRow
}
/*
    [
        riga [A,B,C,D,E]
        riga [A,B,C,D,E]
        riga [A,B,C,D,E]
    ]
*/
    // optimize righe
    const generateTitleCategories=document.querySelectorAll(".generateTitleCategories");
    console.log(generateTitleCategories);
    for (let a = 0; a < arrayCategories.length; a++) {//per ogni categoria
        for (let b = 0; b < arrayProducts[a].length; b++) {//per ogni prodotto
            generateTitleCategories[b].innerHTML+=`<div class="ordinationRow"></div>`;
        }
    }
/*
        // optimize cards
        const ordinationRow=document.querySelectorAll(".ordinationRow");//seleziona tutte le ordinationRow
        for (let a = 0; a < ordinationRow.length; a++) {//per tante volte quanto le ordinationRow
            ordinationRow[a].innerHTML=`
                <div class="show">
                    <div>
                        <h2 class="priceFood">${arrayProducts[a].price}€</h2>
                        <h3 class="nameFood">${arrayProducts[a].name}</h3>
                        <h4 class="ingredientsFood">${arrayProducts[a].ingredients}</h4>
                    </div>
                </div>

                <div class="ordinationAmount">
                    <h3 class="output">0</h3>
                    <button class="increment">+</button>
                    <button class="decrement">-</button>
                    <button class="send">
                        <img src="https://cdn.icon-icons.com/icons2/2645/PNG/512/cart_icon_160296.png" alt="">   
                    </button>
                </div>
            `;//aggiungi il testo
        }
    // optimize immagini
    const show=document.querySelectorAll(".show");
    for (let a = 0; a < show.length; a++) {
        show[a].style.backgroundImage=`url(${arrayProducts[a].imageUrl})`
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
*/