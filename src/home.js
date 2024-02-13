import './style/nav.css'
import './style/home.css'

function createHome() {
  console.log("YOOOO HOME");
  const content = document.getElementById('content');
  content.innerHTML = '';

  const header = document.createElement('h1');
  header.textContent = 'HOME';
  content.appendChild(header);
}

export default createHome;
