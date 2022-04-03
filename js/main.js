import './img-load-form-valid.js';
import { createLoader, setPictureFormSubmit } from './api.js';
import { makePreviewPictures, picturePreviewError } from './previewing.js';
import { showPictureLoadError, showPictureLoadSuccess } from './img-load-form-msg.js';
import { onFilterDiscussed, onFilterRandom, onFilterDefault } from './filters.js';
import { debounce } from './util.js';
import { RERENDER_DELAY } from './const.js';

const uploadPreviews = createLoader((data) => {
  makePreviewPictures(data);
  onFilterDefault(debounce(makePreviewPictures, RERENDER_DELAY), data);
  onFilterRandom(debounce(makePreviewPictures, RERENDER_DELAY), data);
  onFilterDiscussed(debounce(makePreviewPictures, RERENDER_DELAY), data);
}, picturePreviewError);
uploadPreviews();

setPictureFormSubmit(showPictureLoadSuccess, showPictureLoadError);
