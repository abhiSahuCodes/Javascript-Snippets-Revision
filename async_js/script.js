'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

////////////////////////////////////////////////////////////////////

const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/name/India');

request.send();

request.addEventListener('load', function() {
    const [data] = JSON.parse(request.response);
    console.log(data)

    const html = `
    <article class="country">
      <img class="country__img" src=${data.flags.png} />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 10000000).toFixed(1)} Crore</p>
        <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
        <p class="country__row"><span>💰</span>${data.currencies.INR.name}</p>
      </div>
    </article>
    `
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
})

