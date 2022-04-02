//global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const clueHoldTime = 500; //how long to hold each clue's light/sound ( original 1000)

//global variables
var clueLength = 10;
var pattern = []; // replaced with original pattern
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;

	pattern = []; // array reset
  for (var i =0; i < clueLength; i ++) {
    pattern.push(getRandomInt(5));
  }
  console.log('Current pattern: ' + pattern);
  
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  playClueSequence();
}

// added random function
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max) + 1);
}

function stopGame() {
  gamePlaying = false;

  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Sorry, game over. You lost.");
}
function winGame() {
  stopGame();
  alert("You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  
  if (!gamePlaying) {
    return;
  }
  
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    loseGame();
  }
}


// Sound Synthesis Functions
const freqMap = {
  1: 231.6,
  2: 369.6,
  3: 392.7,
  4: 366.2,
  // new synthesis added
  5: 534,
  6: 435
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
