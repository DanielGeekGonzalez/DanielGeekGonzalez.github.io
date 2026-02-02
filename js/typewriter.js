document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("typewriter");
  if (!el) return; // only run on pages that have the element

  const text = "Hi, I’m Daniel.";
  const typeDelay = 110;     // ms between each character typed
  const pauseDelay = 1200;  // pause when full text is shown
  const deleteDelay = 45;   // ms between each character deleted

  let i = 0;
  let isDeleting = false;

  function tick() {
    if (!isDeleting) {
      // Typing forward
      el.textContent = text.slice(0, i);
      i++;

      if (i > text.length) {
        // Finished typing, pause, then start deleting
        isDeleting = true;
        setTimeout(tick, pauseDelay);
        return;
      }

      setTimeout(tick, typeDelay);
    } else {
      // Deleting backward
      el.textContent = text.slice(0, i);
      i--;

      if (i < 0) {
        // Finished deleting, restart typing
        isDeleting = false;
        i = 0;
        setTimeout(tick, 400);
        return;
      }

      setTimeout(tick, deleteDelay);
    }
  }
  tick();
});
