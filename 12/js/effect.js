import {
  FORM_UPLOAD_PICTURE, IMAGE_PREVIEW, EFFECTS_SETTINGS, EFFECT_NONE, INPUT_EFFECT_RADIO, IMAGE_UPLOAD
} from './const.js';

const imagePreview = IMAGE_PREVIEW.querySelector('img');
const sliderElement = IMAGE_UPLOAD.querySelector('.effect-level__slider');
const effectLevelValue = IMAGE_UPLOAD.querySelector('.effect-level__value');
let radioButton = '';

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    }
  }
});

sliderElement.noUiSlider.on('update', () => {
  effectLevelValue.value = sliderElement.noUiSlider.get();
  if (imagePreview.className) {
    imagePreview.style.filter = `${EFFECTS_SETTINGS[radioButton.value].filter}(${effectLevelValue.value}${EFFECTS_SETTINGS[radioButton.value].unit})`;
  }
});

const updateEffect = (effect) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: effect.min,
      max: effect.max,
    },
    start: effect.start,
    step: effect.step,
  });
};

const onEffectChange = (evt) => {
  if (evt.target.matches(INPUT_EFFECT_RADIO)) {
    radioButton = evt.target;
    imagePreview.className = EFFECTS_SETTINGS[evt.target.value].class;
    if (!(evt.target.value === EFFECT_NONE)) {
      sliderElement.style.visibility = 'visible';
      updateEffect(EFFECTS_SETTINGS[evt.target.value]);
    } else {
      sliderElement.style.visibility = 'hidden';
      imagePreview.style.filter = EFFECTS_SETTINGS[EFFECT_NONE].filter;
    }
  }
};

const addEffect = () => {
  FORM_UPLOAD_PICTURE.addEventListener('change', onEffectChange);
  sliderElement.style.visibility = 'hidden';
};

const removeEffect = () => {
  FORM_UPLOAD_PICTURE.removeEventListener('change', onEffectChange);
  radioButton = '';
  imagePreview.style.filter = EFFECTS_SETTINGS[EFFECT_NONE].filter;
  imagePreview.className = EFFECTS_SETTINGS[EFFECT_NONE].class;
};

export { addEffect, removeEffect };
