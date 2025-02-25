const { read, write } = require("../read-write");

const getStudents = async (req, res) => {
  let students = await read("data.json");
  return res.send(students);
};

const addStudent = async (req, res) => {
  // req.body -> studentData
  const students = await read("data.json");
  students.push(req.body);
  await write("data.json", students);
  return res.send("Student added successfully!");
};

const editStudent = async (req, res) => {
  // req.params.id -> studentIndex
  // req.body -> studentData

  // req.params.id -> mora da bide konvertirano vo Number

  let students = await read("data.json");
  students = students.map((student, index) => {
    if (Number(req.params.id) === index) {
      return {
        ...student,
        ...req.body,
      };
    }
    return student;
  });

  await write("data.json", students);

  return res.send(`Student with index: ${req.params.id}, edited successfully!`);
};

const deleteStudent = async (req, res) => {
  // req.params.id -> studentIndex

  let students = await read("data.json");
  students = students.filter((_, index) => index !== Number(req.params.id));
  await write("data.json", students);

  return res.send(
    `Student with index: ${req.params.id}, deleted successfully!`
  );
};

module.exports = {
  getStudents,
  addStudent,
  editStudent,
  deleteStudent,
};
