// imports
import { getHerb } from '../fetch-utils.js';
import { renderHerbDetail } from '../render-utils.js';

// DOM elements
const herbDetailContainer = document.querySelector('#herb-detail-container');

// events
window.addEventListener('load', async () => {
    // look at URLSearchParams
    const params = new URLSearchParams(window.location.search);
    // get the id number
    const id = params.get('id');
    // call and await the getHerb(id) fetch-utils function
    const herb = await getHerb(id);

    // get detail page render and info from render-utils
    const herbDetailEl = renderHerbDetail(herb);
    // append detail page render to div container in details index
    herbDetailContainer.append(herbDetailEl);
});
