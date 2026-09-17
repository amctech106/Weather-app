// ان پٹ اور بٹن کو سلیکٹ کیا
const takeInput = document.querySelector("#take-input");
const checkBtn = document.querySelector("#check");
const refreshBtn = document.querySelector("#reset");
takeInput.value = localStorage.getItem("saveInp") || "";

//ٹیبل کا پہلے کالمز سلیکٹ کیا

const label2 = document.querySelector("#label2");
const label3 = document.querySelector("#label3");
const label4 = document.querySelector("#label4");
const label5 = document.querySelector("#label5");
const label6 = document.querySelector("#label6");
const label7 = document.querySelector("#label7");
const label8 = document.querySelector("#label8");

// ٹیبل کے دوسرے کالمز کو سلیکٹ کیا

const para1 = document.querySelector("#para1");
const para2 = document.querySelector("#para2");
const para3 = document.querySelector("#para3");
const para4 = document.querySelector("#para4");
const para5 = document.querySelector("#para5");
const para6 = document.querySelector("#para6");
const para7 = document.querySelector("#para7");
const para8 = document.querySelector("#para8");

// چیک بٹن کلک کرنے پر یہ فنکشن چلے گا ۔

checkBtn.addEventListener("click", async function (event) {
  try {
    event.preventDefault();

    const city = takeInput.value.trim();
    localStorage.setItem("saveInp", city);

    if (city === "") {
      para1.innerHTML = "Please Enter any City Name";

      label2.innerHTML = "";
      para2.innerHTML = "";

      label3.innerHTML = "";
      para3.innerHTML = "";

      label4.innerHTML = "";
      para4.innerHTML = "";

      label5.innerHTML = "";
      para5.innerHTML = "";

      label6.innerHTML = "";
      para6.innerHTML = "";

      label7.innerHTML = "";
      para7.innerHTML = "";

      label8.innerHTML = "";
      para8.innerHTML = "";
      return;
    }
    const result = await axios(
      `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&q=${city}`,
    );

    takeInput.value = "";

    para1.innerHTML = `<i class="fa-solid fa-cloud"></i>`;

    label2.innerHTML = "Temp";
    para2.innerHTML = `${Math.floor(result.data.current.temp_c)}°C `;

    label3.innerHTML = "Feeling";
    para3.innerHTML = `${Math.floor(result.data.current.feelslike_c)}`;

    label4.innerHTML = "Humidity";
    para4.innerHTML = `${result.data.current.humidity}`;

    label5.innerHTML = "Wind Kph";
    para5.innerHTML = `${result.data.current.wind_kph}`;

    label6.innerHTML = "Country";
    para6.innerHTML = `${result.data.location.country}`;

    label7.innerHTML = "Province";
    para7.innerHTML = `${result.data.location.region}`;

    label8.innerHTML = "City";
    para8.innerHTML = `${result.data.location.name}`;
  } catch (error) {
    para1.innerHTML = error.response.data.error.message;

    label2.innerHTML = "";
    para2.innerHTML = "";

    label3.innerHTML = "";
    para3.innerHTML = "";

    label4.innerHTML = "";
    para4.innerHTML = "";

    label5.innerHTML = "";
    para5.innerHTML = "";

    label6.innerHTML = "";
    para6.innerHTML = "";

    label7.innerHTML = "";
    para7.innerHTML = "";

    label8.innerHTML = "";
    para8.innerHTML = "";
  }
});
