const getRandomInteger = (beginInteger, endInteger) => {
  const rangeInteger = Math.abs(Math.abs(endInteger) - Math.abs(beginInteger)) + 1;
  return Math.floor(Math.random() * (rangeInteger) + Math.min(beginInteger, endInteger));
};

const getRandomValueFromArray = (arrayFromGetValue) => arrayFromGetValue[getRandomInteger(0, arrayFromGetValue.length - 1)];

const createArrayIndexInValue = (count) => Array.from({ length: count }, (value, key) => key + 1);

const deleteRandomValueFromArray = (arrayFromGetIdentifier) => {
  const index = getRandomInteger(0, arrayFromGetIdentifier.length - 1);
  return arrayFromGetIdentifier.splice(index, 1)[0];
};

export { getRandomInteger, getRandomValueFromArray, createArrayIndexInValue, deleteRandomValueFromArray };
