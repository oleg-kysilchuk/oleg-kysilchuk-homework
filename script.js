const resCont = document.querySelector('.results');
const srchForm = document.querySelector('#search-form');
const pagination = document.querySelector('.pagination');
const detailCont = document.querySelector('.movie-details');
const typesArray = [...document.querySelectorAll('.type-btn')];

const apikey = "c549391b";

let t = "";

typesArray.forEach((item) => {
  item.addEventListener('click', function() {
    item.classList.toggle('choosed');
    return t = item.getAttribute("data-type");
  })
})


const showError = () => {
  const li = document.createElement('li');
  li.classList.add('error');
  li.innerText = "Movie not found!";
  resCont.append(li);
}


const renderDetails = (obj) => {

  detailCont.classList.remove('visible');
  detailCont.innerHTML = "";

  const poster = document.createElement('img');
  poster.src = obj.Poster;

  const title = document.createElement('p');
  title.innerText = `"${obj.Title}", ${obj.Year}`;
  
  const genre = document.createElement('p');
  genre.innerText = `Genre: ${obj.Genre}`;

  const actors = document.createElement('p');
  actors.innerText = `Actors: ${obj.Actors}`;

  const rating = document.createElement('p');
  rating.innerText = `Raring: "${obj.imdbRating}"`;

  const plot = document.createElement('p');
  plot.innerText = `Plot: ${obj.Plot}`;

  const close = document.createElement('button');
  close.classList.add('close-btn');
  close.innerHTML = "&#10006;";

  close.addEventListener('click', function(){
    detailCont.innerHTML = "";
    detailCont.classList.remove('visible');
  })

  detailCont.classList.add('visible');
  detailCont.append(poster, title, genre, actors, rating, plot, close);
}



const showRes = (arr) => {
  arr.forEach( ({Title, Year, Type, imdbID}) => {
      const li = document.createElement('li');
      li.classList.add('film');
      li.innerText = `"${Title}", ${Type}, ${Year}`;
      resCont.append(li);
      const dtls = document.createElement('button');
      dtls.classList.add('details-btn');
      dtls.innerText = "details";
      dtls.setAttribute("data-id", `${imdbID}`);
      li.append(dtls);
      dtls.addEventListener('click', showDetails);
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
      const resp = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&type=${t}&s=${ttl}&page=${p}`)
      const data = await resp.json()
      const pgNm = await data.totalResults;
      showRes(data.Search);
      showPages(pgNm);
    } catch (e) {
      showError();
    }
}


srchForm.addEventListener('submit', function(e) {
  e.preventDefault();

  let p;
  getResponse(p)
   
});


async function showDetails (e) {
  const movID = this.getAttribute("data-id");
  const detResp = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${movID}`)
  const dt = await detResp.json()
  renderDetails(dt);
}

