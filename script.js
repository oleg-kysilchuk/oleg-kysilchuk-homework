// /*Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).*/


// const age = prompt("Your age?");

// switch(true) {
//     case age >= 0 && age <=2:
//         alert(`You are kid`);
//         break;

//     case age >= 12 && age < 18:
//         alert(`You are teenager`);
//         break;

//     case age >= 18 && age < 60:
//         alert(`You are adult`);
//         break;

//     case age >= 60:
//         alert(`You are senior`);
//         break;

//     default:
//         alert(`Error! Enter correct age!`);
//         break;
// }




// /*Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).*/

// const num = prompt("Enter a number");

// switch (Number(num)) {
//     case 0:
//         alert(`)`)
//         break;

//     case 1:
//         alert(`!`)
//         break;

//     case 2:
//         alert(`@`)
//         break;

//     case 3:
//         alert(`#`)
//         break;

//     case 4:
//         alert(`$`)
//         break;

//     case 5:
//         alert(`%`)
//         break;

//     case 6:
//         alert(`^`)
//         break;

//     case 7:
//         alert(`&`)
//         break;

//     case 8:
//         alert(`*`)
//         break;

//     case 9:
//         alert(`(`)
//         break;

//     default:
//         alert(`Error! Enter correct symbol!`)
//         break;
// }


// /*Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.*/

// const n = prompt("Enter *** number");

// let n1 = Math.floor(n / 100);
// let n2 = Math.floor(n / 10 % 10);
// let n3 = n % 10;

// if(n1 === n2 || n1 === n3 || n2 === n3) {
//     alert(`We have match!`);
// } else {
//     alert(`No matches`)
// }


// /*Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.*/

// const year = prompt("Enter some year");

// if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0) ) {
//     alert(`This year is vysokosnyj!`);
// } else {
//     alert(`This year is not vysokosnyj`);
// }



/*Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.*/

// const num5 = prompt("Введите пятизначное число");

// for (let i = 0;i < num5.length-1; i++) {
//   (num5[i] == num5[i+4]) && (num5[i+1] == num5[i+3]) ? alert("This number is palindrome!") : alert("This number is not palindrome");
//   break;
// }



// /*Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.*/

// const value = prompt(`How much USD You want to exchange?`);

// let currency = prompt(`What currency You would like to get? EUR, UAH or AZN?`);

// const EUR = 0.88;
// const UAH = 26.6;
// const AZN = 1.7;

// switch(true) {
//     case currency == "EUR" || currency == "eur":
//     alert(`You will get ${value * EUR} EUR`);
//     break;

//     case currency == "UAH" || currency == "uah":
//     alert(`You will get ${value * UAH} UAH`);
//     break;
    
//     case currency == "AZN" || currency == "azn":
//     alert(`You will get ${value * AZN} AZN`);
//     break;

//     default:
//     alert(`Error! Choose correct currency!`);
// }




// /*Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.*/


// const price = prompt(`Enter purchase price`);

// const disc3 = 0.03;
// const disc5 = 0.05;
// const disc7 = 0.07;

// switch(true) {
//     case price >= 200 && price < 300:
//         alert(`Your price with discount is ${price - price * disc3}`);
//         break;

//     case price >= 300 && price < 500:
//         alert(`Your price with discount is ${price - price * disc5}`);
//         break;

//     case price >= 500:
//         alert(`Your price with discount is ${price - price * disc7}`);
//         break;

//     default:
//         alert(`Please, buy something for 200 or more!`);
// }





// /*Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.*/

// const S = prompt(`Enter dlinu okruzhnosti`);
// const P = prompt(`Enter perimetr kvadrata`);

// const r = S/(2 * Math.PI);
// // const a = Math.ceil(Math.PI * Math.pow(r, 2));
// const d = r * 2;

// const H = P/4;
// // const b = Math.pow(H, 2);

// if(d < H) {
//     alert(`Pomestitsya!`)
// } else {
//     alert(`Ne pomestitsya`)
// }



// /*Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.*/

// var points = 0;

// const que1 = prompt("2 + 2 ?");

// const answF1 = 3;

// const answF2 = 4;

// const answF3 = 6;

// if(que1 == answF2) {
//     points += 2;
// }


// const que2 = prompt("10 * 5 ?");

// const answS1 = 50;

// const answS2 = 100;

// const answS3 = 200;

// if(que2 == answS1) {
//     points += 2;
// } 


// const que3 = prompt("100 / 4 ?");

// const answT1 = 40;

// const answT2 = 10;

// const answT3 = 25;

// if(que3 == answT3) {
//     points += 2;
// }

// alert(`You got ${points} points!`);