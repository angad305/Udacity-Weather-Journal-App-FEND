// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-Parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));




//Get Route
app.get('/all', sendData);

function sendData(req, res) {
    res.send('GET: Hi Angad');
    res.send(projectData);
    console.log(sendData);
};

//Post Route
app.post('/add', postData);

function postData(req, res) {
    projectData = req.body;
    res.post('Post: Recieved')
    console.log(projectData);
    res.end();
};


// Setup Server
const port = 5500;
const server = app.listen(port, '127.0.0.1', listening);

function listening() {
    console.log(`Running server on port ${port}`);
};