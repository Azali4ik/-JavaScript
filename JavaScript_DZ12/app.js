'use strict';

const fitlerPopup = document.querySelector('.filterPopup');
const fitlerLabel = document.querySelector('.filterLabel');
const filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', () => {
  fitlerPopup.classList.toggle('hidden');
  fitlerLabel.classList.toggle('filterLabelPink');
  filterIcon.classList.toggle('filterIconPink');

  if (filterIcon.getAttribute('src') === 'img1/filter.svg') {
    filterIcon.setAttribute('src', 'img1/filterHover.svg')
  } else {
    filterIcon.setAttribute('src', 'img1/filter.svg')
  }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(header => {
  header.addEventListener('click', event => {
    event.target.nextElementSibling.classList.toggle('hidden');
  })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', () => {
  filterSizes.classList.toggle('hidden');
});