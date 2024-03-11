// TODO innerHTML
// optimize profilo> gruppo> voce> opsione
const gruppo=["Usabilità","Accesso","Assistenza"]
const voci=[
    ["Modifica Profilo","Gestione account","Visibilità profilo","Feed","Notifiche"],
    ["Aggiungi account","Sicurezza","Esci"],
    ["Chiedi aiuto","Termini di servizio","Norme sulla privacy","Informazioni",]
]
/*<h4>Usabilità</h4>
<div class="dropdown">
    <button class="dropButton">Modifica profilo</button>
    <div class="content">
        <p>Opsione</p>
        <p>Opsione</p>
        <p>Opsione</p>
    </div>
</div>*/


let  write=document.querySelector('#app');
for (let a = 0; a < gruppo.length; a++) {
    write.innerHTML+=`<h4>${gruppo[a]}</h4>`;//mostra gruppo
    
    for (let b = 0; b < voci[a].length; b++) {
        write.innerHTML+=`
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
const triangle=`https://www.freeiconspng.com/thumbs/arrow-down-icon-png/black-arrow-down-icon-png-16.png`;
for (let i = 0; i < dropButton.length; i++) {
    dropButton[i].innerHTML+=`<img src="${triangle}">`; 
}

// TODO dropdown al click, mostra dropContent
for (let i = 0; i < dropdown.length; i++) {//per ogni dropdown
    dropButton[i].addEventListener('click',function(){//quando si clicca il pulsante
        if(dropContent[i].style.display=='block'){//se il contenuto è in mostra
            dropContent[i].style.display='none';//nascondi contenuto
        }else{
            dropContent[i].style.display='block'//mostra contenuto
        }
    })
}
