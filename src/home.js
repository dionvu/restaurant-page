import './style/nav.css'
import './style/home.css'

function createHome() {
  const container = document.getElementById('container');
  container.innerHTML = '';

  const content = document.createElement('div');
  content.setAttribute('id', 'content');

  const header = document.createElement('h1');
  header.textContent = 'HOME';
  content.appendChild(header);

  container.appendChild(content);
}

export default createHome;
