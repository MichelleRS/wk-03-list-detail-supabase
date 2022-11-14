# Herbal Directory

## Project Planning

![wireframe](./assets/wireframe.jpeg)

### HTML

-   `header > h1 `
-   `main > section.info > ul #herbs-container`
    -   use empty `ul` for rendered herb cards rendered as `li`

### Events

-   on home page load:
    -   fetch all items from Supabase
    -   display all items (loop, render, append to container)
-   on detail page load:
    -   fetch single item from Supabase (by id)
    -   render to page based on item info
    -   use URLSearchParams to get item id

### Functions

-   fetch-utils:
    -   getAllHerbs, getHerb
-   render-utils:
    -   renderHerbCard, renderHerbDetail

## Workflow

### Slice 1 - HTML

-   Build HTML
-   Get DOM elements

### Slice 2 - Get info from Supabase

-   index.html > script tag BEFORE app.js
-   URL and Key in fetch
-   Make fetch-utils.js
    -   const URL
    -   const key
    -   create client
    -   async/await getAllHerbs()
-   In app.js:
    -   addEventListener to getAllHerbs on page load

_... more slices to be added_
