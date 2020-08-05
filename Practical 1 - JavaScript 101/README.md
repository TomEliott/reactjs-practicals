# TP1 - Basics

In this TP you will build a small library of actions for handling a Pictures collection and then hook them into the app to make it functionnal.

# Pre-requisites:

As soon as you have all of this installed, you can run the code from the application
at any moment by running `npm run start` or `yarn start` (hint: look at `package.json` to see how that works)

You can choose to rush in the next steps straight away, but if you have not done it yet,
I strongly recommand that you take the time to look at all the files in the `src` directory,
and then read all the instructions.

Also, if you did not run `git init` yet, now is a good time to

# Level 0 - Shape model

In the file `./src/fixture.js`, you'll see an unassigned const named `pictures`,
you will use it to store you "default" pictures (a.k.a: the ones that are part of the fist state of the application).

You must have at least five of them and they should all have the same "shape".

Passing this const to `JSON.parse(JSON.stringify(pictures))` should raise no errors.

hint: use [Lorem Picsum](http://picsum.photos/) to get random pictures from an URL;

For the following levels, always look at the FIXMEs in `./src/index.js`.

# Level 1 - List

see FIXME at `./actions/list.js`;

# Level 2 - Get

see FIXME at `./actions/get.js`;

# Level 3 - Add

see FIXME at `./actions/add.js`;

# Level 4 - Remove

see FIXME at `./actions/remove.js`;

# Level 5 - Update

## 5.1

see FIXME at `./actions/update.js`;

## 5.2

Add an "update" button to the picture-item-template.
this should open a modal containing the various inputs needed for your update,
and a button to trigger the update and close the modal.

# Bonus (for future ninjas)

Write unit tests using [Jest](https://facebook.github.io/jest/) for each and every functions in the `actions` directory.
All tests must be written next to the original code in a file with the same name but a `.test.js` extension (eg: `src/toto.js` will have its tests written in `src/toto.test.js`).
