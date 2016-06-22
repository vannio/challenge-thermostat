'use strict';

//Thermostat starts at 20 degrees

describe('Feature test', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('thermostat has a default temperature', function(){
    it('starts at 20 degrees', function(){
      expect(thermostat.temperature()).toEqual(20);
    });
  });
});
