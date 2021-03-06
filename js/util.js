import { HASHTAG_AS_REGULAR_EXPRESSION } from './const.js';

const getRandomInteger = (beginInteger, endInteger) => {
  const rangeInteger = Math.abs(Math.abs(endInteger) - Math.abs(beginInteger)) + 1;
  return Math.floor(Math.random() * (rangeInteger) + Math.min(beginInteger, endInteger));
};

const checkLengthString = (stringCheck, maxLengthString) => maxLengthString >= stringCheck.length;

const deleteRandomValueFromArray = (arrayFromGetIdentifier) => {
  const index = getRandomInteger(0, arrayFromGetIdentifier.length - 1);
  return arrayFromGetIdentifier.splice(index, 1)[0];
};

const removeAllChildren = (parent) => {
  parent.innerHTML = '';
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const deleteExcessSpase = (originalString) => originalString.replace(/\s+/g, ' ').trim();

const checkValidateHashtag = (array) => {
  let isValid = false;
  for (let i = 0; i < array.length; i++) {
    isValid = HASHTAG_AS_REGULAR_EXPRESSION.test(array[i]);
    if (!isValid) {
      return isValid;
    }
  }
  return isValid;
};

const checkUniqueHashtags = (array) => {
  let isValid = true;
  for (let i = 0; i < array.length; i++) {
    isValid = array.indexOf(array[i], i + 1) < 0;
    if (!isValid) {
      return isValid;
    }
  }
  return isValid;
};

const checkArrayLength = (array, count) => array.length <= count;

const movePointerToStart = (pictureDescription) => {
  pictureDescription.pointerViewComments = 0;
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {
  getRandomInteger, deleteRandomValueFromArray, removeAllChildren, isEscapeKey, deleteExcessSpase,
  checkValidateHashtag, checkUniqueHashtags, checkArrayLength, checkLengthString, movePointerToStart, debounce
};
