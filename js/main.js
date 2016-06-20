// Smooth Scrolling

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// BxSlider

$(document).ready(function(){
  $('.bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 4,
    moveSlides: 1,
    slideWidth: 300,
    slideMargin: 20
  });
});

// Subscriber Alert

$(document).ready(function(){
     $(".subscribe").click(function(e) {
    var email = $(".email").val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!(email).match(emailReg)) {
    alert("Please submit a valid email address.");
    e.preventDefault();
    } else {
    alert("Thanks for subscribing!");
     e.preventDefault();
    }
  });
});
