import { isEscapeKey, isEnterKey } from './until.js';

const modalForm = document.querySelector('.img-upload__form');
// переименовать
const modalOpen = document.querySelector('#upload-file');
const modalClose = document.querySelector('#upload-cancel');
const modalBody = document.querySelector('.img-upload__overlay');
const modalBackground = document.querySelector('body');

const lowerButton = document.querySelector('.scale__control--smaller');
const boostButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview');

const ValueSettings = {
  SCALE_MIN: 25,
  SCALE_MAX: 100,
  SCALE_STEP: 25,
  SCALE_DEFAULT: 100
};

// открываем модалку
const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const openModal = () => {
  // event.preventDefault();
  modalBody.classList.remove('hidden');
  modalBackground.classList.toggle('modal-open');

  document.addEventListener('keydown', onModalEscKeydown);
};

// закрываем модалку
function closeModal () {
  modalBody.classList.add('hidden');
  modalBackground.classList.toggle('modal-open');

  modalOpen.innerHTML = '';
  document.removeEventListener('keydown', onModalEscKeydown);
}

//
const scaleImage = (value = ValueSettings.SCALE_DEFAULT) => {
  scaleValue.value = `${value}%`;
  imagePreview.style.transform = `scale(${value / 100})`;
};

// Функция, уменьшения размера превью
const onDecreaseButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue - ValueSettings.SCALE_STEP;
  if (newValue < ValueSettings.SCALE_MIN) {
    newValue = ValueSettings.SCALE_MIN;
  }
  scaleImage(newValue);
};

// Функция, уменьшения размера превью
const onIncreaseButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue + ValueSettings.SCALE_STEP;
  if (newValue > ValueSettings.SCALE_MAX) {
    newValue = ValueSettings.SCALE_MAX;
  }
  scaleImage(newValue);
};

//

const imagePreviewUpload = modalForm.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];

const DEFAULT_EFFECT = EFFECTS[0];
let activeEffect = DEFAULT_EFFECT;

const isDefault = () => activeEffect === DEFAULT_EFFECT;

const udpateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: activeEffect.min,
      max: activeEffect.max,
    },
    step: activeEffect.step,
    start: activeEffect.max,
  });

  if (isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

//
const formChangeHandler = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  activeEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  udpateSlider();
};

//
const sliderUpdateHandler = () => {
  imagePreviewUpload.style.filter = '';
  imagePreviewUpload.className = '';
  effectValue.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  imagePreviewUpload.style.filter = `${activeEffect.style}(${sliderValue}${activeEffect.unit})`;
  imagePreviewUpload.classList.add(`effects__preview--${activeEffect.name}`);
  effectValue.value = sliderValue;
};

const resetEffects = () => {
  activeEffect = DEFAULT_EFFECT;
  udpateSlider();
};

// hadlers
const addEventListenerForModal = () => {

  noUiSlider.create(sliderElement, {
    range: {
      min: DEFAULT_EFFECT.min,
      max: DEFAULT_EFFECT.max,
    },
    start: DEFAULT_EFFECT.max,
    step: DEFAULT_EFFECT.step,
    connect: 'lower',
  });

  modalClose.addEventListener('click', () => {
    closeModal();
    //
    scaleImage();
  });

  modalOpen.addEventListener('click', () => {
    openModal();
    //
    resetEffects();
  });

  modalOpen.addEventListener('change', (evt) => {
    if (isEnterKey(evt)) {
      openModal();
      //
      resetEffects();
    }
  });

  lowerButton.addEventListener('click', onDecreaseButtonClick);
  boostButton.addEventListener('click', onIncreaseButtonClick);

  modalForm.addEventListener('change', formChangeHandler);

  sliderElement.noUiSlider.on('update', sliderUpdateHandler);
};

export { addEventListenerForModal };
