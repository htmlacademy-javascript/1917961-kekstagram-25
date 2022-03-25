import { isEscapeKey } from './util.js';
import { TAG_BODY, LOADER_COMMENTS, FULL_SCREEN_IMAGE_DISPLAY } from './const.js';
import { outputComment, onLoaderCommentsClick } from './comments.js';

const buttonBigPictureCancel = FULL_SCREEN_IMAGE_DISPLAY.querySelector('.big-picture__cancel');


const onBigPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    FULL_SCREEN_IMAGE_DISPLAY.classList.add('hidden');
    closeBigPicture();
  }
};

const onButtonBigPictureCancelClick = () => {
  FULL_SCREEN_IMAGE_DISPLAY.classList.add('hidden');
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
  outputComment(pictureDescription);
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
    fullBigPicture(FULL_SCREEN_IMAGE_DISPLAY, bigPictureDescription);
    openBigPicture(FULL_SCREEN_IMAGE_DISPLAY, bigPictureDescription);
  });
};

export { addHandlerClickPreviews };
