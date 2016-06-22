
function Thermostat(){
  this._DEFAULTTEMP = 20;
  this._temperature = this._DEFAULTTEMP;
  this._MINIMUMTEMP = 10;
  this._MAXIMUMTEMP = 25;
  this._MAX_TEMP_PSM_ON = 25;
  this._MAX_TEMP_PSM_OFF = 32;
  this._MEDIUM_ENERGY_USAGE_LIMIT = 18;
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
    this._MAXIMUMTEMP = this._MAX_TEMP_PSM_ON;
  },
  powerSaveOff: function(){
    this._MAXIMUMTEMP = this._MAX_TEMP_PSM_OFF;
  },
  reset: function(){
    this._temperature = this._DEFAULTTEMP;
  },
  energyUsage: function(){
    if(this._temperature < this._MEDIUM_ENERGY_USAGE_LIMIT){
      return "low-usage";
    } else if(this._temperature >= this._MEDIUM_ENERGY_USAGE_LIMIT && this._temperature < this._MAX_TEMP_PSM_ON){
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
};
