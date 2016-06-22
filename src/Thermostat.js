var Thermostat = function(startTemperature, increment){
	this.DEFAULT_TEMPERATURE = startTemperature || 20;
	this.DEFAULT_INCREMENT = increment || 0.5;
  this.MIN_TEMPERATURE = 10;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
};

Thermostat.prototype = {
	increaseTemperature: function() {
		if (this.temperature < this._setMaxTemperature()) {		
			this.temperature += this.DEFAULT_INCREMENT;
		}
	},

  decreaseTemperature: function() {
    if (this.temperature > this.MIN_TEMPERATURE) {
      this.temperature -= this.DEFAULT_INCREMENT;
    }
  },

  _setMaxTemperature: function() {
  	return this.powerSavingMode ? 25 : 32;
  }

};
