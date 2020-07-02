/* Global Variables */
const serverURL = 'https://localhost:1200/weather' // url to the route weather
// API key
const APIKey = '&appid=9dc214b2626c9ab862c5cee625198586';
const url = 'https://api.openweathermap.org/data/2.5/weather?zip=';


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getMonth()}.${d.getDate()}.${d.getFullYear()}`;

// Adding event listener to the button with the id generate
document.getElementById('generate').addEventListener('click' ,function fetchWeatherData(){

    const zip = document.querySelector('#zip').value;
    
    fetch(url+zip+APIKey).then(response => response.json()).then(data => {
    
        const city = data['name'];
        const description = data['weather'][0]['description'];
        const temp = data['main']['temp'];
    
        document.querySelector('#date').innerHTML = newDate;
        document.querySelector('#temp').innerHTML = temp;
        document.querySelector('#content').innerHTML = `${city} - ${description}`;
    
        return data;
    })
    
    .then((data) => {
      
        const serverData = {temprature: 
            data['main']['temp'],
            date: newDate,
            userResponse: document.getElementById('feelings').value
        };
      
        fetch(serverURL , {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(serverData)
     
        })
    
    }
    );
})