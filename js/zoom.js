import {
  IMG_SCALE_STEP, IMG_SCALE_MAX, IMG_SCALE_MIN, IMG_UPLOAD_OVERLAY_ELEMENT, IMG_UPLOAD_PREVIEW_ELEMENT,
  RADIX_DECEMAL, ONE_HUNDRED_PRECENT
} from './const.js';

const imgScaleElement = IMG_UPLOAD_OVERLAY_ELEMENT.querySelector('.img-upload__scale');
const scaleSmallerElement = imgScaleElement.querySelector('.scale__control--smaller');
const scaleBiggerElement = imgScaleElement.querySelector('.scale__control--bigger');
const scaleValueElement = imgScaleElement.querySelector('.scale__control--value');
const imagePreviewElement = IMG_UPLOAD_PREVIEW_ELEMENT.querySelector('img');

const transformScale = (scale) => {
  scaleValueElement.value = `${scale}%`;
  imagePreviewElement.style.transform = `scale(${scale / ONE_HUNDRED_PRECENT})`;
};

const scaleValueInt = () => parseInt(scaleValueElement.value, RADIX_DECEMAL);

const onScaleSmaller = () => {
  let scaleInt = scaleValueInt();
  if (!(scaleInt <= IMG_SCALE_MIN)) {
    scaleInt -= IMG_SCALE_STEP;
    transformScale(scaleInt);
  }
};

const onScaleBigger = () => {
  let scaleInt = scaleValueInt();
  if (!(scaleInt >= IMG_SCALE_MAX)) {
    scaleInt += IMG_SCALE_STEP;
    transformScale(scaleInt);
  }
};

const addZoom = () => {
  scaleSmallerElement.addEventListener('click', onScaleSmaller);
  scaleBiggerElement.addEventListener('click', onScaleBigger);
};

const removeZoom = () => {
  scaleSmallerElement.removeEventListener('click', onScaleSmaller);
  scaleBiggerElement.removeEventListener('click', onScaleBigger);
};

export { addZoom, removeZoom, transformScale };
