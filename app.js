  AOS.init();
  window.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
      window.scrollTo(0, 0);
      history.replaceState(null, null, ' ');
    }
  });