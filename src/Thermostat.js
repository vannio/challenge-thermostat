
function Thermostat(){
  this._temperature = 20;
  this._MINIMUMTEMP = 10;
};

Thermostat.prototype = {
  temperature: function(){
    return this._temperature;
  },
  increase: function(){
    if(this._temperature === this._MAXIMUMTEMP) {
      throw new Error('Cannot increase above maximum temperature');
    } else {
      return this._temperature += 1;
    }
  },
  decrease: function(){
    if(this._temperature === this._MINIMUMTEMP) {
      throw new Error('Cannot decrease below minimum temperature');
    } else {
      return this._temperature -= 1;
    }
  },
  powerSaveOn: function(){
    this._MAXIMUMTEMP = 25;
  }
};
