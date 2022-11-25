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

const modalForm = document.querySelector('.img-upload__form');
const imagePreviewUpload = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');

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

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  activeEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  udpateSlider();
};

const onSliderUpdate = () => {
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

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

/**
 * Обработчики
*/
const addEventListenerForEffects = () => {
  modalForm.addEventListener('change', onFormChange);
  sliderElement.noUiSlider.on('update', onSliderUpdate);
};
addEventListenerForEffects();

export {
  addEventListenerForEffects,
  resetEffects
};
