$ (document).ready(function(){
  //I want to display the temperature in the h1
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature());
  $('#temperature-increase').click(function(){
    thermostat.increase();
    UpdatesTemp();
  });
  $('#temperature-decrease').click(function(){
    thermostat.decrease();
    UpdatesTemp();
  });
  $('#temperature-reset').click(function(){
    thermostat.reset();
    UpdatesTemp();
  });
  $('#powersaving-off').click(function(){
    thermostat.powerSaveOff();
    UpdatesPsm('Off');
  });
  $('#powersaving-on').click(function(){
    thermostat.powerSaveOn();
    UpdatesTemp();
    UpdatesPsm('On');
  });




  function UpdatesTemp(){
    $('#temperature').text(thermostat.temperature());
  };
  function UpdatesPsm(string){
    $('#power-saving-status').text(string);
  };
});
