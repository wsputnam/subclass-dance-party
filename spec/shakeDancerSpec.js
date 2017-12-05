describe('shakeDancer', function() {

  var shakeDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shakeDancer = new ShakeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shakeDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node shake', function() {
    sinon.spy(shakeDancer.$node, 'effect');
    shakeDancer.step();
    expect(shakeDancer.$node.effect.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(shakeDancer, 'step');
      expect(shakeDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(shakeDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shakeDancer.step.callCount).to.be.equal(2);
    });

  });
});