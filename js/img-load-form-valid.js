import {
  SPACE_AS_REGULAR_EXPRESSION, MAX_COUNT_HASHTAGS, LENGTH_COMMENT, OUTPUT_PRISTINE_MESSAGE_HASHTAGS,
  FORM_UPLOAD_PICTURE, OUTPUT_PRISTINE_MESSAGE_COMMENT
} from './const.js';
import {
  deleteExcessSpase, checkValidateHashtag, checkUniqueHashtags, checkArrayLength, checkLengthString
} from './util.js';
import { onFormUploadPictureEscKeydown } from './img-load-form.js';

const inputHashtags = FORM_UPLOAD_PICTURE.querySelector('#hashtags');
const inputComment = FORM_UPLOAD_PICTURE.querySelector('#add__comment');

const pristine = new Pristine(FORM_UPLOAD_PICTURE, {
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
  pristine.addValidator(inputHashtags, validateHashtags, OUTPUT_PRISTINE_MESSAGE_HASHTAGS);
  pristine.addValidator(inputComment, validateComment, OUTPUT_PRISTINE_MESSAGE_COMMENT);
  inputHashtags.addEventListener('focus', removeListenerKeydownEsc);
  inputHashtags.addEventListener('blur', addListenerKeydownEsc);
  inputComment.addEventListener('focus', removeListenerKeydownEsc);
  inputComment.addEventListener('blur', addListenerKeydownEsc);
};

const cleanOffHashtagsAndComment = () => {
  inputHashtags.value = '';
  inputComment.value = '';
};

export { onValidatorForm, isValidForm, cleanOffHashtagsAndComment, prepareStringHashtags };
