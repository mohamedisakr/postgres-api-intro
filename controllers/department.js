exports.create = (req, res) => {
  const { department_id, department_title } = req.body;
  const newDepartment = Object.assign({ department_id, department_title });
  res.send({
    message: `create new department ${newDepartment}`,
  });
};

exports.findAll = (req, res) => {
  res.send({ message: "welcome to departments page" });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  res.send({ message: `get info about department with id ${id}` });
};

exports.updateOne = (req, res) => {
  const id = req.params.id;
  res.send({ message: `update department with id ${id}` });
};

exports.deleteOne = (req, res) => {
  const id = req.params.id;
  res.send({ message: `delete department with id ${id}` });
};

exports.deleteAll = (req, res) => {
  res.send({ message: `delete all departments` });
};
