const resCont = document.querySelector('.results');
const srchForm = document.querySelector('#search-form');
const pagination = document.querySelector('.pagination');
const detailCont = document.querySelector('.movie-details');
const favBlock = document.querySelector('.favourites');
const showFav = document.querySelector('.show-fav');
const fMovies = document.querySelector('.fav-movies');
const li = document.createElement('li');
const clearBtn = document.querySelector('.clear');
let favoutiteMovies = [];
const apikey = "c549391b";


const showError = () => {
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


const renderFavourites = (favTitle) => {
  const f = document.createElement('p');
  f.innerText = `${favTitle}`;
  fMovies.append(f);
}

const showFavContainer = () => {
  fMovies.innerHTML = "";
  let favArr = [...Object.keys(localStorage)];
  favArr.forEach((item) => {
     const p = document.createElement('p');
     p.innerText = `${item}`;
     fMovies.append(p);
  })
}


showFav.addEventListener('click', showFavContainer);


const showResults = (arr) => {
  arr.forEach( ({Title, Year, Type, imdbID}) => {
      const li = document.createElement('li');
      li.classList.add('film');
      li.innerText = `"${Title}", ${Type}, ${Year}`;
      resCont.append(li);

      const addButton = document.createElement('button');
      addButton.classList.add('add-to-fav');
      addButton.innerHTML = "<span class='star'>&#9733;</span>";
      addButton.setAttribute("data-fav", `${imdbID}`);
      li.append(addButton);
      addButton.addEventListener('click', addToFavourites); 

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
  const t = document.querySelector('.type-select').value;


  resCont.innerHTML = "";
  pagination.innerHTML = "";
  detailCont.classList.remove('visible');
  
    try {
      const resp = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&type=${t}&s=${ttl}&page=${p}`)
      const data = await resp.json()
      const pgNm = await data.totalResults;
      showResults(data.Search);
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

async function addToFavourites (e) {
  const favMovie = this.getAttribute("data-fav");
  const favResp = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${favMovie}`)
  const favDet = await favResp.json()
  window.localStorage.setItem(JSON.stringify(favDet.Title), JSON.stringify(favDet.imdbID));
  renderFavourites(favDet.Title);
}

showFav.addEventListener('click', function() {
  favBlock.classList.toggle('visible');
})

clearBtn.addEventListener('click', function() {
  localStorage.clear();
})