const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "logistica",
  port: "3306",
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/pesquisar", (req, res) => {
  connection.connect(function (error) {
    if (error) throw error;
    else
      connection.query("SELECT * FROM POLICIAL", function (error, result) {
        if (error) throw error;
        const data = Object.values(result);
        res.json(data);
        console.log(data);
      });
  });
});

app.get("/pesquisar/:id", (req, res) => {
  connection.connect(function (error) {
    if (error) throw error;
    else
      connection.query(
        `SELECT * FROM POLICIAL WHERE RE=${req.params.id}`,
        function (error, result) {
          if (error) throw error;
          const data = Object.values(result);
          res.json(data);
          console.log(data);
        }
      );
  });
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
