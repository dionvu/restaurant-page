import './style/contact.css'

const phoneNumber = '699-420-6969';
const slogan = 'CALL US';
const slogan2 = 'WE MIGHT EVEN ANSWER';

function contact() {
  const container = document.getElementById('container');
  container.innerHTML = '';

  const content = document.createElement('div');
  content.setAttribute('id', 'content');

  const contactContainer = document.createElement('div');
  contactContainer.setAttribute('id', 'contact-container');

  const phone = document.createElement('div');
  phone.setAttribute('id', 'phone-number');
  phone.textContent = phoneNumber;

  const text = document.createElement('p');
  text.classList.add('slogan');
  text.textContent = slogan;

  const text2 = document.createElement('p');
  text2.classList.add('slogan');
  text2.textContent = slogan2;

  contactContainer.appendChild(phone);
  contactContainer.appendChild(text);
  contactContainer.appendChild(text2);
  content.appendChild(contactContainer);
  container.appendChild(content);
}

export default contact;
