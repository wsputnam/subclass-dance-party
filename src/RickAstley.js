var RickAstley = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<span class="rickDancer"><img id="rickFace" alt="rick" src="./media/rick.gif"></span>');
  this.$node.addClass('rickDancer');
};

RickAstley.prototype = Object.create(BlinkyDancer.prototype);
RickAstley.prototype.constructor = RickAstley;

