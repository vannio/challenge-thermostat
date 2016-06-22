
function Thermostat(){
  this._DEFAULTTEMP = 20;
  this._temperature = this._DEFAULTTEMP;
  this._MINIMUMTEMP = 10;
  this._MAXIMUMTEMP = 25;
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
  },
  powerSaveOff: function(){
    this._MAXIMUMTEMP = 32;
  },
  reset: function(){
    this._temperature = this._DEFAULTTEMP;
  },
  colour: function(){
    if(this._temperature < 18){
      return "green";
    } else if(this._temperature >= 18 && this._temperature < 25){
      return "yellow";
    } else {
      return "red";
    }
  }
};
