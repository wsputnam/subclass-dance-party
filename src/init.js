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
      Math.random() * 3000
    );
    window.dancers.push(dancer);
    $('.island').append(dancer.$node);
  });

  var rickHover = $('#rickFace');
  var sound = $('.topbar');
  var rickAudio = sound.find('audio')[0];

  rickHover.hover(function() {
    rickAudio.play('audio');
    console.log('rick rolling');
  }, function() {
    rickAudio.pause('audio');
  });

  $('.lineUp').on('click', function(event) {

    window.dancers.map(function(dancer) {
      // if dancer is of shakedancer class, stop the shake
      dancer.setLinePosition();
    });
  });

});

    // var styleSettings = {
    //   left: 0,
    //   top: 200,
    //   position: 'absolute'
    // };

    // for (var i = 0; i < window.dancers.length; i++) {
    //   styleSettings.left = i * 50;
    //   $('.kimDancer, .trumpDancer, .rickDancer').css(styleSettings);
    // }


// $('.addDancerButton').on('click', function(event) {
//     /* This function sets up the click handlers for the create-dancer
//      * buttons on dancefloor.html. You should only need to make one small change to it.
//      * As long as the "data-dancer-maker-function-name" attribute of a
//      * class="addDancerButton" DOM node matches one of the names of the
//      * maker functions available in the global scope, clicking that node
//      * will call the function to make the dancer.
//      */

//      dancerMakerFunctionName is a string which must match
//      * one of the dancer maker functions available in global scope.
//      * A new object of the given type will be created and added
//      * to the stage.
     
//     var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

//     // get the maker function for the kind of dancer we're supposed to make
//     var dancerMakerFunction = window[dancerMakerFunctionName];

//     // make a dancer with a random position

//     var dancer = new dancerMakerFunction(
//       $('.island').height() * Math.random(),
//       $('.island').width() * Math.random(),
//       Math.random() * 1000
//     );
//     window.dancers.push(dancer);
//     $('.island').append(dancer.$node);
//   });
