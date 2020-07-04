/*1. Создать страницу, которая выводит нумерованный список песен:*/

var playList = [

{

 author: "LED ZEPPELIN",

 song:"STAIRWAY TO HEAVEN"

},

{

 author: "QUEEN",

 song:"BOHEMIAN RHAPSODY"

},

{

 author: "LYNYRD SKYNYRD",

 song:"FREE BIRD"

},

{

 author: "DEEP PURPLE",

 song:"SMOKE ON THE WATER"

},

{

 author: "JIMI HENDRIX",

 song:"ALL ALONG THE WATCHTOWER"

},

{

 author: "AC/DC",

 song:"BACK IN BLACK"

},

{

 author: "QUEEN",

 song:"WE WILL ROCK YOU"

},

{

 author: "METALLICA",

 song:"ENTER SANDMAN"

}

];

const list = document.createElement('ol');

function getPlaylist() {
    playList.forEach((comp) => {
        const li = document.createElement('li');
        list.appendChild(li);

        const h3 = document.createElement('h3');
        h3.innerText = comp.author;

        const h2 = document.createElement('h2');
        h2.innerText = comp.song;

        list.appendChild(h3);
        h3.classList.add('author');

        list.appendChild(h2);
        h2.classList.add('song');

        document.body.append(list);
    })
};





/*2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.*/

/*баттони з індексами прост шоб задавати класси через дом-методи і шоб не робити окрему html сторінку на кожне завдання*/

const btn = document.getElementsByTagName('button');  
btn[1].classList.add('btn-open');
btn[1].textContent = 'Open Modal';


const div = document.querySelector('div');
div.classList.add('modal');


const h1 = document.createElement('h1');
h1.classList.add('text');
h1.innerText = "Текст";
div.prepend(h1);


btn[2].classList.add('btn-close');
btn[2].textContent = 'Close Modal';


const modal = document.querySelector('.modal');

function openModal() {
    modal.classList.add('modal--show');
}

function closeModal() {
    modal.classList.remove('modal--show');
}



/*3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.*/

btn[3].classList.add('switch');
btn[3].textContent = "Click!";


const trafLights = document.createElement('div');
trafLights.classList.add('container');
document.body.append(trafLights);

const red = document.createElement('div');
red.classList.add('red');
red.classList.add('light');
trafLights.append(red);

const yellow = document.createElement('div');
yellow.classList.add('yellow');
yellow.classList.add('light');
trafLights.append(yellow);

const green = document.createElement('div');
green.classList.add('green');
green.classList.add('light');
trafLights.append(green);

let c = trafLights.children;
let i = 0;

function switchColor() {
        if(i > 2) {
            i = 0;
            for(let j = 0; j < c.length; j++) {
                c[j].classList.add('light');
            }
        } else if(i != 0) {
            c[i-1].classList.add('light');
        }
        c[i].classList.remove('light');
        i++;
}

/*не хотів робити просто порівняння классів через іф-елси типу якшо червоне то не жовте і не зелене ітд чи світч, такшо якось так ¯\_(ツ)_/¯. і шось у мене не виходить "виключити" світлофор. взагалі був варіант, але тоді він працює тільки 1 круг*/