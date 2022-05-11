import { displayFood, foodUpdate } from "./food.js";
import {
  SNAKE_SPEED,
  displaySnake,
  snakeUpdate,
  getLength,
  checkGameOver,
} from "./snake.js";
const gameBoard = document.getElementById("gameBoard");
let gameOver = false;
let lastRenderTime = 0;

const main = (currTime) => {
  if (gameOver) {
    const failModel = document.getElementById("failModel");
    const score = document.getElementById("score");
    const restartBtn = document.getElementById("restart");
    score.innerText = `Your score is ${getLength()}`;
    restartBtn.onclick = () => {
      window.location = "https://snake-game-499.netlify.app/";
    };
    failModel.style.display = "block";
    return;
  }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currTime;
  update();
  display();
};

window.requestAnimationFrame(main);

const update = () => {
  snakeUpdate();
  foodUpdate();
};

const display = () => {
  gameBoard.innerHTML = "";
  displaySnake();
  displayFood();
  gameOver = checkGameOver();
};
