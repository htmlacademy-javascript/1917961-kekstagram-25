import { TAG_BODY, SPACE_AS_REGULAR_EXPRESSION, MAX_COUNT_HASHTAGS, LENGTH_COMMENT, OUTPUT_PRISTINE_MESSAGE_HASHTAGS } from './const.js';
import { deleteExcessSpase, checkValidateHashtag, checkUniqueHashtags, checkArrayLength, checkLengthString, isEscapeKey } from './util.js';

const uploadPicture = document.querySelector('#upload-file');
const visableFormUploadPicture = document.querySelector('.img-upload__overlay');
const buttonPictureUploadCancel = visableFormUploadPicture.querySelector('.img-upload__cancel');
const formUploadPicture = document.querySelector('.img-upload__form');
const inputHashtags = formUploadPicture.querySelector('#hashtags');
const inputComment = formUploadPicture.querySelector('#add__comment');

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

const pristine = new Pristine(formUploadPicture, {
  classTo: 'pristine__validate',
  errorClass: 'pristine__validate--invalid',
  successClass: 'pristine__validate--valid',
  errorTextParent: 'pristine__validate',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

formUploadPicture.addEventListener('submit', (evt) => {
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
  TAG_BODY.classList.add('modal-open');
}

function closeFormUploadPicture() {
  visableFormUploadPicture.classList.add('hidden');
  TAG_BODY.classList.remove('modal-open');
  uploadPicture.value = '';
}

uploadPicture.addEventListener('change', () => {
  openFormUploadPicture();
});

buttonPictureUploadCancel.addEventListener('click', () => {
  closeFormUploadPicture();
});
