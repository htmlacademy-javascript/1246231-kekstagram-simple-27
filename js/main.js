import { createArrayCards } from './data.js';
import { renderPhotoMiniature } from './rendering-thumbnails.js';
import { PHOTO_CARDS } from './mock/mock-data.js';
import { addEventListenerForModal } from './modal.js';

const picturesData = createArrayCards(PHOTO_CARDS);
renderPhotoMiniature(picturesData);
addEventListenerForModal();
