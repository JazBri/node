const mysql = require('mysql')

const dataSql = () => {
    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    })
}

    exports.show = ( req, res ) => {
        const connection = dataSql();
        connection.connect();
        connection.query("SELECT * FROM tasks", function( err, rows, fields){
        if(err) throw err;
        res.json(rows)
        })
        connection.end()
    }

    exports.insert = ( req, res ) => {
        const connection = dataSql();
        const data = req.body;
        connection.connect();    
        connection.query("INSERT INTO tasks (title, description, isDone) VALUES ('" + data.title + "','" + data.description +"','" + data.isDone +"')", function (err, result) {
        if (err)
            throw err;
            res.json('Insertó el registro');
            });
            connection.end()
        console.log(data.title);
        res.json(data);    
    }

    exports.delete = ( req, res) =>{
        const connection = dataSql();
        
        const sql = "DELETE FROM tasks WHERE id=" + req.params.id + ";";
        connection.connect();
        connection.query(sql, function( err, rows, fields){
            if(err) throw err;
            res.json(rows);
            })   
            connection.end()
        }

    exports.modify = ( req, res ) =>{
        const connection = dataSql();
        const data = req.body;
        console.log(data)
        //UPDATE tasks SET isDone = 0 WHERE id = 1;UPDATE tasks SET isDone = 0  WHERE id = 1;
    
        connection.connect();
        connection.query(sql, function( err, rows, fields){
            if(err) throw err;
            res.json(rows);
            })   
            connection.end()
    }