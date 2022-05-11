import { incrementLength, eatFood } from "./snake.js";

let GRID_SIZE = 21;
const gameBoard = document.getElementById("gameBoard");
const getRandomPos = () => {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
};

let foodPos = getRandomPos();
export const displayFood = () => {
  const food = document.createElement("img");
  food.style.gridRowStart = foodPos.y;
  food.style.gridColumnStart = foodPos.x;
  food.src = "apple.png";
  gameBoard.appendChild(food);
};

export const foodUpdate = () => {
  if (eatFood(foodPos)) {
    incrementLength();
    foodPos = getRandomPos();
  }
};
