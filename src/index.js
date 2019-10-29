import home from './home';
import about from './about';
import recipes from './recipes';

home.render();

document.querySelector('.home-l').addEventListener('click', () => {
  location.reload();
});

document.querySelector('.about-l').addEventListener('click', () => {
  about.render();
});

document.querySelector('.recipes-l').addEventListener('click', () => {
  recipes.render();
});
