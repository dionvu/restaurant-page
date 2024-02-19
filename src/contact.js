import './style/contact.css'
import footer from './footer'
import mars from '../assets/mars.jpg'

function contact() {
  const container = document.getElementById('container');
  container.innerHTML = '';

  const content = document.createElement('div');
  content.setAttribute('id', 'content');

  const contactContainer = document.createElement('div');
  contactContainer.setAttribute('id', 'contact-container');

  const location = document.createElement('img');
  location.src = mars;

  const header = document.createElement('h1');
  header.id = 'contact-header';
  header.textContent = 'Our general location.';

  const header2 = document.createElement('h2');
  header2.id = 'contact-header2';
  header2.textContent = 'You will serve us';

  content.appendChild(contactContainer);
  container.appendChild(content);
  contactContainer.appendChild(location);
  contactContainer.appendChild(header);
  contactContainer.appendChild(header2);

  footer(container);
}

export default contact;
