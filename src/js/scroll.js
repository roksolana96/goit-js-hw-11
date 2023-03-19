export { onScroll };

window.addEventListener('scroll', onScroll);

function onScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
}
