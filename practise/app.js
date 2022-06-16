const makecolor = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

makecolor("pink", 1000)
  .then(() => makecolor("red", 1000))
  .then(() => makecolor("yellow", 1000))
  .then(() => makecolor("green", 1000))
  .then(() => makecolor("blue", 1000))
  .then(() => makecolor("orange", 1000))
  .then(() => makecolor("violet", 1000))
  .then(() => makecolor("green", 1000));
