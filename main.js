$( document ).ready(function() {
    AOS.init();
    var logoLeft = document.querySelector('#animateLeft');
    var logoRight = document.querySelector('#animateRight');
    drawSVG(logoLeft);
    drawSVG(logoRight);
    drawSVG(glowLeft);
    drawSVG(glowRight);
});

function drawSVG(pathID){
  var path = pathID;
  var length = path.getTotalLength();
  // Clear any previous transition
  path.style.transition = path.style.WebkitTransition =
    'none';
  // Set up the starting positions
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  // Trigger a layout so styles are calculated & the browser
  // picks up the starting position before animating
  path.getBoundingClientRect();
  // Define our transition
  path.style.WebkitTransition = 'stroke-dashoffset 3s ease-in-out';
  // Go!
  path.style.strokeDashoffset = '0';
}

function switchSVG(path)
{
    $("#JL").show();
}

function hideStart(){
    $("#logoSVG").switchClass( "fade-show", "fade-hide", 1000, "easeInOutQuad" );
    $("#aboutSection").switchClass( "fade-hide", "fade-show", 1000, "easeInOutQuad" );
};
