// TODO arrayProducts
const arrayProducts=[];
function arrayProductsObject(category, name, price, ingredients, imageUrl) {
    this.category=category;
    this.name=name;
    this.price=price;
    this.ingredients=ingredients;
    this.imageUrl=imageUrl;

    this.addItems=function(){ arrayProducts.push(this); } 
    this.addItems();
}
    // optimize antipasti
    new arrayProductsObject(
        "Antipasti", "Patatine", 2, "Porzione di patatine fritte con salse katchup, majonaise e barbeque",
        "https://www.motopizza2.com/wp-content/uploads/2021/07/90681-1.jpg"
    )
    new arrayProductsObject(
        "Antipasti", "Antipasto misto", 2, "Porzioni di dalame, guanciale, prociutto cotto, prociutto crudo, grana padano, olive verdi",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRQWatOmj8myeEurSoRtkugV1GEw1Hisp6g&usqp=CAU"
    )

    // optimize primi
    new arrayProductsObject(
        "Primi", "Farfallette al salmone", 8, "Pasta, salmone affumicato, panna, prezzemolo",
        "https://blog.giallozafferano.it/ilchiccodimais/wp-content/uploads/2019/06/farfalle-al-salmone-affumicato-con-panna-ricetta-facile-e-veloce-il-chicco-di-mais.jpg"
    )
    new arrayProductsObject(
        "Primi", "Spaghetti al ragù", 7.5, "Pasta, pomodoro, ragù di maiale, carote",
        "https://www.cuocicuoci.com/wp-content/uploads/2022/05/rigatoni-al-ragu.jpg"
    )

    // optimize pizze
    const margherita=new arrayProductsObject(
        "Pizze", "Margherita", 4, "Pomodoro, mozzarella, basilico",
        "https://ilfattoalimentare.it/wp-content/uploads/2022/12/Depositphotos_505971914_L-1.jpg"
    )
    const romana=new arrayProductsObject(
        "Pizze", "Romana", 6, "Pomodoro, mozzarella, prociuto cotto",
        "https://www.pizzaontheroad.eu/wp-content/uploads/2019/09/ADL_4586.jpg"
    )

    // optimize secondi di carne
    new arrayProductsObject(
        "Secondi carne", "Costolette di maiale", 8, "Carne di maiale con salsa teriaki",
        "https://www.fattoincasadabenedetta.it/wp-content/uploads/2022/04/AdobeStock_491302793-1200x900.jpg"
    )
    new arrayProductsObject(
        "Secondi carne", "Salsiccia di pollo", 9, "Salsiccia di pollo",
        "https://www.donnamoderna.com/content/uploads/2023/05/fac82ee49783838d.jpg"
    )
    // optimize secondi di pesce
    new arrayProductsObject(
        "Secondi pesce", "Aragosta", 8, "Aragosta al forno con limone e olio",
        "https://media-assets.lacucinaitaliana.it/photos/61fac87791ff55922ebd8f79/1:1/w_2560%2Cc_limit/empty"
    )
    new arrayProductsObject(
        "Secondi pesce", "Pesce misto", 9, "Pesce spada, gamberi e seppie al forno",
        "https://www.alberto-arienti.com/wp-content/uploads/2021/11/Antipasto-di-pesce-1300x975.jpg"
    )
    // optimize bibite
    new arrayProductsObject(
        "Bibite", "Acqua naturale", 8, "Acqua naturale",
        "https://www.ristorantiweb.com/wp-content/uploads/sites/9/2015/07/SB-Prestige-Rose-Edition.jpg"
    )
    new arrayProductsObject(
        "Bibite", "Acqua gassata", 9, "Acqua gassata",
        "https://www.ristorantiweb.com/wp-content/uploads/sites/9/2015/07/SB-Prestige-Rose-Edition.jpg"
    )


// TODO arrayCategories: estrapola la categoria dall'array originario
const arrayCategories=[];
for (let a = 0; a < arrayProducts.length; a++) {
    // se l'elemento dell'array è uguale a quello precedente 
    if (a>0 && arrayProducts[a].category == arrayProducts[a-1].category) { 
        // aggiungi un elemento all'array
        arrayCategories.push(arrayProducts[a].category)
    }
}
console.log("array di categorie",arrayCategories);

// TODO arrayProduct: drea un 'array di array di oggetti' dall'array originale
const doubleArrayProducts=[]
for (let a = 0; a < arrayCategories.length; a++) {
    doubleArrayProducts.push([])
}
for (let a = 0; a < arrayCategories.length; a++) { // opera le categorie
    for (let b = 0; b < arrayProducts.length; b++) { // opera gli ogetti
        
        // se l'elemento è della categoria, aggiungilo
        if (arrayCategories[a] == arrayProducts[b].category) {
            doubleArrayProducts[a].push( arrayProducts[b] )
        }
    }    
}
console.log(doubleArrayProducts[0]);