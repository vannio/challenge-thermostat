var thermostat = new Thermostat();

function updateTemperatureText() {
  $('#output-temperature').text(thermostat.temperature);
};

updateTemperatureText();

function updatePowerSavingMode() {
  var powerSavingMode =  thermostat.isPowerSavingOn ? "On" : "Off";
  $('#output-powersaving').text(powerSavingMode);
};

updatePowerSavingMode();

$('#input-increase').on('click', function() {
  thermostat.increaseTemperature();
  updateTemperatureText();
});

$('#input-decrease').on('click', function() {
  thermostat.decreaseTemperature();
  updateTemperatureText();
});

$('#input-toggle').on('click', function() {
  thermostat.togglePowerSavingMode();
  updatePowerSavingMode();
});

$('#input-reset').on('click', function() {
  thermostat.reset();
  updateTemperatureText();
});