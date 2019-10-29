import home from './home';
import about from './about'

console.log(home.homeImg)
home.render();

document.querySelector('.about-l').addEventListener('click', () => {
  console.log('here!!')
  about.render();
})
