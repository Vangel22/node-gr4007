const {
  getAllStudents,
  addStudent,
  editStudent,
  deleteStudent,
} = require("./students");

async function main() {
  const students = await getAllStudents();
  console.log("students", students);

  //   await addStudent({ ime: "Stanko", prezime: "Stankovski", godina: 2001 });
  //   await editStudent(0, { prezime: "Doe" });
  await deleteStudent(2);
}

main();
