import {HASHTAG_AS_REGULAR_EXPRESSION} from './const.js';

const getRandomInteger = (beginInteger, endInteger) => {
  const rangeInteger = Math.abs(Math.abs(endInteger) - Math.abs(beginInteger)) + 1;
  return Math.floor(Math.random() * (rangeInteger) + Math.min(beginInteger, endInteger));
};

const checkLengthString = (stringCheck, maxLengthString) => maxLengthString >= stringCheck.length;

const getRandomValueFromArray = (arrayFromGetValue) => arrayFromGetValue[getRandomInteger(0, arrayFromGetValue.length - 1)];

const createArrayIndexInValue = (count) => Array.from({ length: count }, (value, key) => key + 1);

const deleteRandomValueFromArray = (arrayFromGetIdentifier) => {
  const index = getRandomInteger(0, arrayFromGetIdentifier.length - 1);
  return arrayFromGetIdentifier.splice(index, 1)[0];
};

const removeAllChildren = (parent) => {
  parent.innerHTML = '';
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const deleteExcessSpase = (originalString) => originalString.replace(/\s+/g, ' ').trim();

function checkValidateHashtag(array) {
  let isValid = false;
  for (let i = 0; i < array.length; i++) {
    isValid = HASHTAG_AS_REGULAR_EXPRESSION.test(array[i]);
    if (!isValid) {
      return isValid;
    }
  }
  return isValid;
}

function checkUniqueHashtags(array) {
  let isValid = true;
  for (let i = 0; i < array.length; i++) {
    isValid = array.indexOf(array[i], i + 1) < 0;
    if (!isValid) {
      return isValid;
    }
  }
  return isValid;
}

function checkCountHashtags(array, count) {
  return array.length <= count;
}

export {
  getRandomInteger, getRandomValueFromArray, createArrayIndexInValue, deleteRandomValueFromArray, removeAllChildren,
  isEscapeKey, deleteExcessSpase, checkValidateHashtag, checkUniqueHashtags, checkCountHashtags, checkLengthString
};
