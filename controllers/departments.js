const Department = require("../models/Department");

exports.create = async (req, res) => {
  const { department_id, department_title } = req.body;

  try {
    const newDepartment = await Department.create({
      department_id,
      department_title,
    });

    return res.status(200).json(newDepartment);
  } catch (err) {
    console.error(err);
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const resultSet = await Department.findAll();
    return res.status(200).json(resultSet);
  } catch (err) {
    console.error(err);
  }
};

exports.findById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const dept = await Department.findByPk(id);
    res.status(200).json(dept);
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving department with id=" + id,
    });
  }
};

exports.updateOne = async (req, res, next) => {
  const id = req.params.id;
  const { department_title } = req.body;

  try {
    const num = await Department.update(department_title, { where: { id } });

    if (num.length > 0) {
      res.send({
        message: "department was updated successfully.",
      });
    } else {
      res.send({
        message: `Cannot update department with id=${id}. Maybe department was not found or req.body is empty!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: `Error updating department with id = ${id}, ${err.message}`,
    });
    console.log(err.message);
  }
};

exports.deleteOne = async (req, res, next) => {
  const department_id = req.params.id;

  try {
    const num = await Department.destroy({ where: { id: department_id } });

    if (num == 1) {
      res.send({
        message: "department was deleted successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete department with id = ${department_id}. Maybe department was not found!`,
      });
    }
  } catch (err) {
    // res.status(500).send({
    res.send({
      message: `Could not delete department with id = ${department_id}: ${err.message}`, //  err.message, //
    });
  }
};

/*
exports.findAll = (req, res, next) => {
  res.status(200).json({ message: "welcome to departments page" });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `get info about department with id ${id}` });
};

exports.updateOne = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `update department with id ${id}` });
};

exports.deleteOne = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `delete department with id ${id}` });
};

exports.deleteAll = (req, res) => {
  res.status(200).json({ message: `delete all departments` });
};
*/
