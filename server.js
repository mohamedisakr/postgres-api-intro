const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

// load env vars
dotenv.config({ path: "./config/config.env" });

app.use(cors());
// use requests parser of type content-type 'application/json'
app.use(express.urlencoded({ extended: true }));
// To parse the incoming requests with JSON payloads
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "this is homepage" });
});

app.use("/departments", require("./routes/departments"));

const PORT = process.env.PORT; //5000;
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
