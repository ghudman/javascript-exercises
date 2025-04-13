const convertToCelsius = function(int) {
  let unRounded = (int - 32) * 5 / 9;
  let rounded = Math.round(unRounded * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(int) {
  let unRounded = (int * 9) / 5 + 32;
  let rounded = Math.round(unRounded * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
