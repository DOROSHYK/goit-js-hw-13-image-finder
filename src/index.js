import './style.css';
import fetchImage from './js/fetchImg';
import imageCard from './templates/imageCard.hbs';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { defaults, error } from '@pnotify/core';

const refs = {
    form: document.querySelector('#search-form'),

}