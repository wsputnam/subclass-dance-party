var Trump = function(top, left, timeBetweenSteps) {
  ShakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<span class="trumpDancer"><img class="trumpFace" alt="trump" src="./media/trump.png"></span>');
};

Trump.prototype = Object.create(ShakeDancer.prototype);
Trump.prototype.constructor = Trump;
