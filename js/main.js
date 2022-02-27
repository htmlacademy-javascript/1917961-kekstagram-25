const getRandomInteger = (beginInteger, endInteger) => {
  const rangeInteger = Math.abs(Math.abs(endInteger) - Math.abs(beginInteger)) + 1;
  return Math.floor(Math.random() * (rangeInteger) + Math.min(beginInteger, endInteger));
};

getRandomInteger(2,5);

const checkLengthString = (stringCheck, maxLengthString) => maxLengthString >= stringCheck.length;

checkLengthString('Ryzhkov Anatoly', 9);
