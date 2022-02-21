function getRandomInteger (beginInteger, endInteger) {
  const rangeInteger = Math.abs(endInteger - beginInteger) + 1;
  return Math.floor(Math.random() * (rangeInteger) + Math.min(beginInteger, endInteger));
}

getRandomInteger(2,5);

function checkLengthString (stringCheck, maxLengthString) {
  return maxLengthString >= stringCheck.length;
}

checkLengthString('Ryzhkov Anatoly', 9);
