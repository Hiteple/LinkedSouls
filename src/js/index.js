
const api = 'pk.eyJ1IjoiaGl0ZXBsZSIsImEiOiJjanVqOXpiZXMwOHpuNDRvNDFpaGM0N2FjIn0.xhQL_59xEjuUCyTGyJJVAg';

document.addEventListener('DOMContentLoaded', () => {
   new WOW().init();
   const mymap = L.map('location-map').setView([40.7188964, -73.9988173,17.26], 16);

   L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${api}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
   }).addTo(mymap);
   mymap.scrollWheelZoom.disable()
   const marker = L.marker([40.7188964, -73.9988173,17.26]).addTo(mymap);
   marker.bindPopup("<b>LinkedSouls</b><br>at this spot").openPopup();
});

// Open button
const headerNav = document.querySelector('.main-nav');
const openIcon = document.querySelector('.header__open');
const closeIcon = document.querySelector('.header__close');
openIcon.addEventListener('click', () => {
   openIcon.classList.toggle('hidden');
   closeIcon.classList.toggle('visible');
   headerNav.classList.add('visible');
})

closeIcon.addEventListener('click', () => {
   openIcon.classList.toggle('hidden');
   closeIcon.classList.toggle('visible');
   headerNav.classList.remove('visible');
})