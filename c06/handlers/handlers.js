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

const handleNotFound = (req, res) => {};

module.exports = {
  handleWelcome,
  handleUser,
  handleNotFound,
};
