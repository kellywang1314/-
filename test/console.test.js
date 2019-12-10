//当需要系统函数时候可以用sinon模拟，这里模拟的console.log
var expect = require('chai').expect
require('mocha-sinon')

function privateFunction (time) {
  if (time < 12) { console.log('Good morning'); console.log('多条console')}
  else if (time >= 12 && time <19) { console.log('Good afternoon'); }
  else { console.log('Good night!'); }
}

describe('privateFunction()', function() {

  beforeEach(function() {
    this.sinon.stub(console, 'log');
  });

  it('should log "Good morning" for hours < 12', function() {
    privateFunction(5);
    expect( console.log.calledWith('Good morning') && console.log.calledWith('多条console')).to.be.true;
    //expect(console.log.calledWith('多条console')).to.be.true;
  });

  it('should log "Good afternoon" for hours >= 12 and < 19', function() {
    privateFunction(15);
    expect( console.log.calledWith('Good afternoon') ).to.be.true;
  });

  it('should log "Good night!" for hours >= 19', function() {
    privateFunction(20);
    expect( console.log.calledWith('Good night!') ).to.be.true;
  });

});