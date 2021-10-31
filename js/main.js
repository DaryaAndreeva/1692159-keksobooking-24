
function getRandomFigure(from, to) {
  min = Math.ceil(from);
  max = Math.floor(to);
  return Math.random() * (max - min + 1) + min;
}

function randomNumber(from, to, precision) {
  return getRandomFigure(from, to).toFixed(precision);
}