const winnerTitleElement = document.getElementById('winnerTitle');
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

let counterScoreYou = 0;
let counterScorePC = 0;

const updatePlayerSelection = (color) => {
  youPickedtextElement.textContent = 'YOU PICKED';
  rootStyles.setProperty('--color-you', color);
};

const handleWinConditions = () => {
  if (textWinnerElement.textContent === 'PC WINS') {
    scorePcElement.textContent = ++counterScorePC;
    if (counterScorePC === 10) {
      winnerTitleElement.textContent = 'YOU LOSER';
      setTimeout(() => {
        counterScoreYou = 0;
        counterScorePC = 0;
        scoreYouElement.textContent = 0;
        scorePcElement.textContent = 0;
        winnerTitleElement.textContent = '';
        rootStyles.setProperty('--color-pc', 'transparent');
        rootStyles.setProperty('--color-you', 'transparent');
        youPickedtextElement.textContent = '';
        pcPickedtextElement.textContent = '';
      }, 3000);
    }
  }
  if (textWinnerElement.textContent === 'YOU WIN') {
    scoreYouElement.textContent = ++counterScoreYou;
    if (counterScoreYou === 10) {
      winnerTitleElement.textContent = 'YOU WIN';
      setTimeout(() => {
        counterScoreYou = 0;
        counterScorePC = 0;
        scoreYouElement.textContent = 0;
        scorePcElement.textContent = 0;
        winnerTitleElement.textContent = '';
        rootStyles.setProperty('--color-pc', 'transparent');
        rootStyles.setProperty('--color-you', 'transparent');
        youPickedtextElement.textContent = '';
        pcPickedtextElement.textContent = '';
      }, 3000);
    }
  }
};

const selecTicon = (e) => {
  textWinnerElement.classList.add('flash');
  if (e.target === rockIconElement) {
    updatePlayerSelection('red');
    pcPlay(e);
  } else if (e.target === paperIconElement) {
    updatePlayerSelection('green');
    pcPlay(e);
  } else if (e.target === scissorsIconElement) {
    updatePlayerSelection('yellow');
    pcPlay(e);
  }
  handleWinConditions();
};



rockIconElement.addEventListener('click', selecTicon);
paperIconElement.addEventListener('click', selecTicon);
scissorsIconElement.addEventListener('click', selecTicon);
