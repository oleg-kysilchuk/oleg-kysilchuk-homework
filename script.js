// const age = prompt("Your age?");

// if(age >= 0 && age <=2) {
//     alert(`You are kid`);
// } else if(age >= 12 && age < 18) {
//     alert(`You are teenager`);
// } else if(age >= 18 && age < 60) {
//     alert(`You are adult`);
// } else if(age >= 60) {
//     alert(`You are senior`);
// } else {
//     alert(`Error! Enter correct age!`)
// }



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



// const year = prompt("Enter some year");

// if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0) ) {
//     alert(`This year is vysokosnyj!`);
// } else {
//     alert(`This year is not vysokosnyj`);
// }



// const value = prompt(`How much USD You want to exchange?`);

// let currency = prompt(`What currency You would like to get? EUR, UAH or AZN?`);

// const EUR = 0.88;
// const UAH = 26.6;
// const AZN = 1.7;

// if(currency == "EUR" || currency == "eur") {
//     alert(`You will get ${value * EUR} EUR`);
// } else if(currency == "UAH" || currency == "uah") {
//     alert(`You will get ${value * UAH} UAH`);
// } else if(currency == "AZN" || currency == "azn") {
//     alert(`You will get ${value * AZN} AZN`);
// } else {
//     alert(`Error! Choose correct currency!`);
// }



// const price = prompt(`Enter purchase price`);

// const disc3 = 0.03;
// const disc5 = 0.05;
// const disc7 = 0.07;

// if(price >= 200 && price < 300) {
//     alert(`Your price with discount is ${price - price * disc3}`);
// } else if(price >= 300 && price < 500) {
//     alert(`Your price with discount is ${price - price * disc5}`);
// } else if(price >= 500) {
//     alert(`Your price with discount is ${price - price * disc7}`);
// } else {
//     alert(`Please, buy something for 200 or more!`);
// }



const S = prompt(`Enter dlinu okruzhnosti`);
const P = prompt(`Enter perimetr kvadrata`);

const r = S/(2 * Math.PI);
// const a = Math.ceil(Math.PI * Math.pow(r, 2));
const d = r * 2;

const H = P/4;
// const b = Math.pow(H, 2);

if(d < H) {
    alert(`Pomestitsya!`)
} else {
    alert(`Ne pomestitsya`)
}
