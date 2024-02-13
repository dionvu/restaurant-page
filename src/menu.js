import './style/menu.css'
import burger from './assets/burger.jpg'

class Item {
  constructor(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
  };
}

let menu = [
  new Item('Burger', 100, ""),
  new Item('Hot Dog', 100, ""),
  new Item('Burger', 100, ""),
  new Item('Hot Dog', 100, ""),
  new Item('Burger', 100, ""),
  new Item('Hot Dog', 100, ""),
  new Item('Burger', 100, ""),
  new Item('Hot Dog', 100, ""),
  new Item('Hot Dog', 100, "")
];

function createMenu() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  for (let i = 0; i < 9; i++) {
    const item = document.createElement('div');
    item.classList.add('menu-item');

    const name = document.createElement('h1');
    name.classList.add('menu-item-name');
    name.textContent = menu[i].name;

    const image = document.createElement('img');
    image.classList.add('menu-item-image');
    image.src = burger;

    const price = document.createElement('h1');
    price.classList.add('menu-item-price');
    price.textContent = '$' + menu[i].price;

    content.appendChild(item);
    item.appendChild(name);
    item.appendChild(image);
    item.appendChild(price);
  }
}

export default createMenu;
