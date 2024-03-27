// TODO array
const arrayCronology=[
    {//card
        stato:false, 
        dataArrivo:"12/14/2209",
        ordini:[
            {//ordinazioni
                nome:"penne al salmone",
                prezzo:5
            },
            {//ordinazioni
                nome:"costolette di maiale",
                prezzo:20
            }
        ]
    },
    {//card
        stato:true, 
        dataArrivo:"9/14/2209",
        ordini:[
            {//ordinazioni
                nome:"Patatine",
                prezzo:3
            },
            {//ordinazioni
                nome:"spaghetti al sugo",
                prezzo:6
            },
            {//ordinazioni
                nome:"polpette al sugo",
                prezzo:25
            }
        ]
    }
];

    
console.log('arrayCronology\n',arrayCronology);

// TODO inner html
    const generateCronology=document.getElementById('generateCronology')
    for (let a = 0; a < arrayCronology.length; a++) {
        generateCronology.innerHTML+=`
            <div>
                <div class="ordinationState"></div>
                <div class="cards"></div>
            </div>
        `;
    }

        // optimize cards
        const cards=document.getElementsByClassName('cards')
        for (let a = 0; a < arrayCronology.length; a++) {//per ogni card
            cards[a].innerHTML=`
                <h3>${arrayCronology[a].dataArrivo}</h3>
                <table>
                </table>
            `;
        }


        const tableElements=document.querySelectorAll('.cards>table')
        for (let a = 0; a < arrayCronology.length; a++) {
            for (let b = 0; b < arrayCronology[a].ordini.length; b++) {
                tableElements[a].innerHTML+=`
                    <tr>
                        <td class="cronologyFoodName">${arrayCronology[a].ordini[b].nome}</td>
                        <td class="cronologyFoodPrice">${arrayCronology[a].ordini[b].prezzo}€</td>
                    </tr>
                `;                    
            }
        }


        // optimize stato
        const ordinationState=document.getElementsByClassName('ordinationState')
        for (let a = 0; a < arrayCronology.length; a++) {
            if (arrayCronology[a].stato) {
                ordinationState[a].classList.add('arrived')
            }else{
                ordinationState[a].classList.add('pending')
            }
            
        }