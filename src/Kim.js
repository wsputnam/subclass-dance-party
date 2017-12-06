class Kim extends ShakeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);  
    this.$node.append('<span class="kimDancer"><img class="kimFace" alt="kim" src="./media/kim.jpg"></span>');
    this.$node.addClass('kimDancer');
  }
}