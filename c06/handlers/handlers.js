const convertMilesToKm = (miles) => {
  return miles * 1.6;
};

// Aplikaciski kod
const handleWelcome = (req, res) => {
  res.send("Welcome to my first Express app!");
};

const handleUser = (req, res) => {
  const usernamePattern = /^[a-zA-Z\d_#]{3,}$/;
  // v1 -> ne e validno
  // v1V -> validno

  if (usernamePattern.test(req.body.username)) {
    res.send(`Hello ${req.body.username}`);
  } else {
    res.send("Username is not valid!");
  }
};

const handleNotFound = (req, res) => {
  res.send("Route not found!");
};

const handleConvertMilesToKm = (req, res) => {
  console.log("req.body", req.body);
  const convertedVal = convertMilesToKm(req.body.miles);
  res.send(`${req.body.miles} miles are ${convertedVal} km.`);
};

module.exports = {
  handleWelcome,
  handleUser,
  handleNotFound,
  handleConvertMilesToKm,
};
