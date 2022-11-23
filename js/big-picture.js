import { picturesData } from './main.js';
import './rendering-thumbnails.js';

const bigPicture = document.querySelector('#big-picture');
const bigPictureImg = document.querySelector('.big-picture__img');

const searchPhotosUrl = [];
const createBigPhotosUrl = [];

for (let i = 0; i < picturesData.length; i++) {
  bigPictureImg.querySelector('img').src = picturesData[i].url;

  searchPhotosUrl.push(picturesData[i].url);
  createBigPhotosUrl.push(bigPictureImg.querySelector('img').src);
};

const onOpenBigPicture = () => {
  bigPicture.classList.remove('hidden');
};

export {onOpenBigPicture};
