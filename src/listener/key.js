    import { removeTransition } from '../handler/removetransition.js';
    // addition to an event listener to each of the element to each of the key.
    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));