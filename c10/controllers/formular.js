// const { add, write, read } = require("../models/students");
const studenti = require("../models/students");

const getForm = (req, res) => {
  res.render("formular");
};

const postForm = async (req, res) => {
  // Da znaete sto ima vo req.body;
  const { ime, prezime, prosek } = req.body;

  const data = {
    ime: ime,
    prezime,
    prosek,
  };

  await studenti.add(data);
  // gi dodavame studentite vo studenti.json

  res.redirect("/students");
};

const getStudents = async (req, res) => {
  let data = await studenti.list();
  res.render("students", { data });
};

const deleteStudents = async (req, res) => {
  // req.query.index doagja od students.ejs od
  // <a href="/brishi?index=<%= index %>">Test</a>

  await studenti.remove(req.query.index);
  res.redirect("/students");
};

module.exports = {
  getForm,
  postForm,
  getStudents,
  deleteStudents,
};
