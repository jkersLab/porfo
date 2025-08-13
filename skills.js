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

const track = document.querySelector('.carousel-track');
const totalScroll = 999;

function startLoop() {
  anime({
    targets: track,
    translateX: [`0px`, `-${totalScroll}px`],
    duration: 20000,
    easing: 'linear',
    loop: true,
    direction: 'normal',
  });
  
}
startLoop();