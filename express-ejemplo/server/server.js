const express = require('express')
const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    next();
});

const routes = require( '../routes/routes' )
const morgan = require('morgan')
const bodyParser = require('body-parser')
require("dotenv").config()
const port = process.env.DB_PORT;
app.use( morgan( "dev") );
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
routes(app)

app.get("*", (req, res) => res.status(400).send({
	message: "No se encuentra el recurso"
}));

app.listen(port, () => console.log(`App listening on port ${port}!`))

