import './style/footer.css'

function footer(container) {
  const footer = document.createElement('div');
  footer.id = 'footer';

  const copyright = document.createElement('h2');
  copyright.id = 'copyright';
  copyright.textContent = '@ 2024 Copyright Dion Vu. Some rights reserved.';

  footer.appendChild(copyright);
  container.appendChild(footer);
}

export default footer;
