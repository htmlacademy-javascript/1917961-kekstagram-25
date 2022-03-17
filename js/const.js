const COUNT_PHOTO = 25;
const MAX_COUNT_COMMENTS = 7;
const BEGIN_INT_FOR_CALC_NUMBER_AVATAR = 1;
const END_INT_FOR_CALC_NUMBER_AVATAR = 6;
const BEGIN_INT_FOR_CALC_COUNT_LIKES = 15;
const END_INT_FOR_CALC_COUNT_LIKES = 200;
const TAG_BODY = document.querySelector('body');
const SPACE_AS_REGULAR_EXPRESSION = /\s/;
const HASHTAG_AS_REGULAR_EXPRESSION = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const MAX_COUNT_HASHTAGS = 5;
const LENGTH_COMMENT = 140;
const OUTPUT_PRISTINE_MESSAGE_HASHTAGS = 'Хэш-тег начинается с символа # (решётка). Хеш-тег не может состоять только из одной решётки. Строка после решётки должна состоять из букв и чисел. Максимальная длина одного хэш-тега 20 символов, включая решётку. Хэш-теги нечувствительны к регистру. Хэш-теги разделяются пробелами. Один и тот же хэш-тег не может быть использован дважды. Нельзя указать больше пяти хэш-тегов.';

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

export {
  COUNT_PHOTO, MAX_COUNT_COMMENTS, BEGIN_INT_FOR_CALC_NUMBER_AVATAR, END_INT_FOR_CALC_NUMBER_AVATAR,
  BEGIN_INT_FOR_CALC_COUNT_LIKES, END_INT_FOR_CALC_COUNT_LIKES, DESCRIPTIONS_FOR_PHOTO, NAMES_AUTHOR, MESSAGES, TAG_BODY,
  SPACE_AS_REGULAR_EXPRESSION, HASHTAG_AS_REGULAR_EXPRESSION, MAX_COUNT_HASHTAGS, LENGTH_COMMENT, OUTPUT_PRISTINE_MESSAGE_HASHTAGS
};
