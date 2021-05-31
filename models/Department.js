const Sequelize = require("sequelize");
const db = require("../config/db");

const Department = db.define(
  "department",
  {
    department_id: {
      type: Sequelize.UUIDV4,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
      comment: null,
      primaryKey: true,
      field: "department_id",
      autoIncrement: false,
    },
    department_title: {
      type: Sequelize.CHAR(100),
      allowNull: false,
      defaultValue: null,
      unique: true,
      comment: null,
      primaryKey: false,
      field: "department_title",
      autoIncrement: false,
    },
  },
  {
    tableName: "departments",
    comment: "",
    indexes: [
      {
        name: "departments_index01",
        unique: false,
        fields: ["department_title"],
      },
    ],
  }
);

module.exports = Department;
