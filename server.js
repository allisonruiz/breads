const express = require('express')

// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
console.log(PORT)

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Routes
app.get('/', (req,res) => {
    res.send("BreadCrud");
});

//Breads
const breadsController = require("./controllers/breads_controller.js");
app.use("/breads", breadsController);

app.listen(PORT, () => {
    console.log("nomming at port", PORT);
});