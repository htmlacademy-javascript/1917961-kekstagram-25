import { isValidForm, prepareStringHashtags } from './img-load-form-valid.js';
import { FORM_UPLOAD_PICTURE } from './const.js';


const createLoader = (onSuccess, onError) => () => {
  fetch('https://25.javascript.pages.academy/kekstagram/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onError();
    });
};

const setPictureFormSubmit = (onSuccess, onError) => {
  FORM_UPLOAD_PICTURE.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (isValidForm) {
      const formData = new FormData(evt.target);
      formData.set('hashtags', prepareStringHashtags(formData.get('hashtags')));
      fetch(
        'https://25.javascript.pages.academy/kekstagram',
        {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => {
          if (response.ok) {
            onSuccess();
          } else {
            onError();
          }
        })
        .catch(() => {
          onError();
        });
    }
  });
};


export { createLoader, setPictureFormSubmit };

