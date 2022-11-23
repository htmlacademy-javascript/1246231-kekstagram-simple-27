const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

/**
 * Функция, наполняющая миниатюры данными из массива.
 * @param {Array} picturesData - данные списка фотографий.
 */
const renderingPhotoMiniature = (picturesData) => {
  const userPhotoFragment = document.createDocumentFragment();
  picturesData.forEach(({ url, comment, likes }) => {
    const userPhoto = pictureTemplate.cloneNode(true);
    userPhoto.querySelector('.picture__img').src = url;
    userPhoto.querySelector('.picture__comments').textContent = comment;
    userPhoto.querySelector('.picture__likes').textContent = likes;
    userPhotoFragment.appendChild(userPhoto);
  });
  pictures.appendChild(userPhotoFragment);
};

export { renderingPhotoMiniature };
