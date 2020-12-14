# Drum Kit: Development Strategy

Building this site one step at a time

---

## 0. README

- Write the `README.md`, including the final screen shot
- Include a License
- Include this `development.md` file

---

## 1. Setup

- Create boilerplate index.html

---

## 2. User Story: Display Keyboard

**A user can see which sound each key will make**

### DOM:

- Create one element per key in the drumset, with child elements to display the key name and sound it will make
- Create a container for all of the key elements

---

## 3. User Story: Play Sounds

**A user can press the displayed keys and hear the sound**

### Assets:

- Create a `/sounds` folder containing all of the .wav files

### DOM:

- Create audio tags with paths to the sound assets
- Create script tags for the Handler & Listener
- Create `data-key` attributes to link the key elements with the audio elements

### Listeners:

- Attach a `keyup` event to the window object.

### Handlers:

- Create a `playSound` event handler that checks to see if the pressed key has a linked audio sound. If it does, play the sound!

---

## 4. User Story: See Beauty

**A user can use a well-styled page**

### Assets:

- Add the background image to `/images`

### Styles:

- Require and apply the background image
- Create styles for the keys

### DOM:

- Create a link tag to require the styles
- Add classes to styled elements

---

## 5. User Story: Animate Keys

**A user can know which keys are currently pressed**

### Styles:

- Create a class for keys that are currently pressed

### Handlers:

- Create a `removeTransition` handler to remove the `.playing` class when a key is released
- Update the `playHandler` to add the `.playing` class when a key is pressed

### Listeners:

- Add a `transitionend` listener to each element with the `.key` class, with the `removeTransition` handler.

- add a `window` file to the listener to import the sound from `play-sound ` file.

### The Init and user file

- create an `Init file` in the `source/src folder` to import all the files at the same file.

- add the `user file` which will contain the all the code of the `Handler and listener`.
