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
    fetch(url+zip+APIKey).then(response => response.json()).then((data) => {
        const serverData = {
            temperature: data['main']['temp'],
            date: newDate,
            feelings: document.getElementById('feelings').value
        };
        return serverData;
    }
    ).then((serverData) => {
        fetch(serverURL , {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(serverData)
     
        }).then(() => {
            fetch(serverURL)
            .then(res=> res.json())
            .then(data=>{
                const serverData = data.weatherData[0]
                const date = serverData.date;
                const temperature = serverData.temperature;
                const feeling = serverData.feelings;

                document.querySelector('#date').innerHTML = date;
                document.querySelector('#temp').innerHTML = temperature;
                document.querySelector('#content').innerHTML = feeling; 
            })
        })
    }
    )
})
