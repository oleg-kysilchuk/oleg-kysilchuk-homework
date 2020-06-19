/*Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.*/

// function checkNumber(a, b) {

//     switch(true) {
//         case a < b:
//             return -1;

//         case a > b:
//             return 1;

//         case a == b:
//             return 0;

//         default:
//             break;
//     }
// }

// console.log(checkNumber());




/*Написать функцию, которая вычисляет факториал переданного ей числа.*/

// let res = 1;
// function factorial(c) {
//     let d = c;
//     for(let i = 1; i <= d; i++) {
//         res *= c;
//         c--; 
//     }

//     return res;
// }

// console.log(factorial(5));





/*Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.*/


// str = "";
// function getNumber(...num) {
//     for(let i = 0;i < num.length; i++) {
//         str += String(num[i]);
//     }
//     return str;
// }

// console.log(getNumber(1,4,9));
// console.log(typeof str);





/*Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.*/


// function getSquare(a, b = 1) {
//     return (b > 1) ? a*b : Math.pow(a, 2);
// }

// console.log(getSquare(4, 5));





/*Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.*/


// function checkPerfNum(n) {
//     let sum = 0;
//     for(let i = 1; i < n;i++) {
//         n % i == 0 ? sum += i : sum += 0;
//     }

//     return true ? sum == n : false; 
// }

// console.log(checkPerfNum(6));





/*Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. */



// function checkPerfNum(n) {
//     let sum = 0;
//     for(let i = 1; i < n;i++) {
//         n % i == 0 ? sum += i : sum += 0;
//     }

//     return true ? sum == n : false; 
// }

// function getAllPerfNums(minN, maxN) {
//     let nums = [];
//     let i = minN;
//     for(i; i <= maxN; i++) {
//         if(checkPerfNum(i)) {
//             nums.push(i);
//         }
//     }
//     return nums;
// }

// console.log(getAllPerfNums(1, 8129));




/*Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.*/


// function getTime(hh, mm = "00", ss = "00") {
//     hh > 24 || mm > 60 || ss > 60 ? alert(`Error! Enter correct time!`) : alert(`Время ${hh}:${mm}:${ss} !`);
// }

// getTime(16, 40, 15);





/*Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.*/

// function calcSecs(h, m = 0 ,s = 0) {
//     let seconds = h * 3600 + m * 60 + s;
//     return seconds;
// }

// console.log(calcSecs(14, 35, 40));  /*Зробив через математику, без getTime/getDate і тд ¯\_(ツ)_/¯*/





/*Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».*/


function calcTime(s) {
    let str = "";
    let d = new Date(s * 1000);
    let hh = d.getHours();
    str += hh;
    str += "h:";
    let mm = (s*1000 - hh * 3600).getMinutes();
    str += mm;
    str += "m:";
    let ss = (s*1000 - hh*3600 - mm*60).getSeconds();
    str += ss;
    str += "s";

    return str;
}

console.log(calcTime(20723));