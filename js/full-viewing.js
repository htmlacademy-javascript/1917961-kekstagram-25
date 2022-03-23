import { isEscapeKey } from './util.js';
import { TAG_BODY, LOADER_COMMENTS } from './const.js';
import { outputСomment, onLoaderCommentsClick } from './comments.js';

const bigPicture = document.querySelector('.big-picture');
const buttonBigPictureCancel = bigPicture.querySelector('.big-picture__cancel');


const onBigPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    bigPicture.classList.add('hidden');
    closeBigPicture();
  }
};

const onButtonBigPictureCancelClick = () => {
  bigPicture.classList.add('hidden');
  closeBigPicture();
};

const fullBigPicture = (picture, pictureDescription) => {
  picture.querySelector('.big-picture__img').children[0].src = pictureDescription.url;
  picture.querySelector('.likes-count').textContent = String(pictureDescription.likes);
  picture.querySelector('.comments-count').textContent = String(pictureDescription.comments.length);
  picture.querySelector('.social__caption').textContent = pictureDescription.description;
};

function openBigPicture(picture, pictureDescription) {
  picture.classList.remove('hidden');
  document.addEventListener('keydown', onBigPictureEscKeydown);
  buttonBigPictureCancel.addEventListener('click', onButtonBigPictureCancelClick);
  outputСomment(pictureDescription);
  TAG_BODY.classList.add('modal-open');
}

function closeBigPicture() {
  document.removeEventListener('keydown', onBigPictureEscKeydown);
  buttonBigPictureCancel.removeEventListener('click', onButtonBigPictureCancelClick);
  LOADER_COMMENTS.removeEventListener('click', onLoaderCommentsClick);
  TAG_BODY.classList.remove('modal-open');
}

const addHandlerClickPreviews = (previewsElement, bigPictureDescription) => {
  previewsElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    fullBigPicture(bigPicture, bigPictureDescription);
    openBigPicture(bigPicture, bigPictureDescription);
  });
};

export { addHandlerClickPreviews };
