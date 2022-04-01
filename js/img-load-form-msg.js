import { BODY_KEKSOGRAM } from './const.js';
import { isEscapeKey } from './util.js';
import { closeFormUploadPicture } from './img-load-form.js';

const onictureLoadErrorEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    BODY_KEKSOGRAM.lastElementChild.remove();
    document.removeEventListener('keydown', onictureLoadErrorEscKeydown);
  }
};

const deletPictureLoadError = (elementSection) => {
  elementSection.addEventListener('click', (evt) => {
    if (evt.target === elementSection || evt.target === elementSection.querySelector('button')) {
      BODY_KEKSOGRAM.removeChild(elementSection);
      document.removeEventListener('keydown', onictureLoadErrorEscKeydown);
    }
  });
};

const showPictureLoad = (templatePictureLoad) => {
  closeFormUploadPicture();
  const pictureloadError = templatePictureLoad.cloneNode(true);
  BODY_KEKSOGRAM.appendChild(pictureloadError);
  deletPictureLoadError(pictureloadError);
  document.addEventListener('keydown', onictureLoadErrorEscKeydown);
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
