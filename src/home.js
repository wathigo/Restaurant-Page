const home = (() => {
  const homeImg = document.createElement('div');
  const container = document.querySelector('#content');
  const logo = document.createElement('h4');
  const navItems = document.createElement('div');
  const navList = document.createElement('span')
  const homeL = document.createElement('a');
  const recipes = document.createElement('a');
  const about = document.createElement('a');
  const contactBtn = document.createElement('button');
  const info = document.createElement('div');
  const homeInfo = document.createElement('h2');
  const homeDesc = document.createElement('p');
  const fullDesc = document.createElement('div');
  const readMore = document.createElement('a');
  const showLess = document.createElement('a');
  homeImg.classList.add('home-img');
  logo.classList.add('logo');
  navItems.classList.add('nav-items');
  homeL.classList.add('home-l');
  recipes.classList.add('recipes-l');
  about.classList.add('about-l');
  contactBtn.classList.add('contact-btn');
  info.classList.add('info');
  homeInfo.classList.add('about-heading');
  homeDesc.classList.add('about-desc');
  fullDesc.classList.add('full-desc')
  readMore.classList.add('read-more');
  showLess.classList.add('show-less');
  const render = () => {
    logo.textContent = 'Rico Meals'
    homeL.textContent = 'home';
    recipes.textContent = 'recipes';
    about.textContent = 'about';
    contactBtn.textContent = 'Conctact Us'
    homeInfo.textContent = 'DELICOUS FOODS';
    homeDesc.textContent =  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    fullDesc.textContent = `Eius est soluta blanditiis velit doloremque corrupti aliquid ducimus consectetur ea nobis dolorem, id quibusdam praesentium consequuntur modi eligendi, sunt suscipit ullam iure nesciunt tempore. Itaque placeat, libero aliquam odio ex voluptas.'

Vel vitae, assumenda blanditiis nemo in vero reprehenderit asperiores distinctio exercitationem aliquid, quam velit explicabo neque. Sapiente provident sequi omnis itaque eaque voluptatum vel. Accusamus deserunt atque eligendi mollitia voluptates eum libero, ratione id labore. Magnam porro dolorem aspernatur, dolor?`;
    readMore.textContent = 'Read More';
    showLess.textContent = 'Show less';
    readMore.addEventListener('click', () => {
      fullDesc.style.display = 'block';
      readMore.style.display = 'none'
      showLess.style.display = 'block';
    });
    showLess.addEventListener('click', () => {
      fullDesc.style.display = 'none';
      readMore.style.display = 'block';
      showLess.style.display = 'none';
    })
    info.appendChild(homeInfo);
    info.appendChild(homeDesc);
    info.appendChild(readMore);
    info.appendChild(fullDesc)
    info.appendChild(showLess);
    navList.appendChild(homeL);
    navList.appendChild(recipes);
    navList.appendChild(about);
    navItems.appendChild(logo);
    navItems.appendChild(navList);
    navItems.appendChild(contactBtn)
    homeImg.appendChild(navItems);
    homeImg.appendChild(info);
    container.appendChild(homeImg);
    container.style.margin = '0';
  }
  return {render};
})();

export default home
