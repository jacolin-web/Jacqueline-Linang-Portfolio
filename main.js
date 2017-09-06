$( document ).ready(function() {
    $('#logoSVG').addClass('animated slideInUp');
    var logoLeft = document.querySelector('#animateLeft');
    var logoRight = document.querySelector('#animateRight');
    drawSVG(logoLeft);
    drawSVG(logoRight);
    drawSVG(glowLeft);
    drawSVG(glowRight);

});

$(window).on( "load", function(){
  AOS.init();
  // Get the SVG document inside the Object tag
  // updateFill();
});

function updateFill() {
  var navIDs = ["aboutNav", "workNav","bookNav", "activityNav","contactNav"];
  for(var i = 0 ; i < navIDs.length; i++){
      var a = document.getElementById(navIDs[i]);
      var svgDoc = a.contentDocument;
      // console.log(svgDoc);
    	// Get one of the SVG items by ID;
    	var svgItem = svgDoc.querySelector("svg");
    	// Set the colour to something else
      // svgItem.each(function(){
        svgItem.style.fill = "#fff";
      // });
  }//end of for loops
}

//Animation for navigation icons
function animateNav(navObj){
  if($(navObj).hasClass('animated flipInY')){
    console.log($(navObj).removeClass('animated flipInY'));
  }
  else{
    // var id = navObj.id;
    // $(id).addClass('animated pulse');
    console.log($(navObj).addClass('animated flipInY'));
  }
}

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
    hideStart();
}

function hideStart(){
    // $('#logoSVG').addClass('nav-svg animated slideOutRight');
    $("#logoSVG").switchClass( "fade-show", "fade-hide", 1000, "easeInOutQuad" );
    $("#nav").switchClass( "fade-hide", "fade-show", 1000, "easeInOutQuad" );
    $("html").removeClass("start");
    $("#content").switchClass("fade-hide", "fade-show", 1000, "easeInOutQuad" );
    // console.log($("#aboutCover").addClass("animated fadeInLeft"));
}
