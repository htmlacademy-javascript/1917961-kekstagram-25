import {
  COUNT_PHOTO, MAX_COUNT_COMMENTS, BEGIN_INT_FOR_CALC_NUMBER_AVATAR, END_INT_FOR_CALC_NUMBER_AVATAR,
  BEGIN_INT_FOR_CALC_COUNT_LIKES, END_INT_FOR_CALC_COUNT_LIKES, DESCRIPTIONS_FOR_PHOTO, NAMES_AUTHOR, MESSAGES
} from './const.js';
import {
  getRandomInteger, getRandomValueFromArray,
  createArrayIndexInValue, deleteRandomValueFromArray
} from './util.js';

let idComments = 0;

const createComments = () => ({
  id: ++idComments,
  avatar: `img/avatar-${getRandomInteger(BEGIN_INT_FOR_CALC_NUMBER_AVATAR, END_INT_FOR_CALC_NUMBER_AVATAR)}.svg`,
  message: getRandomValueFromArray(MESSAGES),
  name: getRandomValueFromArray(NAMES_AUTHOR)
});

const arrayIdPhotoDescription = createArrayIndexInValue(COUNT_PHOTO);

const createPhotoDescription = () => {
  const indentifier = deleteRandomValueFromArray(arrayIdPhotoDescription);
  return {
    id: indentifier,
    url: `photos/${indentifier}.jpg`,
    description: getRandomValueFromArray(DESCRIPTIONS_FOR_PHOTO),
    likes: getRandomInteger(BEGIN_INT_FOR_CALC_COUNT_LIKES, END_INT_FOR_CALC_COUNT_LIKES),
    comments: Array.from({ length: getRandomInteger(1, MAX_COUNT_COMMENTS) }, createComments)
  };
};

const createPhotoDescriptions = () => Array.from({ length: COUNT_PHOTO }, createPhotoDescription);

export {createPhotoDescriptions};
