const input = document.getElementById("input");
const bottom = document.getElementById("bottom");
async function search(){
    console.log("search");
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`)
    const data = await res.json()
    console.log(data);
    bottom.innerHTML = `
    <div class="card">
         <div class="city">
             <h2>Weather of ${input.value}</h2>
         </div>
         <div class="temp">
             <p>Sky Conditions : ${data.weather[0].description}</p>
             <p>Temperature : ${data.main.temp} Celsius</p>
             <p>Wind Speed : ${data.wind.speed} km/h</p>
          </div>`
    input.value = "";
}
async function homepage(){
    const city = "New Delhi" ;
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`)
    const data = await res.json()
    // console.log(data);
    bottom.innerHTML = `
    <div class="card">
         <div class="city">
             <h2>Weather of ${city}</h2>
         </div>
         <div class="temp">
             <p>Sky Conditions : ${data.weather[0].description}</p>
             <p>Temperature : ${data.main.temp} Celsius</p>
             <p>Wind Speed : ${data.wind.speed} km/h</p>
          </div>`
}
homepage()
