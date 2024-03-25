// TODO arrayTables
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
    new Table ('B198',true)
    new Table ('C491',true)
    new Table ('D778',false)
    new Table ('E973',true)

    new Table ('F456',true)
    new Table ('G933',true)
    new Table ('H951',false)
    new Table ('I777',true)
    new Table ('J792',true)
    
    new Table ('K624',true)
    new Table ('L354',true)
    new Table ('M984',true)
    new Table ('N194',true)
    new Table ('O276',true)

// TODO tavoli
    // optimize crea tutti i tavoli 
    const generateTables=document.querySelector('.generateTables')
    for (let a = 0; a < arrayTables.length; a++) { //per ogni tavolo
        generateTables.innerHTML+=`<div class="tableItem">${arrayTables[a].id}</div>`;
    }    
    const tableItem=document.querySelectorAll('.tableItem');

    // optimize mostra tutti i tavoli
    function showAllTables() {
        for (let a = 0; a < arrayTables.length; a++) {
            tableItem[a].style.display='flex'; // optimize 
        }
        generateTables.style.justifyContent='flex-start';// giustificare i tavoli
    }
    // optimize nascondi tavoli occupati
    function showsOnlyAvailableTables() {
        for (let a = 0; a < arrayTables.length; a++) {
            if (!arrayTables[a].state) {//se lo stato è disponibile
                tableItem[a].style.display='none'; // optimize 
            }
        }
    } showsOnlyAvailableTables()

    // optimize seleziona tavolo
    let tableFocus=true;
    
    for (let a = 0; a < tableItem.length; a++) {//per ogni tavolo disponibile
        tableItem[a].addEventListener('click',function(){//quando uno di questi viene cliccato
            
            if (tableFocus==true) {//TRUE se non avevi ancora selezionato alcun tavolo
                //nasconde tutti i tavoli
                tableItem.forEach(element => {
                    element.style.display='none';
                });
                //evidenzia solo il tavolo selezionato
                tableItem[a].style.display='flex';
                // giustificare i tavoli
                generateTables.style.justifyContent='space-evenly';
                tableFocus=false;
            } else {//FALSE se avevi già selezionato un tavolo, ripristina la schermata
                // genera tutti i tavoli
                showAllTables()
                // mostra solo tavoli disponibili
                showsOnlyAvailableTables()
                tableFocus=true;
            }
        })
    }
