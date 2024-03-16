const writeSummary=document.querySelector(".writeSummary");
for (let a = 0; a < arrayProducts.length; a++) {
    writeSummary.innerHTML+=`
        <div class="summaryCard">
            <a href="">
                <h3>${arrayProducts[a].name}</h3>
            </a>
        </div>   
    `;
}

const summaryCard=document.querySelectorAll(".summaryCard");
for (let a = 0; a < summaryCard.length; a++) {
    summaryCard[a].style.backgroundImage=`url(${arrayProducts[a].urlImage})`
}