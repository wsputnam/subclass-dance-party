class ShakeDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }
  step() {
    Dancer.prototype.step.call(this);
    this.$node.effect('shake');
  }
}

ShakeDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.effect('shake');

};