describe('Thermostat', function(){
  var thermostat;

  describe('default settings', function() {

  	beforeEach(function(){
    	thermostat = new Thermostat();
  	});

	  it('starts at DEFAULT_TEMPERATURE', function(){
	    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
	  });

	  describe('#increaseTemperature', function() {

	  	it('should increase the temperature by DEFAULT_INCREMENT', function() {
	  		thermostat.increaseTemperature();
	  		var expectedTemperature = thermostat.DEFAULT_TEMPERATURE + thermostat.DEFAULT_INCREMENT;
	  		expect(thermostat.temperature).toEqual(expectedTemperature);
	  	});

	  });

    describe('#decreaseTemperature', function() {

      it('should decrease the tempature by the DEFAULT_INCREMENT', function() {
        thermostat.decreaseTemperature();
        var expectedTemperature = thermostat.DEFAULT_TEMPERATURE - thermostat.DEFAULT_INCREMENT;
        expect(thermostat.temperature).toEqual(expectedTemperature);
      });

      it('cannot decrease lower than MIN_TEMPERATURE', function(){
        for (var i = 1; i <= 100; i++) {
          thermostat.decreaseTemperature();
        }
        expect(thermostat.temperature).toEqual(thermostat.MIN_TEMPERATURE);
      });

    });

	});

	describe('manual settings (start temperature: 15oC, increment: 1oC)', function() {

		beforeEach(function(){
    	thermostat = new Thermostat(15, 1);
  	});

		it('starts at 15oC', function(){
	    expect(thermostat.temperature).toEqual(15);
	  });

    describe('#increaseTemperature', function() {

	  	it('should increase the temperature by 1', function() {
	  		thermostat.increaseTemperature();
	  		expect(thermostat.temperature).toEqual(16);
	  	});

	  });

    describe('#decreaseTemperature', function() {

	  	it('should decrease the temperature by 1', function() {
	  		thermostat.decreaseTemperature();
	  		expect(thermostat.temperature).toEqual(14);
	  	});

	  });

	});

});
