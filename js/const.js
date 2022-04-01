const VIEW_COUNT_COMMENTS = 5;
const SPACE_AS_REGULAR_EXPRESSION = /\s/;
const HASHTAG_AS_REGULAR_EXPRESSION = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const MAX_COUNT_HASHTAGS = 5;
const LENGTH_COMMENT = 140;
const OUTPUT_PRISTINE_MESSAGE_HASHTAGS = 'Хэш-тег начинается с символа # (решётка). Хеш-тег не может состоять только из одной решётки. Строка после решётки должна состоять из букв и чисел. Максимальная длина одного хэш-тега 20 символов, включая решётку. Хэш-теги нечувствительны к регистру. Хэш-теги разделяются пробелами. Один и тот же хэш-тег не может быть использован дважды. Нельзя указать больше пяти хэш-тегов.';
const OUTPUT_PRISTINE_MESSAGE_COMMENT = 'Комментарий больше 140 символов.';
const IMAGE_SCALE_STEP = 25;
const IMAGE_SCALE_MIN = 25;
const IMAGE_SCALE_MAX = 100;
const IMAGE_SCALE_DEFAULT = 100;
const BODY_KEKSOGRAM = document.querySelector('body');
const CONTAINER_IMAGES_OTHER_USERS = BODY_KEKSOGRAM.querySelector('.pictures');
const FIELD_UPLOADING_NEW_IMAGE = CONTAINER_IMAGES_OTHER_USERS.querySelector('.img-upload');
const FORM_UPLOAD_PICTURE = FIELD_UPLOADING_NEW_IMAGE.querySelector('.img-upload__form');
const IMAGE_UPLOAD = FIELD_UPLOADING_NEW_IMAGE.querySelector('.img-upload__overlay');
const IMAGE_PREVIEW = IMAGE_UPLOAD.querySelector('.img-upload__preview');
const FULL_SCREEN_IMAGE_DISPLAY = BODY_KEKSOGRAM.querySelector('.big-picture');
const LOADER_COMMENTS = FULL_SCREEN_IMAGE_DISPLAY.querySelector('.comments-loader');
const EFFECT_NONE = 'none';
const INPUT_EFFECT_RADIO = 'input.effects__radio';
const RADIX_DECEMAL = 10;
const ONE_HUNDRED_PRECENT = 100;
const ERROR_SHOW_TIME = 7000;
const RERENDER_DELAY = 500;
const TEN_RANDOM_PICTURES = 10;

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

export {
  BODY_KEKSOGRAM, SPACE_AS_REGULAR_EXPRESSION, HASHTAG_AS_REGULAR_EXPRESSION, MAX_COUNT_HASHTAGS, LENGTH_COMMENT,
  OUTPUT_PRISTINE_MESSAGE_HASHTAGS, VIEW_COUNT_COMMENTS, LOADER_COMMENTS, CONTAINER_IMAGES_OTHER_USERS,
  FIELD_UPLOADING_NEW_IMAGE, FULL_SCREEN_IMAGE_DISPLAY, IMAGE_SCALE_STEP, IMAGE_SCALE_MIN, IMAGE_SCALE_MAX,
  IMAGE_SCALE_DEFAULT, FORM_UPLOAD_PICTURE, IMAGE_UPLOAD, IMAGE_PREVIEW, EFFECTS_SETTINGS, EFFECT_NONE, INPUT_EFFECT_RADIO,
  RADIX_DECEMAL, ONE_HUNDRED_PRECENT, ERROR_SHOW_TIME, OUTPUT_PRISTINE_MESSAGE_COMMENT, RERENDER_DELAY, TEN_RANDOM_PICTURES
};
