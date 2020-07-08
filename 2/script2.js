/*Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать данные по этой колонке. Учтите, что числовые значения должны сортироваться как числа, а не как строки.*/

const td = document.querySelectorAll('td');
td.forEach((item) => {
    item.innerText = Math.floor(Math.random() * 1000);
})

const allTh = document.querySelectorAll('thead tr th');

const bodyTr = document.querySelectorAll('tbody tr');

const tablebody = document.querySelector('tbody');



allTh.forEach((item) => {
    item.addEventListener('click', function() {
        let sortedCells = [...bodyTr].sort(function(a, b) {
            return a.children[0].innerHTML - b.children[0].innerHTML;
        });
        
        tablebody.innerHTML = '';
        
        for (let tr of sortedCells) {
            tablebody.appendChild(tr);
        }
    });
})


/*всьо здаюсь.*/



