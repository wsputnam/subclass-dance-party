var BounceDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

};

BounceDancer.prototype = Object.create(Dancer.prototype);
BounceDancer.prototype.constructor = BounceDancer;

BounceDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle('bounce', { times: 3, distance: 21}, 'slow');
};