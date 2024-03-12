// TODO Summary
let summaryArray=[];
function summaryItem(name,urlImage){
        this.name=name;
        this.urlImage=urlImage;

        this.addItem = function() { 
            //aggiunge i valori passati nell'array
            summaryArray.push(this);
        }
        this.addItem(); // And neither is this.
}

new summaryItem("Sushi","https://www.todis.it/wp-content/uploads/2023/05/sushi-fatto-in-casa.jpg")
new summaryItem("Pizza","https://ilfattoalimentare.it/wp-content/uploads/2022/12/Depositphotos_505971914_L-1.jpg")
console.log("SummaryArray:",summaryArray);


const writeSummary=document.querySelector(".writeSummary");
for (let a = 0; a < summaryArray.length; a++) {
    writeSummary.innerHTML+=`
        <column class="summary">
            <a href="">
                <img src="${summaryArray[a].urlImage}">
                <h1>${summaryArray[a].name}</h1>
            </a>
        </column>   
    `;
}

