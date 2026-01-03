function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const convertedTemperatureElement = document.getElementById('convertedTemperature');
    const temperatureIcon = document.getElementById('temperatureIcon');
    
    let convertedTemperature;
    if (unitSelect === 'celsius') {
        // Convert Celsius to Fahrenheit
        convertedTemperature = (temperatureInput * 9/5) + 32;
        temperatureIcon.src = 'celsius-icon.png';
    } else {
        // Convert Fahrenheit to Celsius
        convertedTemperature = (temperatureInput - 32) * 5/9;
        temperatureIcon.src = 'fahrenheit-icon.png';
    }

    convertedTemperatureElement.textContent = convertedTemperature.toFixed(2);
    temperatureIcon.style.display = 'inline';
}
