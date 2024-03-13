// TODO array
const arrayProducts=[];
function ordinationItems(name, price, ingredients, urlImage) {
    this.name=name;
    this.price=price;
    this.ingredients=ingredients;
    this.urlImage=urlImage;

    this.addItems=function(){ arrayProducts.push(this); } 
    this.addItems();
}
new ordinationItems(
    "Margherita",
    4,
    "Pomodoro, mozzarella, basilico",
    "https://ilfattoalimentare.it/wp-content/uploads/2022/12/Depositphotos_505971914_L-1.jpg"
)

new ordinationItems(
    "Romana",
    6,
    "Pomodoro, mozzarella, prociuto cotto",
    "https://www.pizzaontheroad.eu/wp-content/uploads/2019/09/ADL_4586.jpg"
)
new ordinationItems(
    "Vegan",
    6,
    "Pomodori ciliegini, lattuga, cetrolo",
    "https://www.buttalapasta.it/wp-content/uploads/2021/01/tempeh.jpg"
)
new ordinationItems(
    "Sushi",
    6,
    "",
    "https://www.susasushi.it/immagini/sushi-sashimi-barca.jpg"
)
new ordinationItems(
    "Tailandese",
    6,
    "",
    "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/7DE647CE-2E09-4CBE-88EE-CFFCC70D7440/Derivates/F8CA1C89-596A-4EC0-9A63-6505DDBD528C.jpg"
)
