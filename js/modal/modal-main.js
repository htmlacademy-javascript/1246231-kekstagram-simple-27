import { isEscapeKey } from '../util.js';
import { resetEffects } from './effects-preview.js';
import { resetScale } from './resize-preview.js';
import { pristine } from './../form/validate-form.js';

const modalForm = document.querySelector('.img-upload__form');
const modalUpload = document.querySelector('#upload-file');
const modalUploadClose = document.querySelector('#upload-cancel');
const modalUploadBody = document.querySelector('.img-upload__overlay');
const modalBackground = document.querySelector('body');

/**
 * функция, для октрытия модального окна
 */
const openModal = () => {
  modalUploadBody.classList.remove('hidden');
  modalBackground.classList.toggle('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
};

/**
 * функция, для закрытия модального окна
 * Функция объявлена декларативно для hoisting-а
 */
const closeModal = () => {
  modalUploadBody.classList.add('hidden');
  modalBackground.classList.toggle('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
  resetEffects();
  resetScale();
  modalForm.reset();
  pristine.reset();
};

/**
 * Фукнция, обработчик для открытия модального окна
 */
const onOpenModal = () => {
  openModal();
};

/**
 * Фукнция, обработчик для закрытия модального окна
 */
const onCloseModal = () => {
  closeModal();
};

/**
 * Фукнция, для закрытия модального окна при нажатие клавиши  Esсape
 */
function onModalEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    if (document.querySelector('.error') === null) {
      evt.preventDefault();
      closeModal();
    }
  }
}

/**
 * Обработчики
*/
const addEventListenerModal = () => {
  modalUpload.addEventListener('change', onOpenModal);
  modalUploadClose.addEventListener('click', onCloseModal);
};

addEventListenerModal();

export {
  closeModal
};
