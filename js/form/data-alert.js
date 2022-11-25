import { isEscapeKey } from './../util.js';

const successMessageElement = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorMessageElement = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const successButtonElement = successMessageElement.querySelector('.success__button');
const errorButtonElement = errorMessageElement.querySelector('.error__button');

let typeMessage;

/**
 * Фукнция, для закрытия поп-апа при нажатие клавиши  Esсape
 */
const onErrorSussessPopUpEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    onCloseErrorSuccessPopUp();
  }
};

/**
 * Фукнция, для закрытия поп-апа при клике мышки
 */
const onErrorSuccessPopupClose = (evt) => {
  if (evt.target === typeMessage) {
    onCloseErrorSuccessPopUp();
  }
};

/**
 * Фукнция, обработчик для закрытия поп-апа
 */
function onCloseErrorSuccessPopUp() {
  typeMessage.remove();
  document.removeEventListener('keydown', onErrorSussessPopUpEscKeydown);
  document.removeEventListener('click',onErrorSuccessPopupClose);
}

/**
 * Фукнция, показывающая поп-ап при успешной загрузки фото
 */
const showSuccessPopUp = () => {
  typeMessage = successMessageElement;
  document.body.append(successMessageElement);
  successButtonElement.addEventListener('click', onCloseErrorSuccessPopUp);
  document.addEventListener('keydown', onErrorSussessPopUpEscKeydown);
  document.addEventListener('click', onErrorSuccessPopupClose);
};

/**
 * Фукнция, показывающая поп-ап при неудачной загрузки фото
 */
const showErrorPopUp = () => {
  typeMessage = errorMessageElement;
  document.body.append(errorMessageElement);
  errorButtonElement.addEventListener('click', onCloseErrorSuccessPopUp);
  document.addEventListener('keydown', onErrorSussessPopUpEscKeydown);
  document.addEventListener('click', onErrorSuccessPopupClose);
};

export {
  showSuccessPopUp,
  showErrorPopUp
};
