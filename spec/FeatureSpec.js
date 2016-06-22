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
  //You can decrease temperature with the down button
  describe('thermostat can decrease temperature', function(){
    it('decreases by 1 degree', function(){
      thermostat.decrease();
      expect(thermostat.temperature()).toEqual(19);
    });
  });
  //The minimum temperature is 10 degrees
  describe('thermostat has a minimum temperature', function(){
    it('it has minimum temperature of 10 degrees', function(){
      for(var i = 0; i < 10; i++) {
        thermostat.decrease();
      }
      expect(function(){ thermostat.decrease(); }).toThrowError('Cannot decrease below minimum temperature');
    });
  });
});
