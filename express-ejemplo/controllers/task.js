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
    connection.connect();
    connection.query("SELECT * FROM tasks", function(err, rows, fields) {
    if (err) throw err;
    res.json({task: rows});
    });
    connection.end();
};

//Function that inserts a task in the table
exports.insert = (req, res) => {
    const connection = dataSql();
    const data = req.body;
    connection.connect();
    connection.query(
    "INSERT INTO tasks (title, description, isDone) VALUES ('" +
        data.title +
        "','" +
        data.description +
        "','" +
        data.isDone +
        "')",
        function(err, result) {
        if (err) throw err;
        res.json("Insertó el registro");
    }
    );
    connection.end();
    console.log(data.title);
    res.json(data);
};

//Function that removes one task from the table according to its ID
exports.delete = (req, res) => {
    const connection = dataSql();
    const sql = "DELETE FROM tasks WHERE id=" + req.params.id + ";";
    connection.connect();
    connection.query(sql, function(err, rows, fields) {
    if (err) throw err;
    res.json(rows);
    });
    connection.end();
};

//Function that shows one task from the table according to its ID
exports.showOne = (req, res) => {
    const connection = dataSql();
    connection.query(
    "SELECT * FROM tasks WHERE id = " + req.params.id + ";",
    function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    }
    );
};

//Function that modifies the state 'isDone' of a table task
//----------------------------
exports.update = (req, res) => {
    const connection = dataSql();
    connection.query(
    "UPDATE tasks SET isDone = " + !isDonde + " WHERE id = " + req.params.id  + ";",
    function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    }
    );
    connection.end();
};

exports.showOne = (req, res) => {
    const connection = dataSql();
    connection.query(
    "SELECT * FROM tasks WHERE id = " + req.params.id + ";",
    function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    }
    );
};
//Function that shows one task from the table according to its title
// exports.showOneTitle = ( req, res) =>{
//     const connection = dataSql();
//     connection.query(
//         "SELECT * FROM tasks WHERE = ",
//         function (err, rows, fields){
//             if (err) throw err;
//             res.json(rows);
//         }
//     )
// }


