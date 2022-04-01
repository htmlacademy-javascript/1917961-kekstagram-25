import { deleteRandomValueFromArray } from './util.js';
import { TEN_RANDOM_PICTURES } from './const.js';

const filters = document.querySelector('.img-filters');
const filterDefault = filters.querySelector('#filter-default');
const filterRandom = filters.querySelector('#filter-random');
const filterDiscussed = filters.querySelector('#filter-discussed');

function compareNumbers(a, b) {
  return b.comments.length - a.comments.length;
}

const onFilterDefault = (cb, data) => {
  filterDefault.addEventListener('click', () => {
    filterRandom.classList.remove('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');
    filterDefault.classList.add('img-filters__button--active');
    cb(data);
  });
};

const onFilterRandom = (cb, data) => {
  filterRandom.addEventListener('click', () => {
    filterDefault.classList.remove('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');
    filterRandom.classList.add('img-filters__button--active');
    const copyPictiresDescriptions = data.slice();
    const tenRandomPicturesDescriptions = [];
    for (let i = 0; i < TEN_RANDOM_PICTURES; i++) {
      tenRandomPicturesDescriptions.push(deleteRandomValueFromArray(copyPictiresDescriptions));
    }
    cb(tenRandomPicturesDescriptions);
  });
};

const onFilterDiscussed = (cb, data) => {
  filterDiscussed.addEventListener('click', () => {
    filterDefault.classList.remove('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');
    filterDiscussed.classList.add('img-filters__button--active');
    const copyPictiresDescriptions = data.slice();
    copyPictiresDescriptions.sort(compareNumbers);
    cb(copyPictiresDescriptions);
  });
};

const showFilter = () => {
  filters.classList.remove('img-filters--inactive');
};

export { showFilter, onFilterDiscussed, onFilterRandom, onFilterDefault };
