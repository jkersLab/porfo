//First row of moving squares
function createTimeline() {
  return anime.timeline({
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutQuad',
  });
}
const options = {
  grid: [16, 2],
  from: 'center'
};

createTimeline()
  .add({
    targets: '.square',
    scale: anime.stagger([1, 0.1], options),
    duration: 1100,
    delay: anime.stagger(100, options),
});

//ease in scrolling
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      anime({
        targets: entry.target,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 2500,
        easing: 'easeOutExpo'
      });
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});

//second row of squares
const isPortrait = window.matchMedia("(orientation: portrait)").matches;
anime.timeline({
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine',
})
.add({
  targets: '.mod-square',
  translateY: isPortrait ? 0 : [-20, 20, -20],
  translateX: isPortrait ? [-20, 20, -20] : 0,
  delay: anime.stagger(100),
});



