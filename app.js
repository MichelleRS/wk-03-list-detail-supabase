/* Imports */

import { getAllHerbs } from './fetch-utils.js';
import { renderHerbCard } from './render-utils.js';

/* Get DOM Elements */
const herbsListContainer = document.querySelector('#herbs-list-container');

/* State */

/* Events */
window.addEventListener('load', async () => {
    // get all herbs
    const herbs = await getAllHerbs();

    for (let herb of herbs) {
        const herbEl = renderHerbCard(herb);

        herbsListContainer.append(herbEl);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
