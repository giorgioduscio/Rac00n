// optimize array
const arrayIndex=[];
function IndexObject(name,imageUrl) {
    this.name=name;
    this.imageUrl=imageUrl;

    this.pushIndex= function(){
        arrayIndex.push(this);
    }
    this.pushIndex()
}
const antipasti=new IndexObject("Antipasti","https://blog.giallozafferano.it/asilannablu/wp-content/uploads/2019/12/4-antipasti-freddi-pronti-in-soli-10-minuti.jpg")
const primi=new IndexObject("Primi","https://www.finedininglovers.it/sites/g/files/xknfdk1106/files/styles/recipes_1200_1200_fallback/public/2020-01/ricette_primi_piatti.jpg?itok=p8fgy24H")
const pizza=new IndexObject("Pizza",arrayProducts[0].imageUrl)
const secondoCarne=new IndexObject("Secondi di carne","https://www.cucchiaio.it/content/cucchiaio/it/ricette/2009/12/ricetta-lonza-maiale-ginepro/_jcr_content/header-par/image_single.img.jpg/1675686268919.jpg")
const psecondoPesce=new IndexObject("Secondi di pesce","https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2022/05/secondi-piatti-di-pesce-1200x675.jpg")
const bibite=new IndexObject("Bibite","https://i.pinimg.com/736x/1b/57/70/1b57700b0bc5f8554117e3fd5e20e26d.jpg")

// optimize innerhtml
const writeIndex=document.querySelector(".writeIndex");
for (let a = 0; a < arrayIndex.length; a++) {
    writeIndex.innerHTML+=`
        <a href="#${arrayIndex[a].name}" class="IndexCard">
            <h3>${arrayIndex[a].name}</h3>
        </a>
    `;
}

const indexCard=document.querySelectorAll(".IndexCard");
for (let a = 0; a < indexCard.length; a++) {
    indexCard[a].style.backgroundImage=`url(${arrayIndex[a].imageUrl})`
}
