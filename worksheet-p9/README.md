# Worksheet P9 - DOM, Events, and Interactivity

The Meeting 8 profile page now builds its project list from JavaScript data, filters projects with delegated events, and validates a project form without reloading the page.

## Files and element selectors

| Page area | Selector | Filled/used by |
| --- | --- | --- |
| Profile heading | `#nama-profil`, `#peran-profil` | `dom.js` from `profil` in `app.js` |
| Project list | `#daftar-proyek` | `renderProyek()` |
| Filter button parent | `#filter-proyek` | One delegated click listener |
| Empty-list message | `#empty-projects` | `renderProyek()` |
| Project form | `#project-form` | Submit and live validation listeners |
| Field errors | `#error-<field-id>` | `validasiField()` |

## Separation of responsibilities

- `js/app.js` exports the profile data, project array, and pure formatting functions.
- `js/dom.js` imports those exports and handles selectors, page rendering, events, and form validation.
- Both module scripts are loaded before `</body>` in the order `app.js`, then `dom.js`.
- Project cards are built with `createElement`, `textContent`, and `append`; no user content is inserted with `innerHTML`.
- `renderProyek()` clears the container before drawing and displays an empty-state message when there are no matching projects.

## Check before submission

- [ ] Every selector used by `dom.js` finds an element.
- [ ] The project list is created from the array; repeated filtering does not duplicate cards.
- [ ] One listener on the filter parent handles all category buttons and updates the active state.
- [ ] An empty filter result shows its message.
- [ ] Empty, whitespace-only, and invalid-year fields show a per-field error; valid input clears it.
- [ ] Submitting does not reload the page; the button is enabled only when all fields are valid.
- [ ] Console has no errors when opened through a local server.

## Debugging notes

| Symptom | Cause | Fix |
| --- | --- | --- |
|  |  |  |
|  |  |  |
|  |  |  |

## Required evidence

Save three real browser screenshots in this folder: (1) the silent page with the Event Listeners panel open, (2) after the listener/render fix, and (3) while a filter is working.

| Screenshot | File name | What it shows |
| --- | --- | --- |
| Silent page and Event Listeners |  |  |
| After the fix |  |  |
| Filter working |  |  |

## AI disclosure

AI helped draft the HTML structure, JavaScript module split, event delegation, project form validation, and this README. I must review and understand each line, confirm the project/profile data, run the page locally, record actual debugging observations, and capture the screenshots myself. Work I completed or changed independently: ______________________________.

## Exit ticket and reflection

- Element, selector, and variable holding it:
- Difference between `querySelector` and `querySelectorAll`, and why a NodeList needs conversion before `map`:
- Benefit of one parent listener and where the code shows it:
- What happens if the render container is not cleared:
- Why user input is inserted with `textContent` rather than `innerHTML`:
- The hardest part today:
