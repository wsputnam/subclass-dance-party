var Trump = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<span class="trumpDancer"><img class="trumpFace" alt="trump" src="./media/trump.png"></span>');
};

Trump.prototype = Object.create(Dancer.prototype);
Trump.prototype.constructor = Trump;

Trump.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle('bounce', { times: 3, distance: 21}, 'slow');
};
