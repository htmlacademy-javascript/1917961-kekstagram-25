import { isEscapeKey } from './util.js';
import {
  BODY_ELEMENT, COMMENTS_LOADER_ELEMENT, IMG_BIG_DISPLAY_ELEMENT, IMG_CONTAINER_OTHER_USERS_ELEMENT
} from './const.js';
import { outputComment, onLoaderCommentsClick } from './comments.js';

const buttonBigPictureCancelElement = IMG_BIG_DISPLAY_ELEMENT.querySelector('.big-picture__cancel');

const onBigPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    IMG_BIG_DISPLAY_ELEMENT.classList.add('hidden');
    closeBigPicture();
  }
};

const onButtonBigPictureCancelClick = () => {
  IMG_BIG_DISPLAY_ELEMENT.classList.add('hidden');
  closeBigPicture();
};

const fillBigPicture = (picture, pictureDescription) => {
  picture.querySelector('.big-picture__img').children[0].src = pictureDescription.url;
  picture.querySelector('.likes-count').textContent = String(pictureDescription.likes);
  picture.querySelector('.comments-count').textContent = String(pictureDescription.comments.length);
  picture.querySelector('.social__caption').textContent = pictureDescription.description;
};

const openBigPicture = (picture, pictureDescription) => {
  picture.classList.remove('hidden');
  document.addEventListener('keydown', onBigPictureEscKeydown);
  buttonBigPictureCancelElement.addEventListener('click', onButtonBigPictureCancelClick);
  outputComment(pictureDescription);
  BODY_ELEMENT.classList.add('modal-open');
};

function closeBigPicture() {
  document.removeEventListener('keydown', onBigPictureEscKeydown);
  buttonBigPictureCancelElement.removeEventListener('click', onButtonBigPictureCancelClick);
  COMMENTS_LOADER_ELEMENT.removeEventListener('click', onLoaderCommentsClick);
  BODY_ELEMENT.classList.remove('modal-open');
}

const addHandlerClickPreviews = (bigPictureDescriptions) => {
  IMG_CONTAINER_OTHER_USERS_ELEMENT.addEventListener('click', (evt) => {
    if (evt.target.matches('img.picture__img')) {
      evt.preventDefault();
      fillBigPicture(IMG_BIG_DISPLAY_ELEMENT, bigPictureDescriptions[evt.target.id]);
      openBigPicture(IMG_BIG_DISPLAY_ELEMENT, bigPictureDescriptions[evt.target.id]);
    }
  });
};

export { addHandlerClickPreviews };
