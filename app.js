/* Imports */

import { getAllHerbs } from './fetch-utils.js';

/* Get DOM Elements */
const herbsListContainer = document.querySelector('#herbs-list-container');

/* State */

/* Events */
window.addEventListener('load', async () => {
    const herbs = await getAllHerbs();
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
