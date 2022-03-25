import {
  TAG_BODY, SPACE_AS_REGULAR_EXPRESSION, MAX_COUNT_HASHTAGS, LENGTH_COMMENT, OUTPUT_PRISTINE_MESSAGE_HASHTAGS,
  IMAGE_SCALE_DEFAULT, FORM_UPLOAD_PICTURE
} from './const.js';
import {
  deleteExcessSpase, checkValidateHashtag, checkUniqueHashtags, checkArrayLength, checkLengthString,
  isEscapeKey
} from './util.js';
import { addZoom, removeZoom, transformScale } from './zoom.js';
import { addEffect, removeEffect } from './effect.js';

const uploadPicture = FORM_UPLOAD_PICTURE.querySelector('#upload-file');
const visableFormUploadPicture = FORM_UPLOAD_PICTURE.querySelector('.img-upload__overlay');
const buttonPictureUploadCancel = visableFormUploadPicture.querySelector('.img-upload__cancel');
const inputHashtags = FORM_UPLOAD_PICTURE.querySelector('#hashtags');
const inputComment = FORM_UPLOAD_PICTURE.querySelector('#add__comment');

const onFormUploadPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormUploadPicture();
  }
};

const prepareStringHashtags = (originalString) => {
  originalString = deleteExcessSpase(originalString);
  return originalString.toLowerCase();
};

const pristine = new Pristine(FORM_UPLOAD_PICTURE, {
  classTo: 'pristine__validate',
  errorClass: 'pristine__validate--invalid',
  successClass: 'pristine__validate--valid',
  errorTextParent: 'pristine__validate',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

FORM_UPLOAD_PICTURE.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
  inputHashtags.value = deleteExcessSpase(inputHashtags.value);
});

function validateHashtags(stringHashtags) {
  if (!stringHashtags) {
    return true;
  }
  const preparedStringHashtags = prepareStringHashtags(stringHashtags);
  const wordsHashtags = preparedStringHashtags.split(SPACE_AS_REGULAR_EXPRESSION);
  return checkArrayLength(wordsHashtags, MAX_COUNT_HASHTAGS)
    && checkUniqueHashtags(wordsHashtags)
    && checkValidateHashtag(wordsHashtags);

}

pristine.addValidator(inputHashtags, validateHashtags, OUTPUT_PRISTINE_MESSAGE_HASHTAGS);

function validateComment(stringComment) {
  return checkLengthString(stringComment, LENGTH_COMMENT);
}

pristine.addValidator(inputComment, validateComment, 'Комментарий больше 140 символов.');

function addListenerKeydownEsc() {
  document.addEventListener('keydown', onFormUploadPictureEscKeydown);
}

function removeListenerKeydownEsc() {
  document.removeEventListener('keydown', onFormUploadPictureEscKeydown);
}

inputHashtags.addEventListener('focus', removeListenerKeydownEsc);
inputHashtags.addEventListener('blur', addListenerKeydownEsc);

inputComment.addEventListener('focus', removeListenerKeydownEsc);
inputComment.addEventListener('blur', addListenerKeydownEsc);

function openFormUploadPicture() {
  visableFormUploadPicture.classList.remove('hidden');
  document.addEventListener('keydown', onFormUploadPictureEscKeydown);
  addZoom();
  addEffect();
  TAG_BODY.classList.add('modal-open');
}

function closeFormUploadPicture() {
  visableFormUploadPicture.classList.add('hidden');
  TAG_BODY.classList.remove('modal-open');
  uploadPicture.value = '';
  document.removeEventListener('keydown', onFormUploadPictureEscKeydown);
  transformScale(IMAGE_SCALE_DEFAULT);
  removeZoom();
  removeEffect();
}

uploadPicture.addEventListener('change', () => {
  openFormUploadPicture();
});

buttonPictureUploadCancel.addEventListener('click', () => {
  closeFormUploadPicture();
});
