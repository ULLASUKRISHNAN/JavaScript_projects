const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const Image_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;
const mainContainer = document.getElementsByClassName('mainContainer')[0];

const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

async function getMovies(url) {
  let response = await fetch(url);
  let data = await response.json();
  showMovie(data.results);
}

function showMovie(movies) {
  mainContainer.innerHTML = '';
  console.log(movies);
  movies.map((movie) => {
    const { original_title, vote_average } = movie;
    let { overview, backdrop_path } = movie;
    let card = document.createElement('div');
    card.classList.add('movie');
    card.setAttribute('onclick', () => {});
    card.innerHTML = `<div">
        <img src="${
          backdrop_path ? Image_URL + backdrop_path : './bg.jpg'
        }" alt="${original_title}" />
        <div class="movie-info">
          <h3>${original_title}</h3>
          <span class=${getColor(vote_average)}>${vote_average}</span>
        </div>
        <div class="overview">
          <h3> Overview</h3>
          ${(overview =
            overview.length > 259
              ? overview.substring(0, 259) + '...  <b>Read More</b>'
              : overview)}
        </div>
      </div>
     `;
    mainContainer.appendChild(card);
  });
}

function getColor(vote) {
  return vote >= 8 ? 'green' : vote >= 5 ? 'orange' : 'red';
}

/* Form data  for search*/

form.addEventListener('keyup', (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  if (searchTerm) {
    getMovies(searchURL + '&query=' + searchTerm);
  } else {
    getMovies(API_URL);
  }
});
