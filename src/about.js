const about = (() => {
  const render = () => {
    if(document.querySelector('.info').style.display === 'none'){
      document.querySelector('.info').style.display = 'block';
      document.querySelector('.menu-cont').style.display= 'none';
    };
    document.querySelector('.about-heading').textContent = 'About Us';
  }
  return {render}
})();

export default about;
