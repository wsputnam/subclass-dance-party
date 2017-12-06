class BounceDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }
}

BounceDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle('bounce', { times: 3, distance: 21}, 'slow');
};