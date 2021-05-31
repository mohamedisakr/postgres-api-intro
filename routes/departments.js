const express = require("express");
const router = express();
const {
  create,
  findAll,
  findById,
  updateOne,
  deleteOne,
  deleteAll,
} = require("../controllers/departments");

router.route("/").get(findAll).post(create).delete(deleteAll);
router.route("/:id").get(findById).put(updateOne).delete(deleteOne);

module.exports = router;
