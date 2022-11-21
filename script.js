const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '06ab9a8b7cmsh2a57066e0b67214p172eaajsnc5e25b83ce54',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

let cityNameDiv = document.getElementById('city-name')
let weatherTypeDiv = document.getElementById('weather-type')
let tempDiv = document.getElementById('temp')
let minTempDiv = document.getElementById('min-temp')
let maxTempDiv = document.getElementById('max-temp')



getWeatherData = (city) => {
  let cityName = city

  let url = 'https://open-weather13.p.rapidapi.com/city/'
  let wholeThing = `${url}${cityName}`

  fetch(wholeThing, options)
    .then(response => response.json())
    .then(data => {
        let weatherData1 = {
        'city':cityName, 
        'cloud_status':data.weather[0].main,
        'temp': data.main.temp,
        'min_temp': data.main.temp_min,
        'max_temp': data.main.temp_max
      }
      showWeatherData(weatherData1)

  



    })
    .catch(err => console.error(err));





}


const searchCity = () => {
  const city = document.getElementById('city-input').value;
  
  getWeatherData(city)
}


const showWeatherData = (weatherData) => {
  let localWeatherData=weatherData
  cityNameDiv.innerText=localWeatherData.city
  
  weatherTypeDiv.innerText=localWeatherData.cloud_status

  tempDiv.textContent=Number(localWeatherData.temp)
  minTempDiv.innerHTML=localWeatherData.min_temp
  maxTempDiv.innerHTML=localWeatherData.max_temp


}

