function getForecast() {
const options = {
  method: 'GET',
  url: 'https://api.weatherapi.com/v1/forecast.json',
  params: {
    key: 'f2119a1539f146fd8ef90643231107',
    q: 'London',
    days: '1',
    aqi: 'no',
    alerts: 'no'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
    const info = response.data;
    const temperature = document.querySelector(".temperature");
    const location = document.querySelector(".location");
    const description = document.querySelector(".description");
    temperature.innerText = info.current.temp_c + "°C";
    location.innerText = info.location.name;
    description.innerText = info.current.condition.text;
}).catch(function (error) {
  console.error(error);
});
}
getForecast();