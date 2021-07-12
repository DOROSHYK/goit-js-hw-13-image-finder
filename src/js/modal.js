

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';

export default function openBigImg(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  basicLightbox
    .create(`<img class="lightbox__image" src=${event.target.dataset.source} alt="">`)
    .show();
}