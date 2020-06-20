/*Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.*/

// let checkNumber = (a, b) => a < b ? -1 : a > b ? 1 : 0;

// console.log(checkNumber(2, 2));




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

// let getSquare = (a, b = 1) => b > 1 ? a*b : Math.pow(a, 2);

// console.log(getSquare(4,5));



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


// function showTime(hh, mm = "00", ss = "00") {
//     hh > 24 || mm > 60 || ss > 60 ? alert(`Error! Enter correct time!`) : alert(`Время ${hh}:${mm}:${ss} !`);
// }

// showTime(16, 40, 15);

                        /*АБО*/

// let showTime = (hh, mm = "00", ss = "00") => hh > 24 || mm > 60 || ss > 60 ? alert(`Error! Enter correct time!`) : alert(`Время ${hh}:${mm}:${ss} !`);

// showTime(16, 40, 15);





/*Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.*/

// let calcSecs = (h, m = 0 ,s = 0) => h * 3600 + m * 60 + s;
// console.log(calcSecs(14, 35, 40));                   /*Зробив через математику, без getTime/getDate і тд*/
                                                    





/*Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».*/


// function calcTime(s) {
//     let str = "";
//     let hh = Math.floor(s/3600);
//     str += hh;
//     str += ":";
//     let mm = Math.floor((s - hh*3600)/60);
//     str += mm;
//     str += ":";
//     let ss = s - hh*3600 - mm*60;
//     str += ss;

//     return str;
// }                                    /*мені вона теж не подобається але я поки хз як зробити краще*/

// console.log(calcTime(20723));






/*Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»*/



// /*Convert to seconds function*/
// let calcSecs = (h, m = 0 ,s = 0) => h * 3600 + m * 60 + s;

// /*Calculating difference between two time data*/
// let diff;
// function calcDiff(h1, m1, s1, h2, m2, s2) {
//     diff = Math.abs(calcSecs(h2, m2, s2) - calcSecs(h1, m1, s1));
//     return diff
// }

// calcDiff(8, 20, 10, 5, 48, 34);


// /*Convertation second to "hh.mm.ss"*/
// function calcTime(s) {
//     let str = "";
//     let hh = Math.floor(s/3600);
//     str += hh;
//     str += ":";
//     let mm = Math.floor((s - hh*3600)/60);
//     str += mm;
//     str += ":";
//     let ss = s - hh*3600 - mm*60;
//     str += ss;

//     return str;
// }

// console.log(calcTime(diff));                    /*  It works! D:   */

