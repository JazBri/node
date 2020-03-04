/**
 * show();              //Function that shows the whole row
 * insert();            //Function that inserts a user in the table
 * addNewTable();       //Funcion that adds a new table 
 * delete();            //Funtion that deletes user table
 * deleteOne();         //Function that removes one user from the table according to its ID
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
    connection.connect();
    connection.query("SELECT * FROM user", function(err, rows, fields) {
    if (err) throw err;
    res.json({user: rows});
    });
    connection.end();
};

//Function that inserts a user in the table
exports.insert = (req, res) => {
    const connection = dataSql();
    const data = req.body;
    connection.connect();
    connection.query(
    "INSERT INTO user (name, last_name, description) VALUES ('" +
        data.name +
        "','" +
        data.last_name +
        "','" +
        data.description +
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


//Funcion that adds a new 'user' table
exports.addNewTable = (req, res) =>{
    const connection = dataSql();
    const createUser = 
        `CREATE TABLE user(
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(40),
        last_name VARCHAR (40),
        description VARCHAR(200)
    )`;
    connection.query(createUser,
        function(err, rows, fields){
            if(err) throw err;
            res.json(rows);
        }
    )
} 

//Funtion that deletes user table
exports.delete = (req, res) => {
    const connection = dataSql();
    connection.query(
        "DROP TABLE user",
        function(err, rows, fields){
            if(err) throw err;
            res.json(rows);
        }
    )
}

//Function that removes one user from the table according to its ID
exports.deleteOne = (req, res) => {
    const connection = dataSql();
    const sql = "DELETE FROM user WHERE id=" + req.params.id + ";";
    connection.connect();
    connection.query(sql, function(err, rows, fields) {
    if (err) throw err;
    res.json(rows);
    });
    connection.end();
};

//Function that 'inner join'
exports.innerJoin =(req, res) =>{
    const connection = dataSql();
    connection.query("SELECT * FROM tasks INNER JOIN user ON  tasks.description = user.description", function(err, rows, fields){
        if(err) throw err;
        res.json(rows);
    })
}

