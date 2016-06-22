describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20oC', function(){
    expect(thermostat.temperature).toEqual(20);
  });
});
