const COUNT_PHOTO = 25;
const MAX_COUNT_COMMENTS = 15;
const VIEW_COUNT_COMMENTS = 5;
const BEGIN_INT_FOR_CALC_NUMBER_AVATAR = 1;
const END_INT_FOR_CALC_NUMBER_AVATAR = 6;
const BEGIN_INT_FOR_CALC_COUNT_LIKES = 15;
const END_INT_FOR_CALC_COUNT_LIKES = 200;
const SPACE_AS_REGULAR_EXPRESSION = /\s/;
const HASHTAG_AS_REGULAR_EXPRESSION = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const MAX_COUNT_HASHTAGS = 5;
const LENGTH_COMMENT = 140;
const OUTPUT_PRISTINE_MESSAGE_HASHTAGS = 'Хэш-тег начинается с символа # (решётка). Хеш-тег не может состоять только из одной решётки. Строка после решётки должна состоять из букв и чисел. Максимальная длина одного хэш-тега 20 символов, включая решётку. Хэш-теги нечувствительны к регистру. Хэш-теги разделяются пробелами. Один и тот же хэш-тег не может быть использован дважды. Нельзя указать больше пяти хэш-тегов.';
const IMAGE_SCALE_STEP = 25;
const IMAGE_SCALE_MIN = 25;
const IMAGE_SCALE_MAX = 100;
const IMAGE_SCALE_DEFAULT = 100;
const TAG_BODY = document.querySelector('body');
const CONTAINER_IMAGES_OTHER_USERS = TAG_BODY.querySelector('.pictures');
const FIELD_UPLOADING_NEW_IMAGE = CONTAINER_IMAGES_OTHER_USERS.querySelector('.img-upload');
const FORM_UPLOAD_PICTURE = FIELD_UPLOADING_NEW_IMAGE.querySelector('.img-upload__form');
const IMAGE_UPLOAD = FIELD_UPLOADING_NEW_IMAGE.querySelector('.img-upload__overlay');
const IMAGE_PREVIEW = IMAGE_UPLOAD.querySelector('.img-upload__preview');
const FULL_SCREEN_IMAGE_DISPLAY = TAG_BODY.querySelector('.big-picture');
const LOADER_COMMENTS = FULL_SCREEN_IMAGE_DISPLAY.querySelector('.comments-loader');

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

const EFFECTS_SETTINGS = {
  'none': {
    class: '',
    filter: ''
  },
  'chrome': {
    min: 0,
    max: 1,
    step: 0.1,
    start: 1,
    class: 'effects__preview--chrome',
    filter: 'grayscale',
    unit: ''
  },
  'sepia': {
    min: 0,
    max: 1,
    step: 0.1,
    start: 1,
    class: 'effects__preview--sepia',
    filter: 'sepia',
    unit: ''
  },
  'marvin': {
    min: 0,
    max: 100,
    step: 1,
    start: 100,
    class: 'effects__preview--marvin',
    filter: 'invert',
    unit: '%'
  },
  'phobos': {
    min: 0,
    max: 3,
    step: 0.1,
    start: 3,
    class: 'effects__preview--phobos',
    filter: 'blur',
    unit: 'px'
  },
  'heat': {
    min: 1,
    max: 3,
    step: 0.1,
    start: 3,
    class: 'effects__preview--heat',
    filter: ' brightness',
    unit: ''
  }
};

const EFFECT_NONE = 'none';
const INPUT_EFFECT_RADIO = 'input.effects__radio';
const RADIX_DECEMAL = 10;
const ONE_HUNDRED_PRECENT = 100;

export {
  COUNT_PHOTO, MAX_COUNT_COMMENTS, BEGIN_INT_FOR_CALC_NUMBER_AVATAR, END_INT_FOR_CALC_NUMBER_AVATAR,
  BEGIN_INT_FOR_CALC_COUNT_LIKES, END_INT_FOR_CALC_COUNT_LIKES, DESCRIPTIONS_FOR_PHOTO, NAMES_AUTHOR, MESSAGES, TAG_BODY,
  SPACE_AS_REGULAR_EXPRESSION, HASHTAG_AS_REGULAR_EXPRESSION, MAX_COUNT_HASHTAGS, LENGTH_COMMENT,
  OUTPUT_PRISTINE_MESSAGE_HASHTAGS, VIEW_COUNT_COMMENTS, LOADER_COMMENTS, CONTAINER_IMAGES_OTHER_USERS,
  FIELD_UPLOADING_NEW_IMAGE, FULL_SCREEN_IMAGE_DISPLAY, IMAGE_SCALE_STEP, IMAGE_SCALE_MIN, IMAGE_SCALE_MAX,
  IMAGE_SCALE_DEFAULT, FORM_UPLOAD_PICTURE, IMAGE_UPLOAD, IMAGE_PREVIEW, EFFECTS_SETTINGS, EFFECT_NONE, INPUT_EFFECT_RADIO,
  RADIX_DECEMAL, ONE_HUNDRED_PRECENT
};
