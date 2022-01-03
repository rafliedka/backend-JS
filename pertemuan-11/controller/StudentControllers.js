//import api
const Student = require("../models/Student");
const StudentsData = require("../models/Student");

// Membuat Class StudentController
class StudentController {

  //method index dengan async await
  async index(req, res) {
    //memanggil method all dengan async await
    const students = await Student.all();
    
      const data = {
        message: "Menampilkan semua pelajar",
        data: students,
      };

      res.json(data);
  };

  //method store
  async store(req, res) {
    const { name, nim, email, jurusan, created_at, updated_at } = req.body;
    Student.create(name, nim, email, jurusan, created_at, updated_at);
    const students = await Student.all();

    const data = {
      message: `Menambahkan data pelajar`,
      data: students,
    };

    res.json(data);
  }

  //method update
  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    studentsData[id] = nama;

    const data = {
      message: `update data pelajar id ${id}, nama ${nama}`,
      data: studentsData,
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    studentsData.splice(id, 1);

    const data = {
      message: `Menghapus data pelajar id ${id}`,
      data: studentsData,
    };

    res.json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
