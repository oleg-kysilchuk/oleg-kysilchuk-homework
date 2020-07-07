/*Создать HTML-страницу с блоком текста в рамочке. Реализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.*/


const div = document.createElement('div');
div.classList.add('block');
document.body.append(div);

const res = document.createElement('div');
res.classList.add('resizer');
div.append(res);


/*я не зовсім зрозумів чи я можу тут використовувати анонімні функції...але воно працює */

const startResize = () => {
    if(event.which == 1) {
        window.addEventListener('mousemove', changeSize);
        window.addEventListener('mouseup', stopResize);
    }
}

const changeSize = (e) => {
    div.style.width = `${(e.clientX - div.offsetLeft)}px`;
    div.style.height = `${(e.clientY - div.offsetTop)}px`;
}

const stopResize = () => {
    window.removeEventListener('mousemove', changeSize);
    window.removeEventListener('mouseup', stopResize);
}

res.addEventListener('mousedown', startResize);

