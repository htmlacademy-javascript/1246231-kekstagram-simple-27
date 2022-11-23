import { PHOTO_DESCRIPTIONS } from './mock/mock-data.js';

/**
 * Функция, которая принимает два случайных целых числа которые создают диапазон от - до
 * И возвращает случайное целое число из этого диапазона.
 * @param {number} firstNumber - первое целое число.
 * @param {number} secondNumber - второе целое число.
 * @returns {number}
 */
const getRandomPositiveInteger = (firstNumber, secondNumber) => {
  // Если переданы отрицительные числа, возвращаем NaN
  if (firstNumber < 0 || secondNumber < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(firstNumber, secondNumber));
  const upper = Math.floor(Math.max(firstNumber, secondNumber));
  const result = Math.random() * (upper - lower + 1) + lower;
  // Округляем полученный результат
  return Math.floor(result);
};

/**
 * Функция, для проверки максимальной длины строки.
 * @param {string} string - принимает строку, длину которой превращает в число.
 * @param {number} length - принимает максимально допустимое число для строки.
 * @returns {boolean}
 */
const checkStringLength = (string, length) => string.length <= length;

/**
 * Функция, для получения случайного описания к фотографии.
 * Функция генирирует случаное число из диапазона от 0 до последнего элемента массива с описинями.
 * @returns
 */
const getDescription = () => getRandomPositiveInteger(0, PHOTO_DESCRIPTIONS.length - 1);

/**
 * Функция, проверки нажатия клавиши эскейп
 * @param {*} evt
 * @returns {boolean}
 */
const isEscapeKey = (evt) => evt.key === 'Escape';

/**
 * Функция, проверки нажатия клавиши энтер
 * @param {*} evt
 * @returns {boolean}
 */
const isEnterKey = (evt) => evt.key === 'Enter';

export { getRandomPositiveInteger, checkStringLength, getDescription, isEscapeKey, isEnterKey };
