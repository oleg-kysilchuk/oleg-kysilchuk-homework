$(document).ready(function(){
    $('.header-slider').slick({
      vertical: true,
      verticalSwiping: true,
      touchMove: true,
      mobileFirst: true,
      draggable: true,
      dots: true,
      accessibility: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    $('.news-slider').slick({
      slidesToShow: 3,
      touchMove: true,
      mobileFirst: true,
      draggable: true,
      dots: true,
      accessibility: true,
      arrows: true,
      swipe: true,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });


  $('a').on('click', function(e) {

    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function() {

        window.location.hash = hash;
      });
    }
  });

});

  