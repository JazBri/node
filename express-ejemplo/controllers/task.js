/** FUNCTIONS
 * const dataSql();     //Funcion that saves the necessary data
 * show();              //Function that shows the whole row
 * insert();            //Function that inserts a task in the table
 * delete();            //Function that removes one task from the table according to its ID
 * showOne();           //Function that shows one task from the table according to its ID
 * update();            //Function that modifies the state 'isDone' of a table task
 * addNewTable();       //Funcion that adds a new 'taks' table
 * deleteTable();       //Funtion that deletes task table
 * updateTask();        //Function that edit the title and description according to its ID 
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
    // connection.connect();
    connection.query("SELECT * FROM tasks", function(err, rows, fields) {
    if (err) throw err;
    res.json({task: rows});
    });
    // connection.end();
};


exports.insert = (req, res) => {
    const connection = dataSql();
    const { title, description, isDone} = req.body;
    let sql = `INSERT INTO tasks (title, description, isDone) VALUES (?, ?, ? )`;
    connection.query(sql, [ title, description, isDone] ,function(err, results){
        if(err) throw err;
        res.json(results);
    })
};

//
//Function that edit the title and description according to its ID 
exports.updateTask = (req, res) =>{
    const connection = dataSql();
    const { title, description} = req.body;
    let sql = `UPDATE tasks SET title = (?), description = (?) WHERE id = ${req.params.id}`;
    connection.query(
        sql, [ title, description],
        function(err, results) {
        if(err) throw err;
        res.json(results);
    }
    )
    // connection.end();
}


//Function that removes one task from the table according to its ID
exports.delete = (req, res) => {
    const connection = dataSql();
    const sql = "DELETE FROM tasks WHERE id=" + req.params.id + ";";
    // connection.connect();
    connection.query(sql, function(err, rows, fields) {
    if (err) throw err;
    res.json(rows);
    });
    // connection.end();
};

//Function that shows one task from the table according to its ID
exports.showOne = (req, res) => {
    const connection = dataSql();
    connection.query(
        `SELECT * FROM tasks WHERE id = ${req.body.id}` ,
    function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    }
    );
};

//Function that modifies the state 'isDone' of a table task
exports.update = (req, res) => {
    console.log("update", req.params.id)
    const connection = dataSql();
    connection.query(
    "UPDATE tasks SET isDone =  (!isDone)  WHERE id = " + req.params.id  + ";",
    function(err, rows, fields) {
        console.log('Params', req.params)
        if (err) throw err;
        res.json(rows);
        }
    );
    // connection.end();
};

//Funcion that adds a new 'taks' table
exports.addNewTable = (req, res) =>{
    const connection = dataSql();
    const createUser = 
        `CREATE TABLE task(
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(30),
        description VARCHAR(190),
        isDone boll,
        PRIMARY KEY (id)
    )`;
    connection.query(createUser,
        function(err, rows, fields){
            if(err) throw err;
            res.json(rows);
        }
    )
} 



//Funtion that deletes task table
// exports.deleteTable = (req, res) => {
//     const connection = dataSql();
//     connection.query(
//         "DROP TABLE tasks",
//         function(err, rows, fields){
//             if(err) throw err;
//             res.json(rows);
//         }
//     )
// }

