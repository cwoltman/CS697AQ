window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    const convertButton = document.getElementById("convertButton");
    convertButton.addEventListener("click", handleConvert);
 }
 
 function handleConvert() {
    const cInput = document.getElementById("cInput");
    const fInput = document.getElementById("fInput");
    const errorMessage = document.getElementById("errorMessage");
    const weatherImage = document.getElementById("weatherImage");

    errorMessage.textContent = "";
 
    const celsius = parseFloat(cInput.value);
    const fahrenheit = parseFloat(fInput.value);
 
    if (isNaN(celsius) && isNaN(fahrenheit)) {
       errorMessage.textContent = "Please enter a value in Celsius or Fahrenheit.";
       return;
    }
 
    if (!isNaN(celsius)) {
       fInput.value = convertCtoF(celsius);
       fInput.value = convertedFahrenheit;
       updateImage(convertedFahrenheit);
    }
 
    if (!isNaN(fahrenheit)) {
       cInput.value = convertFtoC(fahrenheit);
       cInput.value = convertedCelsius;
       updateImage(fahrenheit);
    }
 }

 function updateImage(temperature) {
    const weatherImage = document.getElementById("weatherImage");
    if (temperature < 32) {
       weatherImage.src = "cold.png";
       weatherImage.alt = "Cold";
    } else if (temperature >= 32 && temperature <= 50) {
       weatherImage.src = "cool.png";
       weatherImage.alt = "Cool";
    } else {
       weatherImage.src = "warm.png";
       weatherImage.alt = "Warm";
    }
 }
 
function convertCtoF(degreesCelsius) {
   return (degreesCelsius * 9/5) +32;
}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit  - 32) * 5/9;
}
