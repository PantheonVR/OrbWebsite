//Dear internet reader reading my javscript: here is hacky code :) - <3 HB
var i = 0;
var maxI = 2;

function advance(){
  i++;
  //wrap
  if(i > maxI){
    i = 0;
  }
  $('#video' + i).get(0).currentTime = 0;
  $('#video' + i).get(0).play();
}

$(window).load(function() {
    $('.flexslider1').flexslider({
      animation: 'fade', // Change Animation Type to fade
      animationLoop: true,
      touch: true,
      directionNav: false,
      slideshowSpeed: 3300, // Slide Intervals
      animationSpeed: 800, // Animation Speeds/times
      slideshow: true,
      pauseOnAction: false,
      video: true, 
      controlsContainer: '.flex-container',
      before: advance
    });
 
    $('.flexslider2').flexslider({
      animation: 'slide', // Change Animation Type to slide
      smoothHeight: false,
      animationLoop: true,
      touch: true,
      directionNav: false,
      slideshowSpeed: 4000, // Slide Intervals
      animationSpeed: 300, // Animation Speeds/times
      slideshow: true,
      pauseOnAction: false, 
      controlsContainer: '.flex-container'
    });
  });

  
  
  