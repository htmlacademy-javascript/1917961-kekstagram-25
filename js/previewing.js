import {createPhotoDescriptions} from './data.js';

const pictures =  document.querySelector('.pictures');
const templatePreview = document.querySelector('#picture').content.querySelector('.picture');
const previewsElements = createPhotoDescriptions();
const previewFragment = document.createDocumentFragment();

previewsElements.forEach(({id, url, description, likes, comments}) => {
    const previewsElement = templatePreview.cloneNode(true);
    previewsElement.querySelector('.picture__img').src = url;
    previewsElement.querySelector('.picture__comments').textContent = comments.length;    
    previewsElement.querySelector('.picture__likes').textContent = likes;
    previewFragment.appendChild(previewsElement);
});

pictures.appendChild(previewFragment);
