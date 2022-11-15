export function renderHerbCard(herb) {
    const divEl = document.createElement('div');
    const aEl = document.createElement('a');
    const titleEl = document.createElement('p');

    // to div, add class of .herb-card
    divEl.classList.add('herb-card');

    // display title for herb name
    titleEl.textContent = herb.name;

    // add link to detail page

    // append titleEl to divEl
    divEl.append(titleEl);

    // append divEl to aEl

    // return divEl
    return divEl;
}
