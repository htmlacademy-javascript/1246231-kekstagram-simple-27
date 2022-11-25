import { sendData } from './api.js';
import { showSuccessPopUp, showErrorPopUp } from './data-alert.js';

const COMMENT_SETTINGS = {
  MIN_LENGTH: 20,
  MAX_LENGTH: 140
};

const uploadForm = document.querySelector('.img-upload__form');
const uploadFormButton = document.querySelector('.img-upload__submit');
const descriptionElement = uploadForm.querySelector('.text__description');

/**
 * Функция, для блокировки кнопки отправки формы
 */
const blockUploadBytton = () => {
  uploadFormButton.disabled = true;
  uploadFormButton.textContent = 'Публикация....';
};

/**
 * Функция, для разблакировки кнопки отправки формы
 */
const unBlockUploadBytton = () => {
  uploadFormButton.disabled = false;
  uploadFormButton.textContent = 'Опубликовать';
};

/**
 * Инициализация pristine
 */
const pristine = new Pristine(uploadForm, {
  classTo: 'text',
  errorTextParent: 'text',
  errorTextTag: 'span',
  errorTextClass: 'text__description--error',
});

/**
 * Функция, для проверки длины комментария
 */
const validationComment = (value) => value.length >= COMMENT_SETTINGS.MIN_LENGTH && value.length <= COMMENT_SETTINGS.MAX_LENGTH;

/**
 * Валидация строки
 */
pristine.addValidator(
  descriptionElement,
  validationComment
);

/**
 * Функция, для отправки данных на сервер
 */
const setUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockUploadBytton();
      sendData(
        () => {
          onSuccess();
          showSuccessPopUp();
          unBlockUploadBytton();
        },
        () => {
          showErrorPopUp();
          unBlockUploadBytton();
        },
        new FormData(evt.target)
      );
    }
  });
};

export {
  setUserFormSubmit
};
