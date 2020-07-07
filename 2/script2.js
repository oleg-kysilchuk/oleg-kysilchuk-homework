/*Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать данные по этой колонке. Учтите, что числовые значения должны сортироваться как числа, а не как строки.*/

const td = document.querySelectorAll('td');
td.forEach((item) => {
    item.innerText = Math.floor(Math.random() * 1000);
})

/*ЩЕ НЕ ГОТОВЕ */


// // for(let i = 0;i < td.length;i++) {
// //     td[i].innerText = Math.floor(Math.random() * 1000);
// // }

// const trs = document.querySelectorAll('tr');
// for(let i = 0;i < trs.length;i++) {
//     // trs[i].setAttribute('data-num', '' + i);
//     let tds = trs[i].querySelectorAll('td');
// }


// const th = document.querySelectorAll('th');

// th.forEach((item) => {
//     item.addEventListener('click', function(e){
//         let a = e.target;
//         console.log(a.children);
//     })
// })