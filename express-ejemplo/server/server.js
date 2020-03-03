const express = require('express')
const app = express()
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

