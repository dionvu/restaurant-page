function createContent() {
  console.log("YOOO CONTACT");

  const content = document.getElementById('content');
  content.innerHTML = '';

  const header = document.createElement('h1')
  header.textContent = 'CONTACT';
  content.appendChild(header);
}

export default createContent;
