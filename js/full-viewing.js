import { isEscapeKey } from './util.js';
import { BODY_KEKSOGRAM, LOADER_COMMENTS, FULL_SCREEN_IMAGE_DISPLAY, CONTAINER_IMAGES_OTHER_USERS } from './const.js';
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
  BODY_KEKSOGRAM.classList.add('modal-open');
}

function closeBigPicture() {
  document.removeEventListener('keydown', onBigPictureEscKeydown);
  buttonBigPictureCancel.removeEventListener('click', onButtonBigPictureCancelClick);
  LOADER_COMMENTS.removeEventListener('click', onLoaderCommentsClick);
  BODY_KEKSOGRAM.classList.remove('modal-open');
}

const addHandlerClickPreviews = (bigPictureDescriptions) => {
  CONTAINER_IMAGES_OTHER_USERS.addEventListener('click', (evt) => {
    if (evt.target.matches('img.picture__img')) {
      evt.preventDefault();
      fullBigPicture(FULL_SCREEN_IMAGE_DISPLAY, bigPictureDescriptions[evt.target.id]);
      openBigPicture(FULL_SCREEN_IMAGE_DISPLAY, bigPictureDescriptions[evt.target.id]);
    }
  });
};

export { addHandlerClickPreviews };
