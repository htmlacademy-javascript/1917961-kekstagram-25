import './img-load-form-valid.js';
import { createLoader, setPictureFormSubmit } from './api.js';
import { previewPictures, picturePreviewError } from './previewing.js';
import { onUploadPicture } from './img-load-form.js';
import { showPictureLoadError, showPictureLoadSuccess } from './img-load-form-msg.js';


const uploadPreview = createLoader(previewPictures, picturePreviewError);
setPictureFormSubmit(showPictureLoadSuccess, showPictureLoadError);

uploadPreview();
onUploadPicture();

