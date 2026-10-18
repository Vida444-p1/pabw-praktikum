# Worksheet P10 - Asynchronous JavaScript: fetch, Promise, and JSON

## Files

- `js/api.js` owns the data request and exports `fetchNews()`.
- `js/app.js` calls that function, catches failures, and shows loading, success, failure, and empty states.
- `js/dom.js` continues handling the P9 profile, filters, and project form.
- `news.json` is the worksheet's local fallback because external API access is restricted in this environment. Run the folder through a local server so `fetch("./news.json")` can load it.

## Data shape

Each JSON item has `title`, `category`, `summary`, and `author`. The page renders those values as text with `textContent`.

## Data flow

1. The address is stored once in `js/api.js`.
2. `fetchNews()` awaits `fetch`, checks `response.ok`, then reads the body with `response.json()`.
3. The function catches request, status, and JSON errors and rethrows a readable error for `app.js` to show.
4. `app.js` catches errors and displays the result on the page. It clears the list before rendering and handles an empty array separately.
5. A small `JSON.stringify` / `JSON.parse` round trip in `app.js` demonstrates value-to-text and text-to-value directions.

## Checks and evidence

- [ ] Address is in one place and has no access key.
- [ ] `response.ok` is checked before reading JSON.
- [ ] Loading, success, failure, and empty states are shown on the page.
- [ ] A 404 and invalid JSON produce a visible message, not an unhandled Console error.
- [ ] `fetch` appears only in `js/api.js`.
- [ ] Page is opened through a local HTTP server.
- [ ] Capture screenshots for success, failure, empty, and loading states.

| State | Screenshot file | Test note |
| --- | --- | --- |
| Success |  |  |
| Failure |  |  |
| Empty |  |  |
| Loading |  |  |

## Debugging notes

| Symptom | Cause | Fix |
| --- | --- | --- |
|  |  |  |
|  |  |  |
|  |  |  |

## AI disclosure

AI helped draft the API module, page states, rendering changes, and this README. I must review the code, run the page locally, record the response shape/status, and capture real screenshots. Work I completed or changed independently: ______________________________.

## Exit ticket

- Why does `fetch` not reject on HTTP 404?
- Where is `await` allowed?
- Which interface state is easiest to forget, and how does this page show it?
- The most useful code line today and where it is used: