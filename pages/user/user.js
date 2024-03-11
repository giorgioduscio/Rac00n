// TODO innerHTML
// optimize profilo> gruppo> voce> opsione
const gruppo=["Usabilità","Accesso","Assistenza"]
const voci=[
    ["Modifica Profilo","Gestione account","Visibilità profilo","Feed","Notifiche"],
    ["Aggiungi account","Sicurezza","Esci"],
    ["Chiedi aiuto","Termini di servizio","Norme sulla privacy","Informazioni",]
]
let  pen=document.querySelector('#pen');
for (let a = 0; a < gruppo.length; a++) {
    pen.innerHTML+=`<h4>${gruppo[a]}</h4>`;//mostra gruppo

    for (let b = 0; b < voci[a].length; b++) {
        pen.innerHTML+=`
            <div class="dropdown">
                <button class="dropButton">${voci[a][b]}</button>
            </div>
        `;
    }
}
const dropdown=document.querySelectorAll(".dropdown");
for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].innerHTML+=`
        <div class="dropContent">
            <p>Opsione</p>
            <p>Opsione</p>
            <p>Opsione</p>
        </div>
    `;
}

    const dropButton=document.querySelectorAll(".dropButton");
    const dropContent=document.querySelectorAll(".dropContent");
// TODO Aggiunge il triangolo ai pulsanti del dropdown
const triangleURL=`https://static-00.iconduck.com/assets.00/arrow-circle-right-icon-2048x2048-3qikwvvj.png`;
for (let i = 0; i < dropButton.length; i++) {
    dropButton[i].innerHTML+=`<img src="${triangleURL}" class="triangle">`; 
}
const triangle=document.querySelectorAll('.triangle'); 
console.log(triangle);

// TODO dropdown al click, mostra dropContent
for (let i = 0; i < dropdown.length; i++) {//per ogni dropdown
    dropButton[i].addEventListener('click',function(){//quando si clicca il pulsante
        if(dropContent[i].style.display=='block'){//se il contenuto è in mostra
            dropContent[i].style.display='none';//nascondi contenuto
            triangle[i].style.transform="rotate(0deg)";//freccia a destra
        }else{
            dropContent[i].style.display='block'//mostra contenuto
            triangle[i].style.transform="rotate(90deg)";//freccia in basso
        }
    })
}
