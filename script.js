// /*Подсчитать сумму всех чисел в заданном пользователем диапазоне.*/

// let a = +prompt("Enter range start");
// let b = +prompt("Enter range end");
// let c = 0;

// while(a <= b) {
//     c+=a;
//     a++;
// }

// alert(`Your amount is ${c}`);





// /*Запросить 2 числа и найти только наибольший общий делитель.*/

// let num1 = +prompt("Enter first number");
// let num2 = +prompt("Enter second number");

// while (num1 != 0 && num2 != 0) {
//     num1 > num2 ? num1 = num1 % num2 : num2 = num2 % num1;
// }

// alert(`Наибольший общий делитель ${num1 + num2}`);





/*Запросить у пользователя число и вывести все делители этого числа.*/

// const num3 = +prompt("Enter some number");
// let i = 0;
// let d = [];
// while (i++ <= num3) {
//   if (num3 % i == 0) {
//     d.push(i); 
//   }
// }

// alert(`Делители этого числа это: ${d}`);





/*Определить количество цифр в введенном числе.*/

// const num4 = prompt("Enter some number");

// let numAm = 0;

// while(numAm < num4.length) {
//     numAm++;
// }

// alert(`${numAm}`);





/*Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.*/


// let num5;
// let odd = 0;
// let even = 0;
// let zero = 0;
// let mNum = 0;
// let pNum = 0;

// for(let i = 1;i <= 10; i++) {
//     num5 = +prompt("Enter ten numbers (1 per time)");

//     switch(true) {
//         case num5 == 0:
//             zero++;
//             even++;
//             break;

//         case num5 < 0 && num5 % 2 !== 0:
//             mNum++;
//             odd++;
//             break;

//         case num5 < 0 && num5 % 2 == 0:
//             mNum++;
//             even++;
//             break;

//         case num5 > 0 && num5 % 2 !== 0:
//             pNum++;
//             odd++;
//             break;

//         case num5 > 0 && num5 % 2 == 0:
//             pNum++;
//             even++;
//             break;

//         default:
//             alert(`Error!`);
//     }
// }

// alert(`Чётных:${odd}, Нечётных:${even}, Положительных:${pNum}, Отрицательных:${mNum}, Нулей:${zero}`);





/*Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.*/


// let res = 0;
// let cont;

// do {
//     let calcNum1 = +prompt("Введите число первое");
//     let calcNum2 = +prompt("Введите второе число");
//     let op = prompt("Введите оператор");

//     switch(op) {
//         case "+":
//             res = calcNum1 + calcNum2;
//             break;

//         case "-":
//             res = calcNum1 - calcNum2;
//             break;

//         case "*":
//             res = calcNum1 * calcNum2;
//             break;

//         case "/":
//             res = calcNum1 / calcNum2;
//             break;

//         default:
//             alert(`Error!`);
//     }
    
//     alert(res);
//     res = 0;
//     cont = confirm(`Хотите продожить?`);
// } while (cont);





/*Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.*/


// let num6 = 1;
// let day;
// let question;
// const mon = "Понедельник";
// const tue = "Вторник";
// const wed = "Среда";
// const thu = "Четверг";
// const fri = "Пятница";
// const sat = "Суббота";
// const sun = "Воскресенье";

// do {
//     switch(true) {
//         case num6 == 1 || num6 % 7 == 1:
//             day = mon;
//             break;
            
//         case num6 == 2 || num6 % 7 == 2:
//             day = tue;
//             break;

//         case num6 == 3 || num6 % 7 == 3:
//             day = wed;
//             break;

//         case num6 == 4 || num6 % 7 == 4:
//             day = thu;
//             break;

//         case num6 == 5 || num6 % 7 == 5:
//             day = fri;
//             break;

//         case num6 == 6 || num6 % 7 == 6:
//             day = sat;
//             break;

//         case num6 == 7 || num6 % 7 == 0:
//             day = sun;
//             break;

//         default:
//             alert(`Error!`); 
//     }
    
//     question = confirm(`${day}. Хотите увидеть следующий день?`);
//     num6++;
// } while(question);




/*Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.*/


// let i = 2;
// let j = 1;
// let result = 0;

// while(i <= 9) {
//     for(j; j <= 10; j++) {
//         result = i * j;
//         document.write(`${i} * ${j} = ${result} <br>`);
//     }
//     document.write("<br>");
//     j = 1;
//     i++;
// }




/*Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.*/

// let ask
// let res;
// let corNum;
// let min = 0;
// let max = 100;

// while(ask !== "равно" ) {
    
//     ask = +prompt(`Введите число от ${min} до ${max} включительно`);
//     res = max / 2;
//     ask = prompt(`Ваше число больше, меньше или равно ${res} ?`);
//     ask === "меньше" ? max = res :
//     ask === "больше" ? min = res + 1 :
//     ask === "равно" ? alert(`Ваше число ${res}!`) :
//     alert(`Error!`);
//     corNum = res;
// }   /* Не готове :( */


