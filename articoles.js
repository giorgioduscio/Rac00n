// TODO array
const arrayProducts=[];
function arrayProductsItem(name, price, ingredients, imageUrl) {
    this.name=name;
    this.price=price;
    this.ingredients=ingredients;
    this.imageUrl=imageUrl;

    this.addItems=function(){ arrayProducts.push(this); } 
    this.addItems();
}
new arrayProductsItem(
    "Margherita",
    4,
    "Pomodoro, mozzarella, basilico",
    "https://ilfattoalimentare.it/wp-content/uploads/2022/12/Depositphotos_505971914_L-1.jpg"
)
new arrayProductsItem(
    "Romana",
    6,
    "Pomodoro, mozzarella, prociuto cotto",
    "https://www.pizzaontheroad.eu/wp-content/uploads/2019/09/ADL_4586.jpg"
)
new arrayProductsItem(
    "San daniele",
    6.60,
    "Pomodoro, mozzarella, prociutto crudo, scaglie di grana padano",
    "https://www.anticogatoleto.com/shop/wp-content/uploads/2021/02/sandaniele-min-scaled.jpeg"
)
new arrayProductsItem(
    "Diavola",
    6.70,
    "Pomodoro, mozzarella, salame piccante",
    "https://www.pizzarecipe.org/wp-content/uploads/2019/01/Pizza-Diavola.jpg"
)
new arrayProductsItem(
    "Norvegese",
    8.80,
    "Mozzarella, salmone affumicato, pistacchio, formaggio spalmabile",
    "https://3punto0restaurant.com/wp-content/uploads/2020/06/WhatsApp-Image-2023-03-17-at-20.01.53.jpeg"
)
