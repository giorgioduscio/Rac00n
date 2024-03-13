const writeSummary=document.querySelector(".writeSummary");
for (let a = 0; a < arrayProducts.length; a++) {
    writeSummary.innerHTML+=`
        <column class="summary">
            <a href="">
                <img src="${arrayProducts[a].urlImage}">
                <h1>${arrayProducts[a].name}</h1>
            </a>
        </column>   
    `;
}

