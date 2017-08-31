$( document ).ready(function() {
    // AOS.init();
    $('#logoSVG').addClass('animated slideInUp');
    var logoLeft = document.querySelector('#animateLeft');
    var logoRight = document.querySelector('#animateRight');
    drawSVG(logoLeft);
    drawSVG(logoRight);
    drawSVG(glowLeft);
    drawSVG(glowRight);
    svgFileToInline();
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
    hideStart();
}

function hideStart(){
    // $('#logoSVG').addClass('nav-svg animated slideOutRight');
    $("#logoSVG").switchClass( "fade-show", "fade-hide", 1000, "easeInOutQuad" );
    $("#nav").switchClass( "fade-hide", "fade-show", 1000, "easeInOutQuad" );
    $("#aboutSection").switchClass("fade-hide", "fade-show", 1000, "easeInOutQuad" );
    console.log($('#aboutSection').css('opacity'));
    if($('#aboutSection').css('opacity') == 0) {
        console.log("I'm gonna do it!")
        $('#aboutSVG').addClass('animated pulse');
    }
}

function svgFileToInline(){
    /*
     * Replace all SVG images with inline SVG
     */
    jQuery('img.navLogos').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
}
