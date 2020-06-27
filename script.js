/*1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.


Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.

Покупка продукта. Функция принимает название продукта и отмечает его как купленный.*/


// function purchase(product, amount, isBought) {
//     this.product = product;
//     this.amount = amount;
//     this.isBought = isBought;
// }

// function createObj(product, amount, isBought) {
//     let item = new purchase(product, amount, isBought);
//     shoppingList.push(item);
// }

// createObj("lemon", 2, true);
// createObj("bread", 1, false);
// createObj("salt", 5, true);
// createObj("water", 4, true);
// createObj("meat", 3, false);



// let shoppingList = [];

// function newPurchase(product, amount, isBought) {

//     let purchase = {
//             product: product,
//             amount: amount,
//             isBought: isBought
//     }

//     shoppingList.push(purchase);
// }

// newPurchase("lemon", 2, true);
// newPurchase("bread", 1, false);
// newPurchase("salt", 5, false);
// newPurchase("water", 4, true);
// newPurchase("bread", 1, false);
// newPurchase("meat", 3, false);


// function addNewPurch(product, amount, isBought){

//     let purchase = newPurchase(product, amount, isBought);

//     shoppingList.find((item) => {
//         if(item.product === newPurchase.product) {
//             item.amount += newPurchase.amount;
//         } else{
//             shoppingList.push(purchase);
//         } 
//       });
// }

// addNewPurch("sugar", 1, false);
// addNewPurch("salt", 2, false);


// const addToShopList = prodDef => {  // при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую
//     const prod = shopList.find(prod => prod.pName === prodDef.pName); 
//     if (!prod) return shopList.push(new Product(prodDef)); 
//     prod.amount += prodDef.amount; 
//   }; 


/*Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.*/

// function sortByIsBought(arr) {
//     arr.sort((a) => a.isBought === false ? -1 : 1);
// }

// sortByIsBought(shoppingList);

// console.table(shoppingList);





/*2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:*/

// let purchasesList = [];

// function newPurchase(good, amount, price) {

//     let purchase = {
//             good: good,
//             amount: amount,
//             price: price
//     }

//     purchasesList.push(purchase);
// }

// newPurchase("laptop", 3, 2500);
// newPurchase("smartphone", 4, 2000);
// newPurchase("tv", 1, 5000);
// newPurchase("headphones", 2, 500);
// newPurchase("xbox", 1, 3000);

// /*Распечатка чека на экран;*/

// purchasesList.forEach((item) => {
//     document.write(`Товар: ${item.good}<br>Количество: ${item.amount}<br>Цена за штуку: ${item.price}<br><hr>`);
// });

// /*Подсчет общей суммы покупки;*/

// let totalPrice = purchasesList.reduce((sum, current) => sum + (current.price * current.amount),0);
// document.write(`Сумма покупки: ${totalPrice}<br><hr>`);

// /*Получение самой дорогой покупки в чеке;*/

// /*найвища ціна за одиницю товару*/

// let mostExpensGood = purchasesList.sort((a, b) => a.price > b.price ? -1 : 1);
// document.write(`Самый дорогой товар в чеке: ${mostExpensGood[0].good}<br>Цена: ${mostExpensGood[0].price}<br><hr>`);

// /*найвища ціна за покупку(ціна*кількість)*/

// let mostExpensPurch = purchasesList.sort((a, b) => a.price*a.amount > b.price*b.amount ? -1 : 1);
// document.write(`Самая дорогая покупка: ${mostExpensPurch[0].good}<br>В количестве: ${mostExpensPurch[0].amount}<br>Полная цена: ${mostExpensPurch[0].price * mostExpensPurch[0].amount}<br><hr>`);

// /*Подсчет средней стоимости одного товара в чеке.*/

// let goodsAmount = purchasesList.reduce((sum, current) => (sum + current.amount),0);
// document.write(`Средняя стоимость одного товара: ~${Math.round(totalPrice/goodsAmount)}<br><hr>`);




/*3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.*/

// let styles = [];

// function newStyle(property, value) {

//     let style = {
//             property,
//             value
//     }

//     styles.push(style);
// }

// newStyle("color", "red");
// newStyle("font-size", "20px");
// newStyle("font-weight", "600");
// newStyle("text-align", "center");
// newStyle("text-decoration", "underline");

// let stl = "";
// styles.forEach((item) => {stl += `${item.property}` + ": " + `${item.value}` + "; ";});

// function printText(cssStyles, text) {
//     document.write(`<p style="${cssStyles}">${text}<p>`);
// }

// printText(stl, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deleniti totam asperiores officia, ut illum dolorem modi! Iste aliquid quasi eligendi reprehenderit impedit at, dignissimos explicabo enim odio itaque facilis iusto repudiandae doloribus minima blanditiis aperiam, earum totam, nobis atque. Architecto, non amet! Inventore alias ullam unde sit ratione rerum.");
