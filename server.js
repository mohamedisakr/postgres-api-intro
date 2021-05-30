const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
// use requests parser of type content-type 'application/json'
app.use(express.urlencoded({ extended: true }));
// To parse the incoming requests with JSON payloads
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "this is homepage" });
});

app.use("/departments", require("./routes/departments"));

const PORT = 5000; //process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
