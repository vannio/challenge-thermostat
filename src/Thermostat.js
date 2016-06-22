var Thermostat = function(startTemperature, increment){
	this.DEFAULT_TEMPERATURE = startTemperature || 20;
	this.DEFAULT_INCREMENT = increment || 0.5;
  this.MIN_TEMPERATURE = 10;
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype = {
	increaseTemperature: function() {
		this.temperature += this.DEFAULT_INCREMENT;
	},

  decreaseTemperature: function() {
    if (this.temperature > this.MIN_TEMPERATURE) {
      this.temperature -= this.DEFAULT_INCREMENT;
    }
  }
};
