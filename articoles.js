// TODO databaseProducts
const databaseProducts=[];
function ProductIstances(category, name, price, ingredients, imageUrl) {
    this.category=category;
    this.name=name;
    this.price=price;
    this.ingredients=ingredients;
    this.imageUrl=imageUrl;

    this.addItems=function(){ databaseProducts.push(this); } 
    this.addItems();
}
    // optimize antipasti
    new ProductIstances(
        "Antipasti", "Patatine", 2, "Porzione di patatine fritte con salse katchup, majonaise e barbeque",
        "https://www.motopizza2.com/wp-content/uploads/2021/07/90681-1.jpg"
    )
    new ProductIstances(
        "Antipasti", "Antipasto misto", 2, "Porzioni di dalame, guanciale, prociutto cotto, prociutto crudo, grana padano, olive verdi",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRQWatOmj8myeEurSoRtkugV1GEw1Hisp6g&usqp=CAU"
    )

    // optimize primi
    new ProductIstances(
        "Primi", "Farfallette al salmone", 8, "Pasta, salmone affumicato, panna, prezzemolo",
        "https://blog.giallozafferano.it/ilchiccodimais/wp-content/uploads/2019/06/farfalle-al-salmone-affumicato-con-panna-ricetta-facile-e-veloce-il-chicco-di-mais.jpg"
    )
    new ProductIstances(
        "Primi", "Spaghetti al ragù", 7.5, "Pasta, pomodoro, ragù di maiale, carote",
        "https://www.cuocicuoci.com/wp-content/uploads/2022/05/rigatoni-al-ragu.jpg"
    )

    // optimize pizze
    const margherita=new ProductIstances(
        "Pizze", "Margherita", 4, "Pomodoro, mozzarella, basilico",
        "https://ilfattoalimentare.it/wp-content/uploads/2022/12/Depositphotos_505971914_L-1.jpg"
    )
    const romana=new ProductIstances(
        "Pizze", "Romana", 6, "Pomodoro, mozzarella, prociuto cotto",
        "https://www.pizzaontheroad.eu/wp-content/uploads/2019/09/ADL_4586.jpg"
    )
    new ProductIstances(
        "Pizze", "Diavola", 7, "Pomodoro, mozzarella, peperoncino, salame piccante",
        "https://www.silviocicchi.com/pizzachef/wp-content/uploads/2015/03/d1.jpg"
    )

    // optimize secondi di carne
    new ProductIstances(
        "Secondi carne", "Costolette di maiale", 8, "Carne di maiale con salsa teriaki",
        "https://www.fattoincasadabenedetta.it/wp-content/uploads/2022/04/AdobeStock_491302793-1200x900.jpg"
    )
    new ProductIstances(
        "Secondi carne", "Salsiccia di pollo", 9, "Salsiccia di pollo",
        "https://www.donnamoderna.com/content/uploads/2023/05/fac82ee49783838d.jpg"
    )
    // optimize secondi di pesce
    new ProductIstances(
        "Secondi pesce", "Aragosta", 8, "Aragosta al forno con limone e olio",
        "https://media-assets.lacucinaitaliana.it/photos/61fac87791ff55922ebd8f79/1:1/w_2560%2Cc_limit/empty"
    )
    new ProductIstances(
        "Secondi pesce", "Pesce misto", 9, "Pesce spada, gamberi e seppie al forno",
        "https://www.alberto-arienti.com/wp-content/uploads/2021/11/Antipasto-di-pesce-1300x975.jpg"
    )
    // optimize bibite
    new ProductIstances(
        "Bibite", "Acqua naturale", 2, "Acqua naturale",
        "https://www.ristorantiweb.com/wp-content/uploads/sites/9/2015/07/SB-Prestige-Rose-Edition.jpg"
    )
    new ProductIstances(
        "Bibite", "Acqua gassata", 3, "Acqua gassata",
        "https://www.ristorantiweb.com/wp-content/uploads/sites/9/2015/07/SB-Prestige-Rose-Edition.jpg"
    )
    new ProductIstances(
        "Bibite", "Vino rosso", 9, "Vino rosso",
        "https://ilcontadino-online.com/3734-large_default/vino-rosso-malvasia-dolce-6-x-075lt-oltrepo-.jpg"
    )
    

// TODO arrayCategories: estrapola la categoria dall'array originario
const arrayCategories=[];
for (let a = 0; a < databaseProducts.length; a++) {
    // se l'elemento dell'array è diverso a quello precedente 
    if (a==0 || databaseProducts[a].category != databaseProducts[a-1].category) { 
        // aggiungi un elemento all'array
        arrayCategories.push(databaseProducts[a].category)
    }
}
console.log("arrayCategories:",arrayCategories);

// TODO arrayProduct: drea un 'array di array di oggetti' dall'array originale
const arrayProducts=[]
for (let a = 0; a < arrayCategories.length; a++) {
    // aggiunge un sotto-array per ogni categoria
    arrayProducts.push([])
}
for (let a = 0; a < arrayCategories.length; a++) { // opera le categorie
    for (let b = 0; b < databaseProducts.length; b++) { // opera gli ogetti
        // se l'elemento è della categoria, aggiungilo
        if (arrayCategories[a] == databaseProducts[b].category) {
            arrayProducts[a].push( databaseProducts[b] )
        }
    }    
}
console.log("arrayProducts:",arrayProducts);