const container = document.querySelector('#container');

const redParagraph = document.createElement('p');
redParagraph.textContent = "Hey I'm Red!";
redParagraph.style.color = 'red';

container.appendChild(redParagraph);

const blueText = document.createElement('h3');
blueText.textContent = "I'm blue h3";
blueText.style.color = 'blue';
container.insertBefore(blueText, redParagraph);
