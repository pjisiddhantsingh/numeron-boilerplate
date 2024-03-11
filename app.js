// Iteration 1: Make the Play button functional.
let play = document.getElementById('play-button');
play.onclick = () => {
  window.open('./game.html', '_self');
};
// Description: When the Play button is clicked the game page should be displayed.
