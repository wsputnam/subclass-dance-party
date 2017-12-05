var Kim = function(top, left, timeBetweenSteps) {
  ShakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<span class="kimDancer"><img class="kimFace" alt="kim" src="./media/kim.jpg"></span>');
  this.$node.addClass('kimDancer');
};

Kim.prototype = Object.create(ShakeDancer.prototype);
Kim.prototype.constructor = Kim;