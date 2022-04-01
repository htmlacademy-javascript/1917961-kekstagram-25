import { addHandlerClickPreviews } from './full-viewing.js';
import { CONTAINER_IMAGES_OTHER_USERS, ERROR_SHOW_TIME } from './const.js';

const templatePreview = document.querySelector('#picture').content.querySelector('.picture');
const templatePreviewError = document.querySelector('#preview_error').content.querySelector('.error');
const previewsFragment = document.createDocumentFragment();

const previewPictures = (previewsElementDescriptions) => {
  previewsElementDescriptions.forEach((previewsElementDescription) => {
    const previewsElement = templatePreview.cloneNode(true);
    const picture = previewsElement.querySelector('.picture__img');
    picture.id = previewsElementDescription.id;
    picture.src = previewsElementDescription.url;
    picture.alt = previewsElementDescription.description;
    previewsElement.querySelector('.picture__comments').textContent = String(previewsElementDescription.comments.length);
    previewsElement.querySelector('.picture__likes').textContent = String(previewsElementDescription.likes);
    previewsFragment.appendChild(previewsElement);
  });
  CONTAINER_IMAGES_OTHER_USERS.appendChild(previewsFragment);
  addHandlerClickPreviews(previewsElementDescriptions);
};

const picturePreviewError = () => {
  const previewError = templatePreviewError.cloneNode(true);
  CONTAINER_IMAGES_OTHER_USERS.appendChild(previewError);
  setTimeout(() => {
    CONTAINER_IMAGES_OTHER_USERS.removeChild(previewError);
  }, ERROR_SHOW_TIME);
};

export { previewPictures, picturePreviewError };
