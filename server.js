const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const database = require("./config/database");

// load env vars
// dotenv.config({ path: "./config/config.env" });

app.use(cors());
// use requests parser of type content-type 'application/json'
app.use(express.urlencoded({ extended: true }));
// To parse the incoming requests with JSON payloads
app.use(express.json());

// dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send({ message: "this is homepage" });
});

// Routes files
const departmentsRouter = require("./routes/departments");
app.use(process.env.DEPARTMENT_ROUTE, departmentsRouter);

const PORT = process.env.PORT; //5000;
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));

// test postgres connection
// database
//   .authenticate()
//   .then(() => console.log("Postgres database connected"))
//   .catch((err) => console.log(`Can not connect to postgres database : ${err}`));
