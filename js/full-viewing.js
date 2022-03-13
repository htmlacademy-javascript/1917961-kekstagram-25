import {removeAllChildren, isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const socialComments = bigPicture.querySelector('.social__comments');
const templateComment = document.querySelector('#comment').content.querySelector('.social__comment');
const buttonBigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const counterComments = bigPicture.querySelector('.social__comment-count');
const loaderComments = bigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');

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

const fillComments = (insertPointComments, comments) => {
  removeAllChildren(socialComments);
  const fragmentComments = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = templateComment.cloneNode(true);
    const commentator = commentElement.querySelector('.social__picture');
    commentator.src = comment.avatar;
    commentator.alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    fragmentComments.appendChild(commentElement);
  });
  insertPointComments.appendChild(fragmentComments);
};

function openBigPicture (picture, pictureDescription) {
  picture.classList.remove('hidden');
  document.addEventListener('keydown', onBigPictureEscKeydown);
  buttonBigPictureCancel.addEventListener('click', onButtonBigPictureCancelClick);
  picture.querySelector('.big-picture__img').children[0].src = pictureDescription.url;
  picture.querySelector('.likes-count').textContent = String(pictureDescription.likes);
  picture.querySelector('.comments-count').textContent = String(pictureDescription.comments.length);
  fillComments(socialComments, pictureDescription.comments);
  counterComments.classList.add('hidden');
  loaderComments.classList.add('hidden');
  body.classList.add('modal-open');
}

function closeBigPicture ()  {
  document.removeEventListener('keydown', onBigPictureEscKeydown);
  buttonBigPictureCancel.removeEventListener('click', onButtonBigPictureCancelClick);
  counterComments.classList.remove('hidden');
  loaderComments.classList.remove('hidden');
  body.classList.remove('modal-open');
}

const addHandlerClickPreviews = (previewsElement, bigPictureDescription) => {
  previewsElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    openBigPicture(bigPicture, bigPictureDescription);
  });
};

export { addHandlerClickPreviews };
