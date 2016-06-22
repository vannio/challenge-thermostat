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

  describe('#decrease', function(){
    it('decreases temperature by 1', function(){
      thermostat.decrease();
      expect(thermostat.temperature()).toEqual(19);
    });
    it('it cannot decrease below minimum temperature', function(){
      for(var i = 0; i < 10; i++) {
        thermostat.decrease();
      }
      expect(function(){ thermostat.decrease(); }).toThrowError('Cannot decrease below minimum temperature');
    });
  });

  describe('#powerSaveOn,', function(){
    it('sets the maximum temperature to 25 degrees', function(){
      thermostat.powerSaveOn();
      for(var i = 0; i < 5; i++) {
        thermostat.increase();
      }
      expect(function(){ thermostat.increase(); }).toThrowError('Cannot increase above maximum temperature');
    });
    it('is on by default', function(){
      for(var i = 0; i < 5; i++) {
        thermostat.increase();
      }
      expect(function(){ thermostat.increase(); }).toThrowError('Cannot increase above maximum temperature');
    });
  });
  describe('#powerSaveOff', function(){
    it('sets the maximum temperature to 32 degrees', function(){
      thermostat.powerSaveOff();
      for(var i = 0; i < 12; i++) {
        thermostat.increase();
      }
      expect(function(){ thermostat.increase(); }).toThrowError('Cannot increase above maximum temperature');
    });
  });
  describe('#reset', function(){
    it('changes the temperature to 20 degrees', function(){
      for(var i = 0; i < 5; i++) {
        thermostat.increase();
      }
      thermostat.reset();
      expect(thermostat.temperature()).toEqual(20);
    });
  });
  describe('#colour', function(){
    it('outputs "green" when temperature is less than 18', function(){
      thermostat.decrease();
      thermostat.decrease();
      thermostat.decrease();
      expect(thermostat.colour()).toEqual("green");
    });
    it('outputs "yellow" when temperature is between than 18 and 24', function(){
      expect(thermostat.colour()).toEqual("yellow");
    });
    it('outputs "red" when temperature is greater than 24', function(){
      for(var i = 0; i < 5; i++) {
        thermostat.increase();
      }
      expect(thermostat.colour()).toEqual("red");
    });
  });
});
