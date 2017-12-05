var RickAstley = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer rickDancer"><img class="face" alt="rick" src="https://vignette.wikia.nocookie.net/agk/images/a/a5/Rick_Astley_Sprite.png/revision/latest?cb=20150204194446"></span>');
};

RickAstley.prototype = Object.create(BlinkyDancer.prototype);
RickAstley.prototype.constructor = RickAstley;



