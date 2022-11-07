const container = document.querySelector('#container');

const redParagraph = document.createElement('p');
redParagraph.textContent = "Hey I'm Red!";
redParagraph.style.color = 'red';

container.appendChild(redParagraph);

const blueText = document.createElement('h3');
blueText.textContent = "I'm blue h3";
blueText.style.color = 'blue';
container.insertBefore(blueText, redParagraph);

const blackBox = document.createElement('div');
blackBox.style.backgroundColor = 'pink';
blackBox.style.border = 'black';

const blackBoxh1 = document.createElement('h1');
blackBoxh1.textContent = "I'm a div";
const blackBoxPara = document.createElement('p');
blackBoxPara.textContent = "Me TOO!";
blackBox.appendChild(blackBoxh1);
blackBox.appendChild(blackBoxPara);

container.appendChild(blackBox);

