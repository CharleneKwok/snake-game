let moveDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (moveDirection.y == 1) return;
      moveDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (moveDirection.y == -1) return;
      moveDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (moveDirection.x == 1) return;
      moveDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (moveDirection.x == -1) return;
      moveDirection = { x: 1, y: 0 };
  }
});

export const getMoveDir = () => {
  return moveDirection;
};
