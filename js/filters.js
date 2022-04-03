import { deleteRandomValueFromArray } from './util.js';
import { TEN_RANDOM_PICTURES } from './const.js';

const filtersElement = document.querySelector('.img-filters');
const filterDefaultElement = filtersElement.querySelector('#filter-default');
const filterRandomElement = filtersElement.querySelector('#filter-random');
const filterDiscussedElement = filtersElement.querySelector('#filter-discussed');

const compareNumbers = (a, b) => b.comments.length - a.comments.length;

const onFilterDefault = (cb, data) => {
  filterDefaultElement.addEventListener('click', () => {
    filterRandomElement.classList.remove('img-filters__button--active');
    filterDiscussedElement.classList.remove('img-filters__button--active');
    filterDefaultElement.classList.add('img-filters__button--active');
    cb(data);
  });
};

const onFilterRandom = (cb, data) => {
  filterRandomElement.addEventListener('click', () => {
    filterDefaultElement.classList.remove('img-filters__button--active');
    filterDiscussedElement.classList.remove('img-filters__button--active');
    filterRandomElement.classList.add('img-filters__button--active');
    const copyPictiresDescriptions = data.slice();
    const tenRandomPicturesDescriptions = [];
    for (let i = 0; i < TEN_RANDOM_PICTURES; i++) {
      tenRandomPicturesDescriptions.push(deleteRandomValueFromArray(copyPictiresDescriptions));
    }
    cb(tenRandomPicturesDescriptions);
  });
};

const onFilterDiscussed = (cb, data) => {
  filterDiscussedElement.addEventListener('click', () => {
    filterDefaultElement.classList.remove('img-filters__button--active');
    filterRandomElement.classList.remove('img-filters__button--active');
    filterDiscussedElement.classList.add('img-filters__button--active');
    const copyPictiresDescriptions = data.slice();
    copyPictiresDescriptions.sort(compareNumbers);
    cb(copyPictiresDescriptions);
  });
};

const showFilter = () => {
  filtersElement.classList.remove('img-filters--inactive');
};

export { showFilter, onFilterDiscussed, onFilterRandom, onFilterDefault };
