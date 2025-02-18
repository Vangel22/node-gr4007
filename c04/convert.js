const convertMilesToKm = (miles) => {
  return miles * 1.6;
};

const fahrenheitToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

module.exports = {
  convertMilesToKm,
  fahrenheitToCelsius,
};
