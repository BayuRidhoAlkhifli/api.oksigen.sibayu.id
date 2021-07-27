require("dotenv").config();
const express = require("express");
const app  = express();
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const routes = {};

fs.readdirSync("./routes/")
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    )
  })
  .forEach((file) => {
    const route = require(path.join(`${__dirname}/routes`, file))(app);
  })


  app.get('/', (req, res) => {
    return res.status(404).send({
      error: "resource not found!"
    })
  })

  app.listen(3009, () => {
    console.log("Server started on port 3009")
  })