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
 
    let celsius = parseFloat(cInput.value);
    let fahrenheit = parseFloat(fInput.value);
 
    if (!isNaN(celsius)) {
       fInput.value = "";
    } else if (!isNaN(fahrenheit)) {
       cInput.value = "";
    }
 
    if ((isNaN(celsius) && isNaN(fahrenheit)) || (!isNaN(celsius) && !isNaN(fahrenheit))) {
       errorMessage.textContent = "Please enter a value in only one of the fields.";
       return;
    }
 
    if (!isNaN(celsius)) {
       const convertedFahrenheit = convertCtoF(celsius);
       fInput.value = convertedFahrenheit;
       updateImage(convertedFahrenheit);
    }
 
    if (!isNaN(fahrenheit)) {
       const convertedCelsius = convertFtoC(fahrenheit);
       cInput.value = convertedCelsius;
       updateImage(fahrenheit);
    }
 
    if (isNaN(celsius) && cInput.value !== "") {
       errorMessage.textContent = `${cInput.value} is not a number`;
    }
 
    if (isNaN(fahrenheit) && fInput.value !== "") {
       errorMessage.textContent = `${fInput.value} is not a number`;
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
