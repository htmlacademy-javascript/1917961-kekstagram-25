import {createPhotoDescriptions} from './data.js';
import {addHandlerClickPreviews} from './full-viewing.js';

const pictures =  document.querySelector('.pictures');
const templatePreview = document.querySelector('#picture').content.querySelector('.picture');
const previewsElementDescriptions = createPhotoDescriptions();
const previewsFragment = document.createDocumentFragment();

previewsElementDescriptions.forEach((previewsElementDescription) => {
  const previewsElement = templatePreview.cloneNode(true);
  const pictureImg = previewsElement.querySelector('.picture__img');
  pictureImg.src = previewsElementDescription.url;
  pictureImg.alt = previewsElementDescription.description;
  previewsElement.querySelector('.picture__comments').textContent = String(previewsElementDescription.comments.length);
  previewsElement.querySelector('.picture__likes').textContent = String(previewsElementDescription.likes);
  addHandlerClickPreviews(previewsElement, previewsElementDescription);
  previewsFragment.appendChild(previewsElement);
});

pictures.appendChild(previewsFragment);
