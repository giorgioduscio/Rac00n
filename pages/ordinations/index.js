
// optimize innerhtml
document.querySelector("#index").innerHTML=
`<h2>Categorie</h2><div class="generateIndex"></div>`;

const generateIndex=document.querySelector(".generateIndex")
for (let a = 0; a < arrayCategories.length; a++) {
    generateIndex.innerHTML+=`
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
