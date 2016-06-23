$(document).ready(function(){
  var thermostat = new Thermostat(undefined, 1);

  function updateTemperatureOutput() {
    $('#output-temperature').text(thermostat.temperature);
    $('#thermometer-bar').attr('class', thermostat.energyConsumption() + "-usage");
    $('#thermometer-bar').height(thermostat.temperature / 32 * 100 + '%');
    $('#location-select').hide();
  };

  updateTemperatureOutput();

  function updatePowerSavingMode() {
    var powerSavingMode =  thermostat.isPowerSavingOn ? 'On' : 'Off';
    $('#powersaving-toggle').text(powerSavingMode);
  };

  updatePowerSavingMode();

  $('#thermostat-increase').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperatureOutput();
  });

  $('#thermostat-decrease').on('click', function() {
    thermostat.decreaseTemperature();
    updateTemperatureOutput();
  });

  $('#powersaving-toggle').on('click', function() {
    thermostat.togglePowerSavingMode();
    updatePowerSavingMode();
    updateTemperatureOutput();
  });

  $('#thermostat-reset').on('click', function() {
    thermostat.reset();
    updateTemperatureOutput();
    updatePowerSavingMode();
  });

  $('#location-form').on('submit', function(event){
    event.preventDefault();
    var query = $(event.currentTarget).serializeArray();
    var autocompleteUrl = 'http://autocomplete.wunderground.com/aq';

    $.ajax({
      url: autocompleteUrl,
      jsonp: 'cb',
      dataType: 'jsonp',
      data: {
        query: query[0].value,
        format: 'json'
      },
      success: function(response){
        var data = response.RESULTS;
        $('#location-select select').empty();

        for (var i = 0; i < data.length; i++){
          $('#location-select select').append('<option value=' + data[i].l + '>' + data[i].name + '</option>')
        }

        $('#location-select').fadeIn();
      }
    });

  });

  $('#location-select').on('submit', function(event){
    event.preventDefault();
    var query = $(event.currentTarget).serializeArray();
    var url = 'http://api.wunderground.com/api/' + wundergroundID + '/conditions/' + query[0].value + '.json';

    $.get(url, function(data){
      var weather = data.current_observation.weather;
      var temperature = data.current_observation.feelslike_c;
      $('#output-weather').text(weather + ', ' + temperature + "°C");
    });
  });
});
