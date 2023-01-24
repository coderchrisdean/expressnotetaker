// Immediately export a function that generates a string of 4 random numbers
module.exports = () =>
  Math.floor((1 + Math.random()) * 0x1000)
    // .toString(16)
    // .substring(1);
