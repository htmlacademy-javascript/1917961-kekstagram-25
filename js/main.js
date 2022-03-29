import './upload-image.js';
import {previewImages} from './previewing.js';
//import './previewing.js';

fetch('https://25.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);
    previewImages(data);
  });
