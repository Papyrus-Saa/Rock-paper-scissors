const triangleElement = document.getElementById('triangle');
const rockIconElement = document.getElementById('rockIcon');
const paperIconElement = document.getElementById('paperIcon');
const scissorsIconElement = document.getElementById('scissorsIcon');
const youPickedtextElement = document.getElementById('youPicked');
const pcPickedtextElement = document.getElementById('pcPicked');
const pickedColorYouElement = document.getElementById('pickedColorYou');
const pickedColorPcElement = document.getElementById('pickedColorpc');
const scoreYouElement = document.getElementById('scoreYou');
const scorePcElement = document.getElementById('scorePc');
const textWinnerElement = document.getElementById('textWinner');

const pcSelect = [rockIconElement, paperIconElement, scissorsIconElement];


const rootStyles = document.documentElement.style;


const pcSelections = [
  {
    text: 'PC PICKED',
    color: 'red'
  },
  {
    text: 'PC PICKED',
    color: 'green'
  },
  {
    text: 'PC PICKED',
    color: 'yellow'
  }
];

const pcPlay = (e) => {
  const pcSelected = Math.floor(Math.random() * pcSelections.length);
  pcPickedtextElement.textContent = pcSelections[pcSelected].text;
  rootStyles.setProperty('--color-pc', pcSelections[pcSelected].color);
  pcSelected === 0 && e.target === scissorsIconElement ? textWinnerElement.textContent = 'PC WINS' : '';
  pcSelected === 1 && e.target === rockIconElement ? textWinnerElement.textContent = 'PC WINS' : '';
  pcSelected === 2 && e.target === paperIconElement ? textWinnerElement.textContent = 'PC WINS' : '';
  e.target === paperIconElement && pcSelected === 0 ? textWinnerElement.textContent = 'YOU WIN' : '';
  e.target === scissorsIconElement && pcSelected === 1 ? textWinnerElement.textContent = 'YOU WIN' : '';
  e.target === rockIconElement && pcSelected === 2 ? textWinnerElement.textContent = 'YOU WIN' : '';
  e.target === rockIconElement && pcSelected === 0 ? textWinnerElement.textContent = 'TRY AGAIN' : '';
  e.target === paperIconElement && pcSelected === 1 ? textWinnerElement.textContent = 'TRY AGAIN' : '';
  e.target === scissorsIconElement && pcSelected === 2 ? textWinnerElement.textContent = 'TRY AGAIN' : '';
};


triangleElement.addEventListener('click', (e) => {
  textWinnerElement.classList.add('flash')
  if (e.target === rockIconElement) {
    youPickedtextElement.textContent = 'YOU PICKED'
    rootStyles.setProperty('--color-you', 'red');
    pcPlay(e);
  }
  if (e.target === paperIconElement) {
    youPickedtextElement.textContent = 'YOU PICKED'
    rootStyles.setProperty('--color-you', 'green');
    pcPlay(e);
  }
  if (e.target === scissorsIconElement) {
    youPickedtextElement.textContent = 'YOU PICKED'
    rootStyles.setProperty('--color-you', 'yellow');
    pcPlay(e);
  }
});

