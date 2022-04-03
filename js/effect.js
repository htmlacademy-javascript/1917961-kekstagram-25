import {
  IMG_FORM_UPLOAD_ELEMENT, IMG_UPLOAD_PREVIEW_ELEMENT, EFFECTS_SETTINGS, EFFECT_NONE, INPUT_EFFECT_RADIO,
  IMG_UPLOAD_OVERLAY_ELEMENT
} from './const.js';

const imagePreviewElement = IMG_UPLOAD_PREVIEW_ELEMENT.querySelector('img');
const sliderElement = IMG_UPLOAD_OVERLAY_ELEMENT.querySelector('.effect-level__slider');
const effectLevelValueElement = IMG_UPLOAD_OVERLAY_ELEMENT.querySelector('.effect-level__value');
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
  effectLevelValueElement.value = sliderElement.noUiSlider.get();
  if (imagePreviewElement.className) {
    imagePreviewElement.style.filter = `${EFFECTS_SETTINGS[radioButton.value].filter}(${effectLevelValueElement.value}${EFFECTS_SETTINGS[radioButton.value].unit})`;
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
    imagePreviewElement.className = EFFECTS_SETTINGS[evt.target.value].class;
    if (!(evt.target.value === EFFECT_NONE)) {
      sliderElement.style.visibility = 'visible';
      updateEffect(EFFECTS_SETTINGS[evt.target.value]);
    } else {
      sliderElement.style.visibility = 'hidden';
      imagePreviewElement.style.filter = EFFECTS_SETTINGS[EFFECT_NONE].filter;
    }
  }
};

const addEffect = () => {
  IMG_FORM_UPLOAD_ELEMENT.addEventListener('change', onEffectChange);
  sliderElement.style.visibility = 'hidden';
};

const removeEffect = () => {
  IMG_FORM_UPLOAD_ELEMENT.removeEventListener('change', onEffectChange);
  radioButton = '';
  imagePreviewElement.style.filter = EFFECTS_SETTINGS[EFFECT_NONE].filter;
  imagePreviewElement.className = EFFECTS_SETTINGS[EFFECT_NONE].class;
};

export { addEffect, removeEffect };
