const express = require("express");
const router = express();
const department = require("../controllers/department");

module.exports = () => {
  router.get("/", department.findAll);
  //   router.get("/", (req, res) => {
  //     res.send({ message: "welcome to departments page" });
  //   });

  // Retrieve a single department with id
  router.get("/:id", department.findById);

  // Create a new department
  router.post("/", department.create);

  // Update a department with id
  router.put("/:id", department.updateOne);

  // Delete a departments with id
  router.delete("/:id", department.deleteOne);

  // Delete all departments
  router.delete("/", department.deleteAll);
};
