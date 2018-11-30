const numbers = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const hex = document.querySelector('.hex');
const bodyBcg = document.querySelector('body');
const button = document.querySelector('.button');

button.addEventListener('click', getHex);
function getHex() {
  let hexNumber = '#';

  for (let i = 0; i < 6; i++ ) {
  let randomNumber = Math.floor(Math.random() * numbers.length);
  hexNumber += numbers[randomNumber];
}

bodyBcg.style.backgroundColor = hexNumber;
hex.innerHTML = hexNumber;
}
