/*1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:*/


let car = {
    brand: "Ford",
    model: "Taurus",
    year: 2020,
    averageSpeed: 120,
}


// /*Функция для вывода на экран информации об автомобиле;*/

function carInfo(obj) {
    for(let k in obj) {
        document.write(`<p>${k}: ${obj[k]}</p><br>`);
    }
}

carInfo(car);


// /*Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.*/


function travelTime(obj, d) {
    let t = d / obj.averageSpeed;
    let t2 = t + Math.floor(t/ 4);
    let sec = t2 * 3600;
    let h = Math.floor(sec / 3600);
    let m = Math.ceil((sec - h*3600)/60);
    return document.write(`<p>Travel time: ~${h}h:${m}m</p>`);

}

travelTime(car, 5000);






/*3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:*/

/*Функция вывода времени на экран;*/

let d = new Date();

let showDate = (dt) => document.write(`<h1>${dt}</h1>`);

showDate(d);

/*Функция изменения времени на переданное количество часов, минут и секунд*/

function changeTime(dt, hh, mm, ss) {
    let day = dt.getDate();
    let h = dt.getHours() + hh;
    let m = dt.getMinutes() + mm;
    let s = dt.getSeconds() + ss;

    switch(true) {
        case s >= 60:
            m += Math.floor(s/60);
            s -= 60 * Math.floor(s/60);

        case m >= 60:
            h += Math.floor(m/60);
            m -= 60 * Math.floor(m/60); 

        case h >= 24:
            day += Math.floor(h/24);
            h -= 24 * Math.floor(h/24);

        default:
            break;
    }

    return console.log(`${day}.${dt.getMonth()+1} ${h}:${m}:${s}`);
}

changeTime(d, 10, 144, 135);