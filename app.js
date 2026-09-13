// ان پٹ اور بٹن کو سلیکٹ کیا
const takeInput = document.querySelector("#take-input");
const checkBtn = document.querySelector("#check");
const refreshBtn = document.querySelector("#reset");

// پیراگرافس کو سلیکٹ کیا ہے

const para1 = document.querySelector("#para1");
const para2 = document.querySelector("#para2");
const para3 = document.querySelector("#para3");
const para4 = document.querySelector("#para4");
const para5 = document.querySelector("#para5");
const para6 = document.querySelector("#para6");
const para7 = document.querySelector("#para7");
const para8 = document.querySelector("#para8");

//  ڈیٹا کو دکھانے والا فنکشن بنالیا ہے 

function showWeather(data) {
  para1.innerHTML = `<i class="fa-solid fa-cloud"></i>`

  document.querySelector("#label2").innerHTML = "Temp"
  para2.innerHTML = `°C ${Math.floor(data.current.temp_c)}`

  document.querySelector("#label3").innerHTML = "Feeling"
  para3.innerHTML = `${Math.floor(data.current.feelslike_c)}`

  document.querySelector("#label4").innerHTML = "Humidity"
  para4.innerHTML = `${data.current.humidity}`

  document.querySelector("#label5").innerHTML = "Wind Kph"
  para5.innerHTML = `${data.current.wind_kph}`

  document.querySelector("#label6").innerHTML = "Country"
  para6.innerHTML = `${data.location.country}`

  document.querySelector("#label7").innerHTML = "Province"
  para7.innerHTML = `${data.location.region}`

  document.querySelector("#label8").innerHTML = "City"
  para8.innerHTML = `${data.location.name}`
 
}

// چیک بٹن کلک کرنے پر یہ فنکشن چلے گا ۔ 

checkBtn.addEventListener("click", async function (event) {
  event.preventDefault();

  const city = takeInput.value.trim();

  const result = await axios(
    `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&q=${city}`,
  );

  takeInput.value =""

  localStorage.setItem("weatherData",JSON.stringify(result.data))

  refreshBtn.style.display="block"
  showWeather(result.data)
 
});

const saved = localStorage.getItem("weatherData");
if (saved) {
  showWeather( JSON.parse(saved));
  refreshBtn.style.display = "block";
}

refreshBtn.addEventListener("click", function () {
  localStorage.removeItem("weatherData");

  para1.innerHTML = "";
  para2.innerHTML = "";
  para3.innerHTML = "";
  para4.innerHTML = "";
  para5.innerHTML = "";
  para6.innerHTML = "";
  para7.innerHTML = "";
  para8.innerHTML = "";

  document.querySelector("#label2").innerHTML = "";
  document.querySelector("#label3").innerHTML = "";
  document.querySelector("#label4").innerHTML = "";
  document.querySelector("#label5").innerHTML = "";
  document.querySelector("#label6").innerHTML = "";
  document.querySelector("#label7").innerHTML = "";
  document.querySelector("#label8").innerHTML = "";
  document.querySelector(".reset").display ="none"
});
