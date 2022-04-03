import {
  SPACE_AS_REGULAR_EXPRESSION, MAX_COUNT_HASHTAGS, LENGTH_COMMENT, OUTPUT_PRISTINE_MESSAGE_HASHTAGS,
  IMG_FORM_UPLOAD_ELEMENT, OUTPUT_PRISTINE_MESSAGE_COMMENT
} from './const.js';
import {
  deleteExcessSpase, checkValidateHashtag, checkUniqueHashtags, checkArrayLength, checkLengthString
} from './util.js';
import { onFormUploadPictureEscKeydown } from './img-load-form.js';

const inputHashtagsElement = IMG_FORM_UPLOAD_ELEMENT.querySelector('#hashtags');
const inputCommentElement = IMG_FORM_UPLOAD_ELEMENT.querySelector('#add__comment');

// eslint-disable-next-line no-trailing-spaces
const pristine = new Pristine(IMG_FORM_UPLOAD_ELEMENT, {
  classTo: 'pristine__validate',
  errorClass: 'pristine__validate--invalid',
  successClass: 'pristine__validate--valid',
  errorTextParent: 'pristine__validate',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});


const prepareStringHashtags = (originalString) => {
  originalString = deleteExcessSpase(originalString);
  return originalString.toLowerCase();
};

const validateHashtags = (stringHashtags) => {
  if (!stringHashtags) {
    return true;
  }
  const preparedStringHashtags = prepareStringHashtags(stringHashtags);
  const wordsHashtags = preparedStringHashtags.split(SPACE_AS_REGULAR_EXPRESSION);
  return checkArrayLength(wordsHashtags, MAX_COUNT_HASHTAGS)
    && checkUniqueHashtags(wordsHashtags)
    && checkValidateHashtag(wordsHashtags);
};

const validateComment = (stringComment) => checkLengthString(stringComment, LENGTH_COMMENT);

const isValidForm = () => pristine.validate();

const addListenerKeydownEsc = () => {
  document.addEventListener('keydown', onFormUploadPictureEscKeydown);
};

const removeListenerKeydownEsc = () => {
  document.removeEventListener('keydown', onFormUploadPictureEscKeydown);
};

const onValidatorForm = () => {
  pristine.addValidator(inputHashtagsElement, validateHashtags, OUTPUT_PRISTINE_MESSAGE_HASHTAGS);
  pristine.addValidator(inputCommentElement, validateComment, OUTPUT_PRISTINE_MESSAGE_COMMENT);
  inputHashtagsElement.addEventListener('focus', removeListenerKeydownEsc);
  inputHashtagsElement.addEventListener('blur', addListenerKeydownEsc);
  inputCommentElement.addEventListener('focus', removeListenerKeydownEsc);
  inputCommentElement.addEventListener('blur', addListenerKeydownEsc);
};

const cleanOffHashtagsAndComment = () => {
  inputHashtagsElement.value = '';
  inputCommentElement.value = '';
};

export { onValidatorForm, isValidForm, cleanOffHashtagsAndComment, prepareStringHashtags };
