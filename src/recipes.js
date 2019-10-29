const recipes = (() => {
  const menuInfo = document.createElement('div');
  const menuCont = document.createElement('div');
  const menuHeading = document.createElement('h2');
  const menuItems = document.createElement('div');
  const menuItem = document.createElement('div');
  const menuImage = document.createElement('img');
  const menuDesc = document.createElement('p');

  const render = () => {
    document.querySelector('.info').style.display = 'none';
    const homeImg = document.querySelector('.home-img');
    menuCont.classList.add('menu-cont');
    menuHeading.classList.add('menu-heading');
    menuItems.classList.add('menu-items');
    menuItem.classList.add('menu-item');
    menuHeading.classList.add('menu-heading');
    menuHeading.textContent = 'Our Menu';
    menuCont.appendChild(menuHeading);
    let i = 0;
    if(menuCont.childNodes.length === 1){
      while(i < 4){
        if(i === 0){
          menuImage.src = '../images/dishes_1.webp';
          menuDesc.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...';
          menuItem.appendChild(menuImage);
          menuItem.appendChild(menuDesc);
          menuItems.appendChild(menuItem);
        } else{
          let clonedItem = menuItem.cloneNode(true)
          menuItems.appendChild(clonedItem);
        }
        i += 1;
      }
    }
    menuCont.appendChild(menuItems)
    homeImg.appendChild(menuCont);
    menuCont.style.display = 'block';
  }
  return {render};
})();

export default recipes;
