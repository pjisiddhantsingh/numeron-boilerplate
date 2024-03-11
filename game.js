// Iteration 2: Generate 2 random number and display it on the screen
let num1 = Math.floor(Math.random() * 100 + 1);
let num2 = Math.floor(Math.random() * 100 + 1);
document.getElementById('number1').innerHTML = num1;
document.getElementById('number2').innerHTML = num2;

// Iteration 3: Make the options button functional
let greaterThan = document.getElementById('greater-than');
greaterThan.onclick = () => {
  if (num1 > num2) {
    alert('Right Choice');
  } else {
    alert('Oops that was wrong');
  }
  history.go(0);
};
let lessThan = document.getElementById('lesser-than');
lessThan.onclick = () => {
  if (num1 < num2) {
    alert('Right Choice');
  } else {
    alert('Oops that was wrong');
  }
  history.go(0);
};
let equalTo = document.getElementById('equal-to');
equalTo.onclick = () => {
  if (num1 == num2) {
    alert('Right Choice');
  } else {
    alert('Oops that was wrong');
  }
  history.go(0);
};

// Iteration 4: Build a timer for the game
let seconds = 5;
let timerText = document.getElementById('timer');
setInterval(showTimer, 1000);

function showTimer() {
  timerText.innerHTML = seconds;
  seconds--;
  if (seconds == 0) {
    seconds = 5;
    clearInterval();
    history.go(0);
  }
}
