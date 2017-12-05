var Trump = function(top, left, timeBetweenSteps) {
  BounceDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<span class="trumpDancer"><img class="trumpFace" alt="trump" src="./media/trump.png"></span>');
  this.$node.addClass('trumpDancer');
};

Trump.prototype = Object.create(BounceDancer.prototype);
Trump.prototype.constructor = Trump;

