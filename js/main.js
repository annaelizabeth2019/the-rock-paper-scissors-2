// --- variables ---
let winner, results, scores;

/*----- event listeners -----*/

document.getElementById("rock-btn").addEventListener("click", handleTurnR);
document.getElementById("paper-btn").addEventListener("click", handleTurnP);
document.getElementById("scissors-btn").addEventListener("click", handleTurnS);

// --- constants ---
const RPS = ["rock", "paper", "scissors"];
const RPSLibrary = {
  rock: {
    // an object with three properties instead of a single array
    images: [
      {
        path: "images/therock1.jpg",
        alt: "Dwayne 'The Rock' Johnson pointing at you like Uncle Sam",
      },
      {
        path: "images/therock2.jpeg",
        alt: "Dwayne 'The Rock' Johnson laughing",
      },
      {
        path: "images/therock3.jpg",
        alt: "A young Dwayne 'The Rock' Johnson posing coyly with a fanny pack",
      },
      {
        path: "images/therock4.gif",
        alt:
          "A gif of Dwayne 'The Rock' Johnson clenching his fists and screaming",
      },
      {
        path: "images/therock5.gif",
        alt:
          "A close up of Dwayne 'The Rock' giving his signature one eye brow up look and wearing shades",
      },
      {
        path: "images/therock6.gif",
        alt:
          "A gif of Dwayne 'The Rock' Johnson raising his eyebrows, smiling, and bobbing his head in a silly way",
      },
      {
        path: "images/therock7.gif",
        alt:
          "A gif of Dwayne 'The Rock' Johnson making hand signals shirtless while standing in front of a roaring fire",
      },
      {
        path: "images/therock8.jpg",
        alt:
          "A profile picture of Dwayne 'The Rock' Johnson in front of the 'Smack Down' logo",
      },
    ],
    defeats: "scissors",
  },
  paper: {
    images: [
      {
        path: "images/paper1.jpg",
        alt: "A roll of toilet paper",
      },
      {
        path: "images/paper2.ico",
        alt: "A wad of cash",
      },
      {
        path: "images/paper3.jpg",
        alt: "A dinner bill for $363.99",
      },
      {
        path: "images/paper4.gif",
        alt: "A gif of toilet paper that reveals there is no more on the roll",
      },
      {
        path: "images/paper5.jpg",
        alt: "homework",
      },
    ],
    defeats: "rock",
  },
  scissors: {
    images: [
      {
        path: "images/scissors1.jpg",
        alt: "Edward Scissorhands peaking out from behind a door",
      },
      {
        path: "images/scissors2.jpeg",
        alt: "A close up of Edward Scissorhands",
      },
      {
        path: "images/scissors3.gif",
        alt: "A gif of Edward Scissorhands saying goodbye very sadly",
      },
      {
        path: "images/scissors4.gif",
        alt: "a gif of Edward Scissorhands cutting something up",
      },
    ],
    defeats: "paper",
  },
};

// --- cached element references ---

// SCORE ELEMENTS
const pScore = document.getElementById("player-score");
const tScore = document.getElementById("tie-score");
const cScore = document.getElementById("computer-score");

// IMAGE ELEMENTS
const pImgEl = document.getElementById("player");
const cImgEl = document.getElementById("computer");

// --- functions ---

function randomPicker() {
  const weapon = RPS[Math.floor(Math.random() * 3)];
  // remember image is an object with two attributes and we're going to access the attributes through dot notation!
  return weapon;
}

function render() {
  // variables to break it down
  const cImgArray = RPSLibrary[results.c].images;
  const cLength = RPSLibrary[results.c].images.length;
  // with the break down:
  const cImg = cImgArray[Math.floor(Math.random() * cLength)];

  // not broken down:
  const pImg =
    RPSLibrary[results.p].images[
      Math.floor(Math.random() * RPSLibrary[results.p].images.length)
    ];

  // update scores
  pScore.innerHTML = scores.p;
  tScore.innerHTML = scores.t;
  cScore.innerHTML = scores.c;

  // update images
  cImgEl.src = cImg.path;
  cImgEl.alt = cImg.alt;
  pImgEl.src = pImg.path;
  pImgEl.alt = pImg.alt;

  // highlight the winner
  if (winner === "p") {
    pImgEl.style.borderColor = "gold";
    cImgEl.style.borderColor = "white";
    return;
  }
  if (winner === "c") {
    pImgEl.style.borderColor = "white";
    cImgEl.style.borderColor = "gold";
    return;
  }
  pImgEl.style.borderColor = "white";
  cImgEl.style.borderColor = "white";
}

function handleResults() {
  results.c = randomPicker();
  winner = getWinner();
  scores[winner]++;
  // new code below
  render();
}

function handleTurnR() {
  results.p = "rock";
  handleResults();
}

function handleTurnP() {
  results.p = "paper";
  handleResults();
}

function handleTurnS() {
  results.p = "scissors";
  handleResults();
}

function getWinner() {
  results.c = randomPicker();
  // t for tie, p for player, c for computer
  if (results.p === results.c) {
    return "t";
  }
  // we can also use brackets to access a property in RPSLibrary that we'll set with a variable
  if (RPSLibrary[results.p].defeats === results.c) {
    return "p";
  }
  return "c";
}

function init() {
  scores = {
    p: 0,
    t: 0,
    c: 0,
  };
  // p is for player c is for computer
  results = {
    p: "rock",
    c: "rock",
  };
  winner = null; // null -no winner; if 'p' -player wins; if c -computer wins;
}

init();
