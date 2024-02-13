function createMenu() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const header = document.createElement('h1');
  header.textContent = 'MENU';
  document.body.appendChild(header);
  content.appendChild(header);
}

export default createMenu;
