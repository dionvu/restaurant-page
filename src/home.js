import './style/nav.css'
import './style/home.css'
import headerImg from '../assets/home_header.jpg'

function home() {
  const container = document.getElementById('container');
  container.innerHTML = '';

  const content = document.createElement('div');
  content.setAttribute('id', 'content-home');

  header(content);

  container.appendChild(content);
}

function header(content) {
  const header = document.createElement('div');
  const headerImage = document.createElement('img');

  headerImage.src = headerImg;
  headerImage.id = 'header-image';

  header.id = 'header';

  header.appendChild(headerImage);
  content.appendChild(header);

  headerOverlay(header);
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

export default home;
