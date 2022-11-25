import { renderPhotoMiniature } from './rendering-thumbnails.js';
import { getData } from './form/api.js';
import { setUserFormSubmit } from './form/validate-form.js';
import { closeModal } from './modal/modal-main.js';

getData((picturesData) => {
  renderPhotoMiniature(picturesData);
});

setUserFormSubmit(closeModal);
