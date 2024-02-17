import './style/nav.css'
import home from './home.js'
import menu from './menu.js'
import contact from './contact.js'

const homeButton = document.getElementById('home-button');
const menuButton = document.getElementById('menu-button');
const contactButton = document.getElementById('contact-button');

homeButton.addEventListener('click', home);
menuButton.addEventListener('click', menu);
contactButton.addEventListener('click', contact);

home();
