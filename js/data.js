import { getRandomPositiveInteger, getDescription } from './until.js';

/**
 * Функция, для создания данных одной фото-карточки.
 * @param {number} indexPhotoCard - фото-карточки.
 * @returns {Object} - возвращаем объект с данными для одной фото-карточки.
 */
const createPhotoCard = function (indexPhotoCard) {
  return {
    id: indexPhotoCard,
    url: `photos/${indexPhotoCard}.jpg`,
    description: [getDescription()],
    likes: getRandomPositiveInteger(15, 200),
    comments: getRandomPositiveInteger(0, 200)
  };
};

/**
 * Функция для создания массива с данными фото-карточек.
 * @param {number} amountCards - число генераций фото-карточек.
 * @returns {Array} arrayPhotoCards  - возращает массив с данными фото-карточек.
 */
const createArrayCards = (amountCards) => {
  const arrayPhotoCards = [];

  for (let i = 1; i <= amountCards; i++) {
    arrayPhotoCards[i] = createPhotoCard(i);
  }

  return arrayPhotoCards;
};

export { createArrayCards };
