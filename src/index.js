import './style/nav.css'
import createMenu from './menu.js'
import createContact from './contact.js'
import createHome from './home.js'

// Nav buttons
const homeButton = document.getElementById('home-button');
const menuButton = document.getElementById('menu-button');
const contactButton = document.getElementById('contact-button');

homeButton.addEventListener('click', createHome);
menuButton.addEventListener('click', createMenu);
contactButton.addEventListener('click', createContact);

// Starting page
createHome();

