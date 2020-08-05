# React Router and Context 101

## Pre-requisites

🚨🚨🚨 READ THE WHOLE SUBJECT BEFORE YOU START 🚨🚨🚨

## EpiNotes

### NotesContext

in `./contexts/NotesContext.js` write a new context to store your tweets.

this module must export a Component named `NotesContextProvider` exposing a NotesContext.
`NotesContextProvider` _must_ use the `useReducer` hook internally (bound its value to the context provider's value).

When using this context, a developer must be able to create, update or delete a note.

bonus: export a custom hook named `useNoteContext` which will expose (return) the nearest context's value.

bonus <3: use a combination of `useEffect` and `localStorage` to keep state in between reloads.

### Routing

Two pages are required:

- `/notes` will show all the notes from your NotesContext
- `/notes/:note_id` will show a specific note from your NotesContext

Bonus: Create a search bar that will allow to redirect to specific notes.

Bonus <3: using a Higher Order Component ( `Component => Component` ), create a password protection system on some notes.

### Bonii

All your bonii must be listed in a comment on the `feedback` pull-request for this repository.

You can add anything you want as a new bonus as long as it does not go against the subjects' rules, a bonus will get you more points if it uses React.Context, ReactRouter or a combination of these two.

## Useful links

[React Router](https://reacttraining.com/react-router/web/guides/quick-start)
[Tailwind CSS](https://tailwindcss.com)
[Tailwind UI's free samples](https://tailwindui.com/preview)
