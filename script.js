const resCont = document.querySelector('.results');
const srchForm = document.querySelector('#search-form');
const prev = document.querySelector('.prevPage');
const next = document.querySelector('.nextPage');
const pagination = document.querySelector('.pagination');

const apikey = "c549391b";


const showRes = (arr) => {
  arr.forEach( ({Title, Year}) => {
      const li = document.createElement('li');
      li.classList.add('film');
      li.innerText = `${Title}, ${Year}`;
      resCont.append(li);
  });
}

const showPages = (resultNum) => {
  const a = Math.ceil(resultNum / 10);

  for(let i = 1; i <= a; i++) {

    const pageBtn = document.createElement('button');
    pageBtn.classList.add('page-btn');
    pageBtn.value = i;
    pageBtn.innerText = i;
    pagination.append(pageBtn);
  }

  const pages = document.querySelectorAll('.page-btn');

  pages.forEach((item) => {
    item.addEventListener('click', function(e) {
      const pageNum = e.target.value;
      getResponse(pageNum);
    })
  })


  
}

async function getResponse(p = 1) {
  const ttl = document.querySelector('.search-inp').value;
  resCont.innerHTML = "";
  pagination.innerHTML = "";
  
    try {
      const resp = await fetch(`https://www.omdbapi.com/?apikey=c549391b&s=${ttl}&page=${p}`)
      const data = await resp.json()
      const pgNm = await data.totalResults;
      showRes(data.Search);
      showPages(pgNm);
    } catch (e) {
      console.error(e)
    }
}


srchForm.addEventListener('submit', function(e) {
  e.preventDefault();

  let p;
  getResponse(p)
   
});


// async funct getting film id !!!



// srchForm.addEventListener('submit', function(e) {
//   e.preventDefault();

//   resCont.innerHTML = "";

//   const ttl = document.querySelector('.search-inp').value;

//   fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${ttl}`)
//     .then(resp => resp.json())
//     .then(resp => console.log(resp))
//     .then(resp => showRes(resp.Search))
//     .then(resp => showPages(resp.totalResults))
  
// });







// async function getResponse() {
//   let ttl = document.querySelector('.search-inp').value;
//     try {
//       const resp = await fetch(`https://www.omdbapi.com/?apikey=c549391b&s=${ttl}`)
//       const data = await resp.json()
//       console.log(data)
//     } catch (e) {
//       console.error(e)
//     }
// }
// getResponse()