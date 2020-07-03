// Setup empty JS object to act as endpoint for all routes
let projectData = {
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
    console.log("Running on http://localhost:1200");
})

app.get('/weather' , (req , res) => {
    console.log("project data: " , projectData)
    res.send(projectData.weatherData[projectData.weatherData.length-1]);
})
app.post('/weather' , (req , res) => {
    console.log(`Request's Body: ${JSON.stringify(req.body)}`);
    const { temperature, date, feelings } = req.body
    console.log({temperature, date , feelings})
    projectData.weatherData.push( { temperature, date, feelings });
    console.log(projectData)
    res.send({ success: true}) // sending a success message
    })