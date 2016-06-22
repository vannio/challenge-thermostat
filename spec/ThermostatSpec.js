'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('#temperature', function(){
    it('has default temperature of 20', function(){
      expect(thermostat.temperature()).toEqual(20);
    });
  });

  describe('#increase', function(){
    it('increases the temperature by 1', function(){
      thermostat.increase();
      expect(thermostat.temperature()).toEqual(21);
    });
  });

});
