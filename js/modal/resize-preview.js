const VALUE_SETTINGS = {
  SCALE_MIN: 25,
  SCALE_MAX: 100,
  SCALE_STEP: 25,
  SCALE_DEFAULT: 100
};

const decreaseButton = document.querySelector('.scale__control--smaller');
const increaseButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imageUploadPreview = document.querySelector('.img-upload__preview img');

/**
 * Функция, передающая в инпут значение скейла
 * @param {Number} value - значение в процентах для скейла
 */
const scalePreview = (value = VALUE_SETTINGS.SCALE_DEFAULT) => {
  scaleValue.value = `${value}%`;
  imageUploadPreview.style.transform = `scale(${value / 100})`;
};

/**
 * Функция, уменьшающая размер превью загружаемого изображения
 */
const onDecreaseButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue - VALUE_SETTINGS.SCALE_STEP;
  if (newValue < VALUE_SETTINGS.SCALE_MIN) {
    newValue = VALUE_SETTINGS.SCALE_MIN;
  }
  scalePreview(newValue);
};

/**
 * Функция, увеличивающая размер превью загружаемого изображения
 */
const onIncreaseButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue + VALUE_SETTINGS.SCALE_STEP;
  if (newValue > VALUE_SETTINGS.SCALE_MAX) {
    newValue = VALUE_SETTINGS.SCALE_MAX;
  }
  scalePreview(newValue);
};

const resetScale = () => {
  scalePreview();
};

/**
 * Обработчики
*/
const addEventListenerForResize = () => {
  decreaseButton.addEventListener('click', onDecreaseButtonClick);
  increaseButton.addEventListener('click', onIncreaseButtonClick);
};
addEventListenerForResize();

export {
  addEventListenerForResize,
  resetScale
};
