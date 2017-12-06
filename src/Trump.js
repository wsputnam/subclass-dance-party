class Trump extends BounceDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.append('<span class="trumpDancer"><img class="trumpFace" alt="trump" src="./media/trump.png"></span>');
    this.$node.addClass('trumpDancer');
  }
}

