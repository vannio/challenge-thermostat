
function Thermostat(){
  this._temperature = 20;
};

Thermostat.prototype = {
  temperature: function(){
    return this._temperature;
  },
  increase: function(){
    return this._temperature += 1;
  }
};
