const contact = (() => {
  const contactCont = document.createElement('div');
  const contactHeading = document.createElement('h2');
  const contactDet = document.createElement('div');
  const leaveMsg = document.createElement('div');
  const manager = document.createElement('p');
  const email = document.createElement('p');
  const tel = document.createElement('p');
  const msgInput = document.createElement('textarea');
  contactCont.classList.add('contact-cont');
  contactDet.classList.add('contact-det');
  leaveMsg.classList.add('leave-msg');

  const render = () => {
    if (document.querySelector('.menu-cont') !== null) {
      document.querySelector('.menu-cont').style.display = 'none';
    }
    if (document.querySelector('.info') !== null) {
      document.querySelector('.info').style.display = 'none';
    }
    contactHeading.textContent = 'REACH OUT TO OUR TEAM';
    manager.textContent = 'Manger: Kevin Dan';
    email.textContent = 'Email: dankevin@ricomeals.org';
    tel.textContent = 'Tel: +254173673043';
    leaveMsg.textContent = 'Leave us a message:';
    msgInput.placeholder = 'Tell us anything';
    leaveMsg.appendChild(msgInput);
    contactDet.appendChild(contactHeading);
    contactDet.appendChild(manager);
    contactDet.appendChild(email);
    contactDet.appendChild(tel);
    contactCont.appendChild(contactDet);
    contactCont.appendChild(leaveMsg);
    document.querySelector('.home-img').appendChild(contactCont);
    document.querySelector('.contact-cont').style.display = 'block';
  };
  return { render };
})();

export default contact;
