export { onScroll };

// const toTopBtn = document.querySelector('.btn-to-top');

window.addEventListener('scroll', onScroll);

function onScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

}
