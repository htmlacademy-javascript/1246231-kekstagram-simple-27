import { createArrayCards } from './data.js';
import { renderingPhotoMiniature } from './rendering-thumbnails.js';
import { PHOTO_CARDS } from './mock/mock-data.js';
import { modalHadlers } from './modal.js';

const picturesData = createArrayCards(PHOTO_CARDS);
renderingPhotoMiniature(picturesData);
modalHadlers();
