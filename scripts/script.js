// script.js
// This file:
// - fills in current year and document lastModified
// - calculates and displays the windchill using calculateWindChill()
// - obeys rules for windchill applicability

document.addEventListener("DOMContentLoaded", () => {
  // Insert current year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Insert last modified
  document.getElementById("lastModified").textContent = document.lastModified || "Unknown";

  // STATIC sample weather values (as required by the assignment)
  // These should match the displayed static values in the HTML:
  const temperatureC = Number(document.getElementById("temp").textContent); // degrees Celsius (static)
  const windKmh = Number(document.getElementById("wind").textContent); // km/h (static)

  // calculateWindChill must be a single-line function that returns the windchill
  // using the commonly used Canadian/metric formula:
  // WCI = 13.12 + 0.6215*T - 11.37*(v^0.16) + 0.3965*T*(v^0.16)
  // where T is °C and v is km/h.
  // The function below returns the computed value; rounding is done later.
  const calculateWindChill = (T, v) => 13.12 + 0.6215 * T - 11.37 * Math.pow(v, 0.16) + 0.3965 * T * Math.pow(v, 0.16);

  // Check viability rules:
  // Metric: Temperature <= 10 °C and wind speed > 4.8 km/h
  const wcElement = document.getElementById("windchill");
  if (Number.isFinite(temperatureC) && Number.isFinite(windKmh) &&
      temperatureC <= 10 && windKmh > 4.8) {
    const wc = calculateWindChill(temperatureC, windKmh);
    // Display with one decimal place
    wcElement.textContent = `${wc.toFixed(1)} °C`;
  } else {
    wcElement.textContent = "N/A";
  }
});
