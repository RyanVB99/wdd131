document.addEventListener("DOMContentLoaded", function() {
    var lastModified = document.lastModified;
    console.log("Last Modified Date and Time: " + lastModified);
    document.getElementById("lastModified").innerHTML = "<br>Last Modified: " + lastModified;
});

var temperature = parseInt(document.getElementById("temperature").textContent);
var windspeed = parseInt(document.getElementById("windSpeed").textContent);

function calculateWindChill(temperature, windSpeed) {
    var windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    return Math.round(windChill);
}

function displayWindChill(temperature, windspeed) {
    if (temperature <= 10 && windspeed >= 5) {
        var windChill = calculateWindChill(temperature, windspeed);
        document.getElementById("windChill").innerHTML = windChill + "&deg;C";
    } else {
        document.getElementById("windChill").innerHTML = "N/A";
    }
}

displayWindChill(temperature, windspeed);