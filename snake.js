import { getMoveDir } from "./move.js";

export let SNAKE_SPEED = 3;

let snakePos = [{ x: 10, y: 11 }];
let popElement;
let addSpeedLength = 3;
const gameBoard = document.getElementById("gameBoard");

export const snakeUpdate = () => {
  const moveDir = getMoveDir();
  const newPos = { x: snakePos[0].x + moveDir.x, y: snakePos[0].y + moveDir.y };
  popElement = snakePos.pop();
  snakePos = [newPos, ...snakePos];
};

export const incrementLength = () => {
  snakePos.push(popElement);
  if (snakePos.length === addSpeedLength) {
    console.log("add");
    SNAKE_SPEED += 1;
    addSpeedLength += 3;
  }
};

export const displaySnake = () => {
  snakePos.forEach((pos) => {
    const snakeBody = document.createElement("div");
    snakeBody.style.gridRowStart = pos.y;
    snakeBody.style.gridColumnStart = pos.x;
    snakeBody.classList = "snake";
    gameBoard.appendChild(snakeBody);
  });
};

export const eatFood = (foodPos) => {
  if (comparePos(snakePos[0], foodPos)) {
    return true;
  }
  return false;
};

export const comparePos = (pos1, pos2) => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
};

export const getLength = () => {
  return snakePos.length;
};

export const checkGameOver = () => {
  const head = snakePos[0];
  const arrayWithoutHead = snakePos.filter((pos) => !comparePos(head, pos));
  if (snakePos.length - 1 !== arrayWithoutHead.length) {
    return true;
  }
  if (head.x < 1 || head.x > 21 || head.y < 1 || head.y > 21) {
    return true;
  }
  return false;
};
