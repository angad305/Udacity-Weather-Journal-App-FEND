/* Global Variables */
const apiKey = 'xxxx';

//Event Listener to retrieve Data
document.getElementById('generate').addEventListener('click', updateWeather);

console.log('i work');

//Function to Update Weather from user entered zip
function updateWeather(e) {
    e.preventDefault();
    zipCode = document.getElementById('zip').value;
    console.log(zipCode);
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`
    let userResponse = document.getElementById('feelings').value;
    console.log(userResponse);
    getWeatherData(baseUrl)
        .then(function weatherDataLogging(dataReceived) {
            const temp = dataReceived.main.temp;
            console.log(temp);

            postData('/add', {
                temp,
                userResponse,
                
            })
        });
};


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

//Async Get Weather Info *OpenWeather API*
const getWeatherData = async (url) => {
    const request = await fetch(url);
    try {
        const allData = await request.json();
        console.log(allData);
        return allData;
    } catch (error) {
        console.log('Error during fetch: ', error);
    }
};

//Async Post to Server
async function postData(url, data) {
    console.log(url);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }
      catch(error) {
      console.log("error", error);
      }
};
