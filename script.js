/*Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».*/
const name = prompt("What is your name?");
alert(`Hello, ${name}!`);


/*Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.*/
const year = prompt("What is your year of birth?");
const presYear = 2020;
alert(`You are  ${(presYear - year)} years old!`);

/*Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.*/
const length = prompt("What is length of storona kvadrata?");
alert(`Perimetr kvadrata = ${(length*4)}`);


/*Запросите у пользователя радиус окружности и выведите площадь такой окружности.*/
const r = prompt("What is circle radius?");
alert(`Circle area is ${Math.PI*Math.pow(r,2)}`);


/*Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.*/
const distance = prompt("Distacne between two cities?");
const time = prompt("Time?");
alert(`Your speed must be ${(distance/time)}km/h`);


/*Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.*/
const dollars = prompt("How much dollars?");
const carRate = 0.88;
alert(`You will get ${(dollars*carRate)}EU`);


/*Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.*/
const gb = prompt("How many Gigabytes?");
const file = 820;
alert(`You can have on it ${Math.floor((gb*1024)/820)} files`);


/*Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.*/
const budget = prompt("How much money do you have?");
const chocoPrice = prompt("How much costs one chocolate?");
alert(`You can buy ${Math.floor(budget/chocoPrice)} chocolates, and you still have ${(budget%chocoPrice)} dollars!`);


/*Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).*/
const num = prompt("Put a *** number");
let a = 0,
    b = 0,
    c = 0;

a += num % 10;
b += num % 100;
b = Math.floor(b / 10);
c += Math.floor(num / 100);

alert(`${a}${b}${c}`);


/*Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.*/
const deposit = prompt("Deposit amount?");
const percent = 0.05*2;
alert(`In 2 month you will get ${(deposit*percent)}`);



