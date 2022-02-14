const galeryBox = document.querySelector('.main-inner');
const searchURL = 'https://api.unsplash.com/search/photos?query=';
const request = 'https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=3XqeEZ0vle1NnQWwuqMIqmsxBrLP1ZgDr_Jep0-vP-c';
const form = document.querySelector('form');
const search = document.querySelector('.header-input');

async function getData(request) {
  const res = await fetch(request);
  const data = await res.json();
  if (data.total > 0) {
    showData(data);
  } else {
    galeryBox.innerHTML = '';
    const img = `<img class='error' src='./assets/img/error.jpg'>`;
    galeryBox.insertAdjacentHTML('beforeend', img);
  }
}
getData(request);

function showData(data) {
  galeryBox.innerHTML = '';
  data.results.map((value) => {
    const img = `<img class='main-image' src='${value.urls.regular}' alt='${value.alt_description}'>`;
    galeryBox.insertAdjacentHTML('beforeend', img);
  });
}


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userSearch = `${searchURL}${search.value}&per_page=30&orientation=landscape&client_id=3XqeEZ0vle1NnQWwuqMIqmsxBrLP1ZgDr_Jep0-vP-c`;
  if (search.value) {
    getData(userSearch);
  }
});

document.querySelector('.fa-search').addEventListener('click', (event) => {
  event.preventDefault();
  const userSearch = `${searchURL}${search.value}&per_page=30&orientation=landscape&client_id=3XqeEZ0vle1NnQWwuqMIqmsxBrLP1ZgDr_Jep0-vP-c`;
  if (search.value) {
    getData(userSearch);    
  }
});