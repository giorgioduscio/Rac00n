// optimize array
const arraySummary=[];
function summaryObject(name,imageUrl) {
    this.name=name;
    this.imageUrl=imageUrl;

    this.pushSummary= function(){
        arraySummary.push(this);
    }
    this.pushSummary()
}
const antipasti=new summaryObject("Antipasti","https://blog.giallozafferano.it/asilannablu/wp-content/uploads/2019/12/4-antipasti-freddi-pronti-in-soli-10-minuti.jpg")
const primi=new summaryObject("Primi","https://www.finedininglovers.it/sites/g/files/xknfdk1106/files/styles/recipes_1200_1200_fallback/public/2020-01/ricette_primi_piatti.jpg?itok=p8fgy24H")
const pizza=new summaryObject("Pizza",arrayProducts[0].imageUrl)
const secondoCarne=new summaryObject("Secondi di carne","https://www.cucchiaio.it/content/cucchiaio/it/ricette/2009/12/ricetta-lonza-maiale-ginepro/_jcr_content/header-par/image_single.img.jpg/1675686268919.jpg")
const psecondoPesce=new summaryObject("Secondi di pesce","https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2022/05/secondi-piatti-di-pesce-1200x675.jpg")
const bibite=new summaryObject("Bibite","https://i.pinimg.com/736x/1b/57/70/1b57700b0bc5f8554117e3fd5e20e26d.jpg")

// optimize innerhtml
const writeSummary=document.querySelector(".writeSummary");
for (let a = 0; a < arraySummary.length; a++) {
    writeSummary.innerHTML+=`
        <div class="summaryCard">
            <a href="">
                <h3>${arraySummary[a].name}</h3>
            </a>
        </div>   
    `;
}

const summaryCard=document.querySelectorAll(".summaryCard");
for (let a = 0; a < summaryCard.length; a++) {
    summaryCard[a].style.backgroundImage=`url(${arraySummary[a].imageUrl})`
}
