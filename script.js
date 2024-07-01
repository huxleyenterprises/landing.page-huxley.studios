function showContent(selectorsAndDelays) {
  selectorsAndDelays.forEach(([selector, delay]) => {
    setTimeout(() => {
      document.querySelector(selector).classList.add('show');
    }, delay);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  showContent([
    ['h1.animated-element', 400],
    ['p.animated-element', 900]
  ]);
});
