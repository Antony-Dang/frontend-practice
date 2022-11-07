const container = document.querySelector('#container');

const redParagraph = document.createElement('p');
redParagraph.textContent = "Hey I'm Red!";
redParagraph.style.color = 'red';

container.appendChild(redParagraph);