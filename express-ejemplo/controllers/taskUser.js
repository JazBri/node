const mysql = require("mysql");

//Funcion that saves the necessary data
const dataSql = () => {
  return mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });
};

//Function that shows the whole row
exports.show = (req, res) => {
  const connection = dataSql();
  connection.query("SELECT * FROM tasksUsers", function(err, rows, fields) {
    if (err) throw err;
    res.json({ taskUser: rows });
  });
  connection.end();
};

//Function that shows one task from the table according to its ID
exports.showOne = (req, res) => {
  const connection = dataSql();
  connection.query(`SELECT * FROM tasks WHERE id = ${req.body.id}`, function(
    err,
    rows,
    fields
  ) {
    if (err) throw err;
    res.json(rows);
  });
};

exports.insert = (req, res) => {
  const connection = dataSql();
  const { idTask, idUser } = req.body;
  let sql = `INSERT INTO tasksUsers (idTask, idUser) VALUES (?, ? )`;
  connection.query(sql, [idTask, idUser], function(err, results) {
    if (err) throw err;
    res.json(results);
  });
};
/*
exports.insert = (req, res) => {
  const connection = dataSql();
  const { idTask, idUser } = req.body;
  let sql = `INSERT INTO tasksUsers (idTask) VALUES (? ) WHERE (idUser) === (?)`;
  connection.query(sql, [idTask, idUser], function(err, results) {
    if (err) throw err;
    res.json(results);
  });
};
*/
