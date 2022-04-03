import { addHandlerClickPreviews } from './full-viewing.js';
import { IMG_CONTAINER_OTHER_USERS_ELEMENT, ERROR_SHOW_TIME } from './const.js';
import { onUploadPicture } from './img-load-form.js';

const templatePreviewElement = document.querySelector('#picture').content.querySelector('.picture');
const templatePreviewErrorElement = document.querySelector('#preview_error').content.querySelector('.error');
const previewsFragment = document.createDocumentFragment();

const clearPreviews = () => {
  const previews = IMG_CONTAINER_OTHER_USERS_ELEMENT.querySelectorAll('a');
  previews.forEach((preview) => {
    preview.remove();
  });
};


const makePreviewPictures = (previewsElementDescriptions) => {
  clearPreviews();
  previewsElementDescriptions.forEach((previewsElementDescription) => {
    const previewsElement = templatePreviewElement.cloneNode(true);
    const picture = previewsElement.querySelector('.picture__img');
    picture.id = previewsElementDescription.id;
    picture.src = previewsElementDescription.url;
    picture.alt = previewsElementDescription.description;
    previewsElement.querySelector('.picture__comments').textContent = String(previewsElementDescription.comments.length);
    previewsElement.querySelector('.picture__likes').textContent = String(previewsElementDescription.likes);
    previewsFragment.appendChild(previewsElement);
  });
  IMG_CONTAINER_OTHER_USERS_ELEMENT.appendChild(previewsFragment);
  addHandlerClickPreviews(previewsElementDescriptions);
  onUploadPicture();
};

const picturePreviewError = () => {
  const previewError = templatePreviewErrorElement.cloneNode(true);
  IMG_CONTAINER_OTHER_USERS_ELEMENT.appendChild(previewError);
  setTimeout(() => {
    IMG_CONTAINER_OTHER_USERS_ELEMENT.removeChild(previewError);
  }, ERROR_SHOW_TIME);
};

export { makePreviewPictures, picturePreviewError };
