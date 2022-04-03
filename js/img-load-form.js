import { BODY_ELEMENT, IMG_SCALE_DEFAULT, IMG_FORM_UPLOAD_ELEMENT, TYPES_FILES } from './const.js';
import { isEscapeKey } from './util.js';
import { addZoom, removeZoom, transformScale } from './zoom.js';
import { addEffect, removeEffect } from './effect.js';
import { onValidatorForm, cleanOffHashtagsAndComment } from './img-load-form-valid.js';

const visibleFormUploadPictureElment = IMG_FORM_UPLOAD_ELEMENT.querySelector('.img-upload__overlay');
const uploadPictureElement = IMG_FORM_UPLOAD_ELEMENT.querySelector('#upload-file');
const buttonPictureUploadCancelElement = visibleFormUploadPictureElment.querySelector('.img-upload__cancel');
const submitButtonElement = IMG_FORM_UPLOAD_ELEMENT.querySelector('.img-upload__submit');
const imgUploadPreviewElement = IMG_FORM_UPLOAD_ELEMENT.querySelector('.img-upload__preview img');


const onButtonCancelPictureUpload = () => {
  buttonPictureUploadCancelElement.addEventListener('click', () => {
    closeFormUploadPicture();
  });
};

const onFormUploadPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormUploadPicture();
  }
};

const openFormUploadPicture = () => {
  visibleFormUploadPictureElment.classList.remove('hidden');
  document.addEventListener('keydown', onFormUploadPictureEscKeydown);
  onButtonCancelPictureUpload();
  onValidatorForm();
  addZoom();
  addEffect();
  BODY_ELEMENT.classList.add('modal-open');
};

function closeFormUploadPicture() {
  visibleFormUploadPictureElment.classList.add('hidden');
  BODY_ELEMENT.classList.remove('modal-open');
  uploadPictureElement.value = '';
  document.removeEventListener('keydown', onFormUploadPictureEscKeydown);
  transformScale(IMG_SCALE_DEFAULT);
  cleanOffHashtagsAndComment();
  removeZoom();
  removeEffect();
}

const onUploadPicture = () => {
  uploadPictureElement.addEventListener('change', () => {
    const file = uploadPictureElement.files[0];
    const fileName = file.name.toLowerCase();
    const matches = TYPES_FILES.some((it) => fileName.endsWith(it));
    if (matches) {
      imgUploadPreviewElement.src = URL.createObjectURL(file);
    }
    openFormUploadPicture();
  });
};

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = 'Опубликовать';
};

export {
  openFormUploadPicture, closeFormUploadPicture, onFormUploadPictureEscKeydown, onUploadPicture,
  blockSubmitButton, unblockSubmitButton
};
