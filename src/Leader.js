var ShakeDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

};

ShakeDancer.prototype = Object.create(Dancer.prototype);
ShakeDancer.prototype.constructor = ShakeDancer;

ShakeDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.effect('shake');

};