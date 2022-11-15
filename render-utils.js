export function renderHerbCard(herb) {
    // create elements to be rendered
    // const divEl = document.createElement('div');
    const aEl = document.createElement('a');
    const titleEl = document.createElement('p');

    // to div, add class of .herb-card
    aEl.classList.add('herb-card');

    // display title for herb name
    titleEl.textContent = herb.name;

    // add link to detail page
    aEl.href = `./herb/?id=${herb.id}`;

    // append titleEl to divEl
    // divEl.append(titleEl);

    // append divEl to aEl
    aEl.append(titleEl);

    // return divEl
    return aEl;
}

export function renderHerbDetail(herb) {
    // create elements to be rendered
    const divEl = document.createElement('div');
    const nameEl = document.createElement('h2');
    const energeticsEl = document.createElement('p');
    const actionsEl = document.createElement('p');

    // add a style class to div container
    divEl.classList.add('herb-detail');

    // name
    nameEl.textContent = herb.name;
    nameEl.classList.add('name');

    // energetics
    energeticsEl.textContent = `Energetics: ${herb.energetics}`;
    energeticsEl.classList.add('energetics');

    // actions
    actionsEl.textContent = `Actions: ${herb.actions}`;
    actionsEl.classList.add('actions');

    // append all elements to div
    divEl.append(nameEl, energeticsEl, actionsEl);

    // return div
    return divEl;
}
