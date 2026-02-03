// let num1 = 8;
// let num2 = 2;
// let num3;
// let equal = document.getElementById("equal");
// document.getElementById("num1").textContent = num1;
// document.getElementById("num2").textContent = num2;

// function add() {
//   num3 = num1 + num2;
//   console.log(num3);
//   equal.textContent = "Equals = " + num3;
// }

// function subtract() {
//   num3 = num1 - num2;
//   console.log(num3);
//   equal.textContent = "Equals = " + num3;
// }

// function divide() {
//   num3 = num1 / num2;
//   console.log(num3);
//   equal.textContent = "Equals = " + num3;
// }

// function multiply() {
//   num3 = num1 * num2;
//   console.log(num3);
//   equal.textContent = "Equals = " + num3;
// }

let score1 = document.getElementById("score1");
let scorer = document.getElementById("score2");
let foul1 = document.getElementById("foul1");
let foul2 = document.getElementById("foul2");
let times = document.getElementById("time");
let qrt2 = document.getElementById("qrt");
let score = 0;
let scores = 0;
let FLadd1 = 0;
let FLadd2 = 0;
let qrtr = 0;

let totalSeconds = 12 * 60;
let timer = null;

function qrt1() {
  if (qrtr == "OT") {
    qrtr = 0;
    qrt2.textContent = qrtr;
  } else if (qrtr <= 3) {
    qrtr += 1;
    qrt2.textContent = qrtr;
  } else {
    qrtr = "OT";
    qrt2.textContent = qrtr;
  }
}

/* ONLY updates display */
function renderClock() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  document.getElementById("clock").textContent = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

/* ONLY counts down */
function tick() {
  if (totalSeconds <= 0) {
    pauseClock();
    return;
  }

  totalSeconds--;
  renderClock();
}

function startClock() {
  if (!timer) {
    timer = setInterval(tick, 1000);
  }
}

function pauseClock() {
  clearInterval(timer);
  timer = null;
}

function resetClock() {
  pauseClock();
  totalSeconds = 12 * 60;
  renderClock();
}

/* ➕➖ ADJUST TIME (NO BUG) */

function addMinute() {
  totalSeconds += 60;
  renderClock();
}

function subMinute() {
  totalSeconds = Math.max(0, totalSeconds - 60);
  renderClock();
}

function addSecond() {
  totalSeconds += 5;
  renderClock();
}

function subSecond() {
  totalSeconds = Math.max(0, totalSeconds - 5);
  renderClock();
}

/* initial display */
renderClock();

function Fadd1() {
  FLadd1 += 1;
  foul1.textContent = FLadd1;
  console.log(FLadd1);
}
function Fadd2() {
  FLadd2 += 1;
  foul2.textContent = FLadd2;
  console.log(FLadd1);
}
function Fres1() {
  FLadd1 = 0;
  foul1.textContent = FLadd1;
  console.log(FLadd1);
}
function Fres2() {
  FLadd2 = 0;
  foul2.textContent = FLadd2;
  console.log(FLadd1);
}
function plus1() {
  score += 1;
  score1.textContent = score;
  console.log(score1);
}
function plus2() {
  score += 2;
  score1.textContent = score;
  console.log(score1);
}
function plus3() {
  score += 3;
  score1.textContent = score;
  console.log(score1);
}
function plus4() {
  scores += 1;
  score2.textContent = scores;
  console.log(scores);
}
function plus5() {
  scores += 2;
  score2.textContent = scores;
  console.log(score1);
}
function plus6() {
  scores += 3;
  score2.textContent = scores;
  console.log(score1);
}
function res1() {
  score = 0;
  score1.textContent = score;
  console.log(score1);
}

function res2() {
  scores = 0;
  score2.textContent = scores;
  console.log(score1);
}
