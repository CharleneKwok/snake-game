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

const showModel = (text) => {
  const model = document.getElementById("model");
  const score = document.getElementById("score");
  const restartBtn = document.getElementById("restart");
  score.innerText = text;
  restartBtn.onclick = () => {
    window.location = "https://snake-game-499.netlify.app/";
  };
  model.style.display = "block";
};

const main = (currTime) => {
  const snakeLen = getLength();
  const winScore = 21 * 21;
  if (snakeLen === winScore) {
    showModel(`Congrats! You win!!`);
    return;
  }
  if (gameOver) {
    showModel(`Your score is ${snakeLen}`);
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
