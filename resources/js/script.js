$(document).ready(function() {



  // sticky navigation
  $('.jsfeatures').waypoint(function(direction) {
    if (direction == 'down') {
      $('nav').addClass('sticky')
    } else {
      $('nav').removeClass('sticky')
    }
  })


  // scroll on button
  $('.jsscrolltoplan').click(function() {
    $('html,body').animate({
      scrollTop: $(".section-plans").offset().top
    }, 2000);
  });

  $('.jsscrolltostart').click(function() {
    $('html,body').animate({
      scrollTop: $(".jsfeatures").offset().top
    }, 1000);
  });


  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });


  // animation on scrollTop

  // $('.jswp1').waypoint(function(direction) {
  //   $('.jswp1').addClass('animated fadeIn')
  // }, {
  //   offset: '50%'
  // });
  //
  //
  // $('.jswp2').waypoint(function(direction) {
  //   $('.jswp2').addClass('animated fadeInUp')
  // }, {
  //   offset: '40%'
  // });
  //
  //
  // $('.jswp3').waypoint(function(direction) {
  //   $('.jswp3').addClass('animated fadeIn')
  // }, {
  //   offset: '60%'
  // });
  //
  //
  // $('.jswp4').waypoint(function(direction) {
  //   $('.jswp4').addClass('animated pulse')
  // }, {
  //   offset: '50%'
  // });
  //
  //
  //


  $('.jsnavicon').click(function() {
    var nav = $('.jsmainnav');
    nav.slideToggle(200);
  })
});