const about = (() => {
  const render = () => {
    document.querySelector('.about-heading').textContent = 'About Us';
  }
  return {render}
})();

export default about;
