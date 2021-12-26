//import api
const { post, put } = require("../routes/api");
const studentsData = require("../data/students");

// Membuat Class StudentController
class StudentController {
  //method index
  index(req, res) {
    const data = {
      message: "Menampilkan semua pelajar",
      data: studentsData,
    };

    res.json(data);
  }

  //method store
  store(req, res) {
    const { nama } = req.body;
    studentsData.push(nama);

    const data = {
      message: `Menambahkan data pelajar: ${nama}`,
      data: studentsData,
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
