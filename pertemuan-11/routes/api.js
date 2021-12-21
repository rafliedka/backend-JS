//Import StudentController
const StudentController = require("../controller/StudentControllers");

//import express
const express = require("express");

//buat object router
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Dunia");
});

//Routing Student
router.get("/students", StudentController.index);
router.post("/students", StudentController.store)
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

//export router
module.exports = router;