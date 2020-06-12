const name = prompt("What is your name?");
alert(`Hello, ${name}!`);


const year = prompt("What is your year of birth?");
const presYear = 2020;
alert(`You are  ${(presYear - year)} years old!`);


const length = prompt("What is length of storona kvadrata?");
alert(`Perimetr kvadrata = ${(length*4)}`);


const r = prompt("What is circle radius?");
alert(`Circle area is ${Math.PI*Math.pow(r,2)}`);


const distance = prompt("Distacne between two cities?");
const time = prompt("Time?");
alert(`Your speed must be ${(distance/time)}km/h`);


const dollars = prompt("How much dollars?");
const carRate = 0.88;
alert(`You will get ${(dollars*carRate)}EU`);


const gb = prompt("How many Gigabytes?");
const file = 820;
alert(`You can have on it ${Math.floor((gb*1024)/820)} files`);


const budget = prompt("How much money do you have?");
const chocoPrice = prompt("How much costs one chocolate?");
alert(`You can buy ${Math.floor(budget/chocoPrice)} chocolates, and you still have ${(budget%chocoPrice)} dollars!`);


const deposit = prompt("Deposit amount?");
const percent = 0.05*2;
alert(`In 2 month you will get ${(deposit*percent)}`);


const num = prompt("Put a *** number");
let a = 0,
    b = 0,
    c = 0;

a += num % 10;
b += num % 100;
b = Math.floor(b / 10);
c += Math.floor(num / 100);

alert(`${a}${b}${c}`);





