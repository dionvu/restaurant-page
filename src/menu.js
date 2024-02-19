import './style/menu.css'
import footer from './footer'
import salmon from '../assets/salmon.jpg'

class Item {
  constructor(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
  };
}

let items = [
  new Item('Salomon', 100, ""),
  new Item('Samon', 100, ""),
  new Item('Fishy Fish', 100, ""),
  new Item('Smmmmhhmon', 100, ""),
  new Item('monoSam', 100, ""),
  new Item('Rice', 100, ""),
  new Item('Fish Rice', 100, ""),
  new Item('Rice Fish', 100, ""),
  new Item('Sammy', 5, "")
];

function menu() {
  const container = document.getElementById('container');
  container.innerHTML = '';

  const content = document.createElement('div');
  content.setAttribute('id', 'content-menu');

  const header = document.createElement('h1');
  header.setAttribute('id', 'header-menu');
  header.textContent = 'Menu';

  const headerBottom = document.createElement('h2');
  headerBottom.setAttribute('id', 'header-bottom');
  headerBottom.textContent = 'Our incredible selection';

  for (let i = 0; i < 9; i++)
    createMenuItem(content, i);

  container.appendChild(header);
  container.appendChild(headerBottom);
  container.appendChild(content);

  footer(container);
}

function createMenuItem(content, itemNumber) {
  const item = document.createElement('div');
  item.classList.add('menu-item');

  const name = document.createElement('h1');
  name.classList.add('menu-item-name');
  name.textContent = items[itemNumber].name;

  const image = document.createElement('img');
  image.classList.add('menu-item-image');
  image.src = salmon;

  const price = document.createElement('h1');
  price.classList.add('menu-item-price');
  price.textContent = '$' + items[itemNumber].price;

  content.appendChild(item);
  item.appendChild(name);
  item.appendChild(image);
  item.appendChild(price);
}

export default menu;
