// ان پٹ اور بٹن کو سلیکٹ کیا
const takeInput = document.querySelector("#take-input");
const checkBtn = document.querySelector("#check");

// پیراگرافس کو سلیکٹ کیا ہے

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
  event.preventDefault();

  const city = takeInput.value.trim();

  const result = await axios(
    `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&q=${city}`,
  );
console.log(result)
  takeInput.value =""

  para1.innerHTML = ` <i data-lucide="cloud"></i>
  ${result.data.current.cloud}`
 para2.innerHTML= `°C ${result.data.current.temp_c}`
});

