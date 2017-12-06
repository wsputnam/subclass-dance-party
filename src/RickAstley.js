class RickAstley extends BlinkyDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.append('<span class="rickDancer"><img id="rickFace" alt="rick" src="./media/rick.gif"></span>');
    this.$node.addClass('rickDancer');
  }
}

