
function getRandomFigure(a, b) {
    min = Math.ceil(a);
    max = Math.floor(b);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



  function getRandomArbitrary(a, b, c) {
    return (Math.random() * (b - a)).toFixed(c)
  }
 