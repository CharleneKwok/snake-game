let lastRenderTime = 0;
const snake_speed = 1;

const main = (currTime) => {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / snake_speed) return;
  lastRenderTime = currTime;
};

window.requestAnimationFrame(main);
