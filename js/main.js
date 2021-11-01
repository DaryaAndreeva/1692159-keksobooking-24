
function getRandomFigure(from, to) {
  let min = Math.ceil(from);
  let max = Math.floor(to);
  return Math.random() * (max - min + 1) + min;
}

function randomNumber(from, to, precision) {
  return getRandomFigure(from, to).toFixed(precision);
}
