var thermostat = new Thermostat();
var outputTemperature = document.getElementById("output-temperature");
var outputPowerSaving = document.getElementById("output-powersaving");

function updatePowerSavingMode() {
  var powerSavingMode =  thermostat.isPowerSavingOn ? "On" : "Off";
  outputPowerSaving.innerHTML = powerSavingMode;
};

updatePowerSavingMode();

function updateTemperatureText() {
  outputTemperature.innerHTML = thermostat.temperature;
};

updateTemperatureText();

var inputIncrease = document.getElementById("input-increase");
inputIncrease.onclick = function() {
  thermostat.increaseTemperature();
  updateTemperatureText();
};

var inputDecrease = document.getElementById("input-decrease");
inputDecrease.onclick = function() {
  thermostat.decreaseTemperature();
  updateTemperatureText();
};

var inputToggle = document.getElementById("input-toggle");
inputToggle.onclick = function() {
  thermostat.togglePowerSavingMode();
  updatePowerSavingMode();
};

var inputReset = document.getElementById("input-reset");
inputReset.onclick = function() {
  thermostat.reset();
  updateTemperatureText();
};
