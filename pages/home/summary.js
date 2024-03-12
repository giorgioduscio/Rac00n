// TODO Summary
function summaryItem(name,urlImage){
        this.name=name;
        this.urlImage=urlImage;
}

let summaryArray=[];
summaryArray[0]= new summaryItem("Sushi","https://www.todis.it/wp-content/uploads/2023/05/sushi-fatto-in-casa.jpg")
summaryArray[1]= new summaryItem("Pizza","https://ilfattoalimentare.it/wp-content/uploads/2022/12/Depositphotos_505971914_L-1.jpg")
console.log(summaryArray);


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

