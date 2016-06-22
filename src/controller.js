$(document).ready(function(){
  var thermostat = new Thermostat();

  function updateTemperatureOutput() {
    $('#output-temperature').text(thermostat.temperature);
    $('#output-temperature, #thermometer-bar').attr('class', thermostat.energyConsumption());
    $('#thermometer-bar').height(thermostat.temperatureConvertToPercentage());
  };

  updateTemperatureOutput();

  function updatePowerSavingMode() {
    var powerSavingMode =  thermostat.isPowerSavingOn ? "On" : "Off";
    $('#input-toggle').text(powerSavingMode);
  };

  updatePowerSavingMode();

  $('#input-increase').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperatureOutput();
  });

  $('#input-decrease').on('click', function() {
    thermostat.decreaseTemperature();
    updateTemperatureOutput();
  });

  $('#input-toggle').on('click', function() {
    thermostat.togglePowerSavingMode();
    updatePowerSavingMode();
    updateTemperatureOutput();
  });

  $('#input-reset').on('click', function() {
    thermostat.reset();
    updateTemperatureOutput();
    updatePowerSavingMode();
  });
});
