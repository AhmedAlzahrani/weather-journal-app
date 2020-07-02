/* Global Variables */

// API key
const APIKey = '9dc214b2626c9ab862c5cee625198586';
const url = 'http://api.openweathermap.org/data/2.5/weather?zip=';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const weather = async (url='' , key='') => {
    console.log(url+key)
    const result = await fetch(url+key);

    try{
        JSON.stringify(result);
        console.log(result)
    }catch(err){
        console.log(err)
    }
}

// Adding event listener to the button with the id generate

document.getElementById('generate').addEventListener('click' , () => {
    const zip = document.getElementById('zip').value;
    weather(url + zip + '&appid=',APIKey);
})