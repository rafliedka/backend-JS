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

      res.status(200).json(data);
  };

  //method show
  async show() {
    
  }

  //method store
  async store(req, res) {
    const { name, nim, email, jurusan, created_at, updated_at } = req.body;
    Student.create(name, nim, email, jurusan, created_at, updated_at);
    const students = await Student.all();

    const data = {
      message: `Menambahkan data pelajar`,
      data: students,
    };

    res.status(201).json(data);
  }

  //method update
  async update(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      const student = await Student.update(id, req.body);

      const data = {
        message: `update data pelajar`,
        data: student,
      };

      res.status(201).json(data);
    } else {
      const data = {
        message : `Data Pelajar tidak ada`,
      };

      res.status(404).json(data);
    }
  }

  //method destroy
  async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message : `data pelajar dihapus`,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message : `data pelajar tidak ditemukan`,
      };

      res.status(404).json(data);
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
