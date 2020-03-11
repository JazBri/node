/**
 * show();              //Function that shows the whole row
 * insert();            //Function that inserts a user in the table
 * addNewTable();       //Funcion that adds a new table
 * delete();            //Funtion that deletes user table
 * deleteOneUser();         //Function that removes one user from the table according to its ID
 * innerJoin();         //Function that 'inner join' task and user table
 */

//Imported
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
  connection.query("SELECT * FROM users", function(err, rows, fields) {
    if (err) throw err;
    res.json({ user: rows });
  });
  connection.end();
};

//Function that inserts a user in the table

exports.insert = (req, res) => {
  const connection = dataSql();
  const { name, pass } = req.body;
  let sql = `INSERT INTO users (name, pass) VALUES (?, ? )`;
  connection.query(sql, [name, pass], function(err, results) {
    if (err) throw err;
    res.json(results);
  });
};

exports.deleteOneUser = (req, res) => {
  const connection = dataSql();
  const sql = "DELETE FROM users WHERE id=" + req.params.id + ";";
  connection.query(sql, function(err, rows, fields) {
    if (err) throw err;
    res.json(rows);
  });
};

exports.shareUser = (req, res) => {
  const connection = dataSql();
  connection.query(`SELECT * FROM users WHERE id = ${req.body.id}`, function(
    err,
    rows,
    fields
  ) {
    if (err) throw err;
    res.json(rows);
  });
};

//Funcion that adds a new 'user' table
// exports.addNewTable = (req, res) =>{
//     const connection = dataSql();
//     const createUser =
//         `CREATE TABLE user(
//         id INT PRIMARY KEY AUTO_INCREMENT,
//         name VARCHAR(40),
//         last_name VARCHAR (40),
//         description VARCHAR(200)
//     )`;
//     connection.query(createUser,
//         function(err, rows, fields){
//             if(err) throw err;
//             res.json(rows);
//         }
//     )
// }

//Function that 'inner join'
// exports.innerJoin = (req, res) => {
//   const connection = dataSql();
//   connection.query(
//     "SELECT * FROM tasks INNER JOIN user ON  tasks.description = user.description",
//     function(err, rows, fields) {
//       if (err) throw err;
//       res.json(rows);
//     }
//   );
// };
