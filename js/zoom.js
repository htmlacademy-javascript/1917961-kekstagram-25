import { IMAGE_SCALE_STEP, IMAGE_SCALE_MAX, IMAGE_SCALE_MIN, IMAGE_UPLOAD, IMAGE_PREVIEW  } from './const.js';

const imgScale = IMAGE_UPLOAD.querySelector('.img-upload__scale');
const scaleSmaller = imgScale.querySelector('.scale__control--smaller');
const scaleBigger = imgScale.querySelector('.scale__control--bigger');
const scaleValue = imgScale.querySelector('.scale__control--value');
const imagePreview = IMAGE_PREVIEW.querySelector('img');

const transformScale = (scale) => {
  scaleValue.value = `${scale}%`;
  imagePreview.style.transform = `scale(${scale / 100})`;
};

const scaleValueInt = () => parseInt(scaleValue.value, 10);

const onScaleSmaller = () => {
  let scaleInt = scaleValueInt();
  if (!(scaleInt <= IMAGE_SCALE_MIN)) {
    transformScale(scaleInt -= IMAGE_SCALE_STEP);
  }
};

const onScaleBigger = () => {
  let scaleInt = scaleValueInt();
  if (!(scaleInt >= IMAGE_SCALE_MAX)) {
    transformScale(scaleInt += IMAGE_SCALE_STEP);
  }
};

const addZoom = () => {
  scaleSmaller.addEventListener('click', onScaleSmaller);
  scaleBigger.addEventListener('click', onScaleBigger);
};

const removeZoom = () => {
  scaleSmaller.removeEventListener('click', onScaleSmaller);
  scaleBigger.removeEventListener('click', onScaleBigger);
};

export { addZoom, removeZoom, transformScale };
