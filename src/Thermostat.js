
function Thermostat(){
  this._temperature = 20;
  this._minimumTemp = 10;
};

Thermostat.prototype = {
  temperature: function(){
    return this._temperature;
  },
  increase: function(){
    return this._temperature += 1;
  },
  decrease: function(){
    if(this._temperature === this._minimumTemp) {
      throw new Error('Cannot decrease below minimum temperature');
    } else {
      return this._temperature -= 1;
    }
  }
};
