      // this is a handler 
      export function removeTransition(e) {
          if (e.propertyName !== 'transform') return;
          e.target.classList.remove('playing');
      }
      // handler function
      export function playSound(e) {
          const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
          const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
          if (!audio) return;

          key.classList.add('playing');
          audio.currentTime = 0;
          audio.play();
      }
      // addition to an event listener to each of the element to each of the key.
      const keys = Array.from(document.querySelectorAll('.key'));
      keys.forEach(key => key.addEventListener('transitionend', removeTransition));
      // add another listener to the functions
      window.addEventListener('keydown', playSound);