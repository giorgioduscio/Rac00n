// TODO innerHTML
const amount=document.querySelectorAll(".amount");
for (let index = 0; index < amount.length; index++) {
    amount[index].innerHTML=`
        <h4>Quantità</h4>
        <h3 class="output">0</h3>
        <button class="increment">+</button>
        <button class="decrement">-</button>
        <button class="send">
            <img src="https://cdn.icon-icons.com/icons2/2645/PNG/512/cart_icon_160296.png" alt="">   
        </button>
    `;
}


// TODO amount
var output=document.querySelectorAll('.output');
var increment=document.querySelectorAll('.increment');
var decrement=document.querySelectorAll('.decrement');
let counter=[];
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
