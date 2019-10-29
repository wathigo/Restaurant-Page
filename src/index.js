import home from './home';
import about from './about';
import recipes from './recipes';
import contact from './contact';

home.render();

document.querySelector('.home-l').addEventListener('click', () => {
  location.reload(); /* eslint-disable-line no-restricted-globals */
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

document.querySelector('.logo').addEventListener('click', () => {
  location.reload(); /* eslint-disable-line no-restricted-globals */
});
