/*Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.*/


const div = document.createElement('div');
div.classList.add('div-text');
div.innerText = "Text";
document.body.append(div);

const txtarea = document.createElement('textarea');
txtarea.classList.add('area');
txtarea.setAttribute('autofocus', 'autofocus');



const changeToTextarea = (e) => {
    if(e.key == "e") {
        e.preventDefault();
        div.remove();
        document.body.append(txtarea);
        txtarea.textContent = div.textContent;
        console.log(`pressed E`);
    }
}

const changeBackToDiv = (e) => {
    if(e.key == "=") {
        e.preventDefault();
        txtarea.remove();
        document.body.append(div);
        div.textContent = txtarea.value;
        console.log(`pressed +`);
    }
}

const removeEvents = (e) => {
    if(!e.ctrlKey || !e.key == "+" || !e.key == "=")
    window.removeEventListener('keydown', changeToTextarea);
    window.removeEventListener('keydown', changeBackToDiv);
    window.removeEventListener('keyup', removeEvents);
    console.log(`events removed`);
}

window.addEventListener('keydown', function(e) {
    if(e.ctrlKey) {
        window.addEventListener('keydown', changeToTextarea);
        window.addEventListener('keydown', changeBackToDiv);
    } else {
        window.addEventListener('keyup', removeEvents);
    }
})











// const removeEvents = (e) => {
//     if(!e.ctrlKey || !e.key == "+" || !e.key == "=")
//     window.removeEventListener('keydown', changeToTextarea);
//     window.removeEventListener('keydown', changeBackToDiv);
//     // window.removeEventListener('keyup', removeEvents);
//     console.log(`events removed`);
// }









/*старий код*/

// window.addEventListener('keydown', function (event) {
//     if(event.ctrlKey && event.key == "e") {
//         event.preventDefault();
//         div.remove();
//         document.body.append(txtarea);
//         txtarea.textContent = div.textContent;
//     }
// })


// window.addEventListener('keydown', function (event) {
//     if(event.ctrlKey && event.key == "=") {
//         event.preventDefault();
//         txtarea.remove();
//         document.body.append(div);
//         div.textContent = txtarea.value;
//     }
// })