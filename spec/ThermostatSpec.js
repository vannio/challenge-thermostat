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
});
