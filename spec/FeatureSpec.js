'use strict';

describe('Feature test', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  //Thermostat starts at 20 degrees
  describe('thermostat has a default temperature', function(){
    it('starts at 20 degrees', function(){
      expect(thermostat.temperature()).toEqual(20);
    });
  });
  //You can increase the temperature with the up button
  describe('thermostat can increase temperature', function(){
    it('increases by 1 degree', function(){
      thermostat.increase();
      expect(thermostat.temperature()).toEqual(21);
    });
  });
});
