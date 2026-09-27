// script.js
// Startar bildspelet med Splide

var splide = new Splide('#galleri-splide', {
  type: 'loop',
  perPage: 3,
  gap: '1rem',
  autoplay: true,
  breakpoints: {
    600: {
      perPage: 1
    }
  }
});

splide.mount();