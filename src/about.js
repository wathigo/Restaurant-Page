const about = (() => {
  const render = () => {
    if(document.querySelector('.menu-cont') !== null){
      document.querySelector('.menu-cont').style.display= 'none';
    }
    if(document.querySelector('.contact-cont') !== null) {
      document.querySelector('.contact-cont').style.display = 'none';
    }
    document.querySelector('.info').style.display = 'block';
    document.querySelector('.about-heading').textContent = 'About Us';
  }
  return {render}
})();

export default about;
