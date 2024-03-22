
// optimize innerhtml
const writeIndex=document.querySelector(".writeIndex");
for (let a = 0; a < arrayCategories.length; a++) {
    writeIndex.innerHTML+=`
        <a href="#${arrayCategories[a]}" class="IndexCard">
            <h3>${arrayCategories[a]}</h3>
        </a>
    `;
    //href rimanda ai titoli sottostanti della categoria
}

const indexCard=document.querySelectorAll(".IndexCard");
for (let a = 0; a < indexCard.length; a++) {
    // l'immagine di background è quella del primo prodotto della categoria
    indexCard[a].style.backgroundImage=`url(${arrayProducts[a][0].imageUrl})`;
}
