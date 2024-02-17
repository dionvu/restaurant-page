import './style/nav.css'
import './style/home.css'
import headerImg from '../assets/home_header.jpg'
import tuna from '../assets/tuna.jpg'
import salmon from '../assets/salmon.jpg'
import footer from './footer'

function home() {
  const container = document.getElementById('container');
  container.innerHTML = '';

  const content = document.createElement('div');
  content.setAttribute('id', 'content-home');

  container.appendChild(content);

  header(content, container);
}

function header(content, container) {
  const header = document.createElement('div');
  const headerImage = document.createElement('img');

  headerImage.src = headerImg;
  headerImage.id = 'header-image';

  header.id = 'header';

  header.appendChild(headerImage);
  content.appendChild(header);

  headerOverlay(header);

  main(container);

  footer(container);
}

function headerOverlay(header) {
  const headerOverlay = document.createElement('div');
  headerOverlay.id = 'header-overlay';

  const headerBig = document.createElement('h1');
  headerBig.id = 'header-big';

  const topText = document.createElement('h3');
  topText.id = 'header-top';

  const bottomText = document.createElement('h2');
  bottomText.id = 'header-bottom';

  headerBig.textContent = 'ORDER ONLINE';
  bottomText.textContent = 'Delicious food all the time';
  topText.textContent = 'Always ready to serve'

  header.appendChild(headerOverlay);
  headerOverlay.appendChild(topText);
  headerOverlay.appendChild(headerBig);
  headerOverlay.appendChild(bottomText);
}

function main(container) {
  const contentMain = document.createElement('div');
  contentMain.id = 'content-main';

  const galleryTop = document.createElement('div');
  galleryTop.id = 'gallery-top';
  galleryTop.textContent = 'Popular selections';


  const galleryheader = document.createElement('h1');
  galleryheader.id = 'gallery-header';
  galleryheader.textContent = 'Gallery';

  container.appendChild(contentMain);
  contentMain.appendChild(galleryheader);
  contentMain.appendChild(galleryTop);

  gallery(contentMain);
}

function gallery(contentMain) {
  const gallery = document.createElement('div');
  gallery.id = 'gallery';
  contentMain.appendChild(gallery);



  for (let i = 0; i < 8; i++) {
    const img = document.createElement('img');
    img.classList.add('gallery-img');

    if (i % 2 === 0) {
      img.src = tuna;
    }
    else {
      img.src = salmon;
    }

    gallery.appendChild(img);
  }
}

export default home;
