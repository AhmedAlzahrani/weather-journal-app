// Setup empty JS object to act as endpoint for all routes
projectData = {
    weatherData: [

    ]
};



// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
//PORT number
const PORT = 1200;

//Listening to PORT
const listening = app.listen(PORT , (req , res) => {
    console.log("Server Running");
    console.log("Running on https://localhost:1200");
})

app.get('/weather' , (req , res) => {
    res.send(projectData);
})
app.post('/weather' , (req , res) => {
    projectData.weatherData.push(req.body);
    console.log(projectData)
})