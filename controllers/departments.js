exports.create = (req, res) => {
  const { department_id, department_title } = req.body;
  const newDepartment = { department_id, department_title }; //Object.assign({ department_id, department_title });
  res.status(200).json({
    message: `create new department ${newDepartment}`,
  });
};

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
