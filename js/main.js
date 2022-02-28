const getRandomInteger = (beginInteger, endInteger) => {
  const rangeInteger = Math.abs(Math.abs(endInteger) - Math.abs(beginInteger)) + 1;
  return Math.floor(Math.random() * (rangeInteger) + Math.min(beginInteger, endInteger));
};

getRandomInteger(2, 5);

const checkLengthString = (stringCheck, maxLengthString) => maxLengthString >= stringCheck.length;

checkLengthString('Ryzhkov Anatoly', 9);

const MAX_COUNT_COMMENTS = 7;
const BEGIN_INT_FOR_CALC_NUMBER_AVATAR =1;
const END_INT_FOR_CALC_NUMBER_AVATAR = 6;
const BEGIN_INT_FOR_CALC_COUNT_LIKES = 15;
const END_INT_FOR_CALC_COUNT_LIKES = 200;
const COUNT_PHOTO = 25;

const DESCRIPTIONS_FOR_PHOTO = [
  'Когда радости нет предела',
  'Грусть, я тебя не боюсь',
  'Поднимаю настроение мини–фотосессией',
  'Любовь в каждом пикселе',
  'Фото, заряженное на позитив',
  'Улыбаюсь новому дню',
  'Я не плачу — это просто дождь',
  'Карабас–Барабас или «я в плохом расположении духа»',
  'Как мало нужно для счастья',
  'Теплые воспоминания в холодное время года',
  'В гневе я страшен',
  'Знали бы вы, что у меня на уме',
  'В диком восторге от происходящего',
  'Поймал дзен',
  'Досадно, но ладно'];


const NAMES_AUTHOR = ['Святослав', 'Доброжир', 'Тихомир', 'Ратибор', 'Ярополк', 'Гостомысл',
  'Велимудр', 'Всеволод', 'Богдан', 'Доброгнева', 'Любомила', 'Миролюб', 'Светозар', 'Милонег'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const arrayIdPhotoDescription = Array.from({ length: COUNT_PHOTO }, (value, key) => key + 1);

const getRandomValueArray = (arrayFromGetValue) => arrayFromGetValue[getRandomInteger(0, arrayFromGetValue.length - 1)];

const getRandomIdentifier = (arrayFromGetIdentifier) => {
  const index = getRandomInteger(0, arrayFromGetIdentifier.length - 1);
  const randomIdentifier = arrayFromGetIdentifier[index];
  arrayFromGetIdentifier.splice(index, 1);
  return randomIdentifier;
};

let idComments = 0;

const createComments = () => ({
  id: ++idComments,
  avatar: `img/avatar-${getRandomInteger(BEGIN_INT_FOR_CALC_NUMBER_AVATAR, END_INT_FOR_CALC_NUMBER_AVATAR)}.svg`,
  message: getRandomValueArray(MESSAGES),
  name: getRandomValueArray(NAMES_AUTHOR)
});

const createPhotoDescription = () => {
  const indentifier = getRandomIdentifier(arrayIdPhotoDescription);
  return {
    id: indentifier,
    url: `photos/${indentifier}.jpg`,
    description: getRandomValueArray(DESCRIPTIONS_FOR_PHOTO),
    likes: getRandomInteger(BEGIN_INT_FOR_CALC_COUNT_LIKES, END_INT_FOR_CALC_COUNT_LIKES),
    comments: Array.from({ length: getRandomInteger(1, MAX_COUNT_COMMENTS) }, createComments)
  };
};

const arrayPhoto = Array.from({ length: COUNT_PHOTO }, createPhotoDescription);
throw arrayPhoto;
