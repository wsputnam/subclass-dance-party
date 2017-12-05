$(document).ready(function() {
  window.dancers = [];


  $('.getRickRollin, .TrumpShaking, .KimShaking').on('click', function(event) {
  
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

  // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

  // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('.island').height() * Math.random() * 0.80,
      $('.island').width() * Math.random() * 0.75,
      Math.random() * 1000 + 1000
    );
    window.dancers.push(dancer);
    $('.island').append(dancer.$node);
  });

  var rickHover = $('#rickDancer').find('#rickFace');
  var sound = $('.topbar');
  var rickAudio = sound.find('audio')[0];

  $('body').on('click', '#rickFace', function() {
    rickAudio.play('audio');
    console.log('rick rolling');
  });

  $('.lineUp').on('click', function(event) {

    window.dancers.map(function(dancer) {
      dancer.setLinePosition();
    });
  });


  $('.interact').on('click', function(fight) {
    var pythagorasArray = [];
    var result;
    
    // calculates distance between any two dancers
    for (var j = 0; j < window.dancers.length; j++) {
      for (var i = 0; i < window.dancers.length; i++) {
        if (j !== i) {
          result = Dancer.prototype.calculateDistance(window.dancers[j].top, window.dancers[j].left, window.dancers[i].top, window.dancers[i].left);
        }
        if (result < 300) {
          pythagorasArray.push(window.dancers[j]);
          i = window.dancers.length;
        }
      }
    }
    // loop through pythagoras array and begin scaling animation (yes, the class is called fighter)
    pythagorasArray.map(function(dancer) {
      if (dancer.$node.hasClass('kimDancer') || dancer.$node.hasClass('trumpDancer')) {
        dancer.$node.addClass('fighter'); 
        var img = $('.fighter').find('img');
        img.toggle('scale', {'origin': ['middle', 'center'], 'percent': 1000});
      }
    });
  });

});
