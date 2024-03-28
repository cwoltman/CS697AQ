window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    const convertButton = document.getElementById("convertButton");
    convertButton.addEventListener("click", handleConvert);
 }
 
 function handleConvert() {
    const cInput = document.getElementById("cInput");
    const fInput = document.getElementById("fInput");
    const errorMessage = document.getElementById("errorMessage");
 
    errorMessage.textContent = "";
 
    const celsius = parseFloat(cInput.value);
    const fahrenheit = parseFloat(fInput.value);
 
    if (isNaN(celsius) && isNaN(fahrenheit)) {
       errorMessage.textContent = "Please enter a value in Celsius or Fahrenheit.";
       return;
    }
 
    if (!isNaN(celsius)) {
       fInput.value = convertCtoF(celsius);
    }
 
    if (!isNaN(fahrenheit)) {
       cInput.value = convertFtoC(fahrenheit);
    }
 }
 

function convertCtoF(degreesCelsius) {
   return (degreesCelsius * 9/5) +32;
}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit  - 32) * 5/9;
}
