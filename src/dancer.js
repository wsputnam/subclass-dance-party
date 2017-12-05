// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  this.step();

};


// this function throws back and forth between any subclass step method and the main dancer superclass
// this allows the effect to trigger continually
Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


// this sets the initial position of each dancer when a button tied to initiate a dancer is clicked
Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


// this moves all dancers into a horizontal line when the line up button is clicked
Dancer.prototype.setLinePosition = function(arr) {
  var styleSettings = {
    top: 630
  };
  this.$node.css(styleSettings);
};


// calculates distance between dancers
Dancer.prototype.calculateDistance = function(dancerTop, dancerLeft, otherDancerTop, otherDancerLeft) {
  return Math.sqrt(Math.pow((otherDancerLeft - dancerLeft), 2) + Math.pow((otherDancerTop - dancerTop), 2));

};


