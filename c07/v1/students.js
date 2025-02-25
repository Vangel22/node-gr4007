// CRUD funkcionalnost
const { read, write } = require("./read-write");

// Read
const getAllStudents = async () => {
  const fileContent = await read("data.json");
  return fileContent;
};

// Create
const addStudent = async (studentData) => {
  // studentData = { ime: "Stanko", prezime: "Stankovski", godina: 2001 }
  let students = await read("data.json");
  //   students [
  //     { ime: 'Vangel', prezime: 'Hristov', godina: 1999 },
  //     { ime: 'Pero', prezime: 'Perov', godina: 1987 }
  //   ]
  students.push(studentData);
  //   students [
  //     { ime: 'Vangel', prezime: 'Hristov', godina: 1999 },
  //     { ime: 'Pero', prezime: 'Perov', godina: 1987 },
  //     { ime: "Stanko", prezime: "Stankovski", godina: 2001 }
  //   ]
  await write("data.json", students);
};

// Update
const editStudent = async (studentIndex, studentData) => {
  // { prezime: "Doe" }
  let students = await read("data.json");
  // Vangel e na indeks 0, i sakam da go promenam negovoto prezime vo "Doe"
  students = students.map((student, index) => {
    //student = { ime: 'Vangel', prezime: 'Hristov', godina: 1999 }
    // index = 0

    if (studentIndex === index) {
      // sum go pronasol studentot Vangel
      return {
        // ime: student.ime,
        // prezime: student.prezime,
        // godina: student.godina,
        ...student,
        ...studentData,
        // prezime: studentData.prezime
        // Bidejki prezime klucot se povtoruva, ke se zeme poslednoto pojavuvanje
        // so negovata vrednost
      };
    }

    return student;
  });

  await write("data.json", students);
};

const deleteStudent = async (studentIndex) => {
  let students = await read("data.json");
  students = students.filter((_, index) => index !== studentIndex);
  await write("data.json", students);
};

module.exports = {
  getAllStudents,
  addStudent,
  editStudent,
  deleteStudent,
};
