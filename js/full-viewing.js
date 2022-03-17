import {removeAllChildren, isEscapeKey} from './util.js';
import {TAG_BODY} from './const.js';
import {fillComments} from './comments.js';

const bigPicture = document.querySelector('.big-picture');
const socialComments = bigPicture.querySelector('.social__comments');
const buttonBigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const counterComments = bigPicture.querySelector('.social__comment-count');
const loaderComments = bigPicture.querySelector('.comments-loader');

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
  counterComments.classList.add('hidden');
  loaderComments.classList.add('hidden');
};

function openBigPicture (picture, pictureDescription) {
  picture.classList.remove('hidden');

  document.addEventListener('keydown', onBigPictureEscKeydown);
  buttonBigPictureCancel.addEventListener('click', onButtonBigPictureCancelClick);

  removeAllChildren(socialComments);
  fillComments(socialComments, pictureDescription.comments);

  TAG_BODY.classList.add('modal-open');
}

function closeBigPicture ()  {
  document.removeEventListener('keydown', onBigPictureEscKeydown);
  buttonBigPictureCancel.removeEventListener('click', onButtonBigPictureCancelClick);

  counterComments.classList.remove('hidden');
  loaderComments.classList.remove('hidden');

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
