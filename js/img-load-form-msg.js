import { BODY_ELEMENT } from './const.js';
import { isEscapeKey } from './util.js';
import { closeFormUploadPicture } from './img-load-form.js';

const onPictureLoadErrorEscKeydown = (msgTemplate) => function (evt) {
  if (isEscapeKey(evt)) {
    msgTemplate.remove();
    document.removeEventListener('keydown', onPictureLoadErrorEscKeydown);
  }
};

const deletePictureLoadError = (elementSection) => {
  elementSection.addEventListener('click', (evt) => {
    if (evt.target === elementSection || evt.target === elementSection.querySelector('button')) {
      BODY_ELEMENT.removeChild(elementSection);
      document.removeEventListener('keydown', onPictureLoadErrorEscKeydown);
    }
  });
};

const showPictureLoad = (templatePictureLoad) => {
  closeFormUploadPicture();
  const msgPictureload = templatePictureLoad.cloneNode(true);
  BODY_ELEMENT.appendChild(msgPictureload);
  deletePictureLoadError(msgPictureload);
  document.addEventListener('keydown', onPictureLoadErrorEscKeydown(msgPictureload));
};

const showPictureLoadError = () => {
  const templatePictureLoadError = document.querySelector('#error').content.querySelector('.error');
  showPictureLoad(templatePictureLoadError);
};

const showPictureLoadSuccess = () => {
  const templatePictureLoadSuccess = document.querySelector('#success').content.querySelector('.success');
  showPictureLoad(templatePictureLoadSuccess);
};

export { showPictureLoadError, showPictureLoadSuccess };
