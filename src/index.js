import home from './home';
import about from './about';
import recipes from './recipes';
import contact from './contact';

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

document.querySelector('.contact-btn').addEventListener('click', () => {
  contact.render();
});
