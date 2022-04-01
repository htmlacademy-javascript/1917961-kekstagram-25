import { BODY_KEKSOGRAM, IMAGE_SCALE_DEFAULT, FORM_UPLOAD_PICTURE, FILE_TYPES } from './const.js';
import { isEscapeKey } from './util.js';
import { addZoom, removeZoom, transformScale } from './zoom.js';
import { addEffect, removeEffect } from './effect.js';
import { onValidatorForm, cleanOffHashtagsAndComment } from './img-load-form-valid.js';

const visibleFormUploadPicture = FORM_UPLOAD_PICTURE.querySelector('.img-upload__overlay');
const uploadPicture = FORM_UPLOAD_PICTURE.querySelector('#upload-file');
const buttonPictureUploadCancel = visibleFormUploadPicture.querySelector('.img-upload__cancel');
const submitButton = FORM_UPLOAD_PICTURE.querySelector('.img-upload__submit');
const imgUploadPreview = FORM_UPLOAD_PICTURE.querySelector('.img-upload__preview img');


const onButtonCancelPictureUpload = () => {
  buttonPictureUploadCancel.addEventListener('click', () => {
    closeFormUploadPicture();
  });
};

const onFormUploadPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormUploadPicture();
  }
};

function openFormUploadPicture() {
  visibleFormUploadPicture.classList.remove('hidden');
  document.addEventListener('keydown', onFormUploadPictureEscKeydown);
  onButtonCancelPictureUpload();
  onValidatorForm();
  addZoom();
  addEffect();
  BODY_KEKSOGRAM.classList.add('modal-open');
}

function closeFormUploadPicture() {
  visibleFormUploadPicture.classList.add('hidden');
  BODY_KEKSOGRAM.classList.remove('modal-open');
  uploadPicture.value = '';
  document.removeEventListener('keydown', onFormUploadPictureEscKeydown);
  transformScale(IMAGE_SCALE_DEFAULT);
  cleanOffHashtagsAndComment();
  removeZoom();
  removeEffect();
}

const onUploadPicture = () => {
  uploadPicture.addEventListener('change', () => {
    const file = uploadPicture.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      imgUploadPreview.src = URL.createObjectURL(file);
    }
    openFormUploadPicture();
  });
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

export {
  openFormUploadPicture, closeFormUploadPicture, onFormUploadPictureEscKeydown, onUploadPicture,
  blockSubmitButton, unblockSubmitButton
};
