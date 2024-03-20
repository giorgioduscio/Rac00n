// TODO tavoli
const arrayTables=[];
function Table(id,state) {
    this.id=id;
    this.state=state;

    this.pushTable=function (){
        arrayTables.push(this)
    }
    this.pushTable();
}
    new Table ('A123',false)
    new Table ('G198',true)
    new Table ('K491',true)
    new Table ('R778',false)
    new Table ('N973',true)
    new Table ('Z456',true)
    new Table ('C933',true)
    new Table ('M951',false)

// TODO mostra tavoli disponibili
const generateTables=document.querySelector('.generateTables')
for (let a = 0; a < arrayTables.length; a++) { //per ogni tavolo
    let disponibility=arrayTables[a].state;
    if (disponibility) {//se lo stato è disponibile
        generateTables.innerHTML+=`<div class="tableItem">${arrayTables[a].id}</div>`;
    }// optimize mostra il tavolo disponibile
}

// TODO seleziona tavolo
const tableItem=document.querySelectorAll('.tableItem');
for (let a = 0; a < tableItem.length; a++) {//per ogni tavolo disponibile
    tableItem[a].addEventListener('click',function(){//quando uno viene cliccato
        console.log(tableItem[a]);
        /*
        nasconde tutti i tavoli
        evidenzia il tavolo selezionato
        */
    })
}