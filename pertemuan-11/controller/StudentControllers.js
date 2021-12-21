//import api
const { post, put } = require("../routes/api");

//membuat class StudentController
class StudentControllers {
  index(req, res) {
      const data = {
          message: `Menampilkan data semua pelajar`,
          data: [],
      }
      res.json(data);
    };

    store(req, res) {
        const { nama } = req.body;
        const data = {
            message: `Menambahkan data pelajar : ${nama}`,
            data: [],
        };
    res.json(data);
    };

    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;

        const data = {
            message: `Update data pelajar dengan id = ${id} dan nama = ${nama}`,
            data: [],
        };
    res.send(data);
    };

    destroy(req, res) {
        const { id } = req.params;

        const data = {
            message: `Hapus data pelajar dengan id = ${id}`,
            data: []
        };
    res.send(data);
    };
}

//membuat object StudentControllers
const object = new StudentControllers();

//export modul StudentController
module.exports = object;