import home from './home';

console.log(home.homeImg)
home.render();

document.querySelector('body').addEventListener('load', () => {
  console.log('Loaded!')
})
