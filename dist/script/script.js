"use strict";

//  HEADER SLIDER
$(document).ready(function () {
  $('.header-slider').slick({
    touchMove: true,
    mobileFirst: true,
    draggable: true,
    accessibility: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    speed: 500,
    cssEase: 'linear',
    infinite: true,
    swipe: true,
    arrows: false,
    dots: true,
    dotsClass: 'header-dots'
  }); // TESTEMONIALS SLIDER

  $('.testimonials-slider').slick({
    touchMove: true,
    mobileFirst: true,
    draggable: true,
    accessibility: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    infinite: true,
    swipe: true,
    arrows: false,
    dots: true,
    dotsClass: 'testimonials-dots'
  });
});
; // Google Map

var CENTER = {
  lat: 13.75684,
  lng: 100.565855
};

function initMap() {
  var MAP = new google.maps.Map(document.getElementById('map'), {
    center: CENTER,
    zoom: 16,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.LEFT_TOP,
      mapTypeIds: ['roadmap', 'satellite']
    },
    streetViewControl: false,
    fullscreenControl: false,
    styles: [{
      "featureType": "all",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "administrative",
      "elementType": "all",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "administrative",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "administrative",
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#444444"
      }, {
        "visibility": "on"
      }]
    }, {
      "featureType": "administrative.neighborhood",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#e0dfe0"
      }]
    }, {
      "featureType": "landscape",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#f80909"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#a8a9a8"
      }, {
        "visibility": "on"
      }]
    }, {
      "featureType": "road",
      "elementType": "all",
      "stylers": [{
        "saturation": -100
      }, {
        "lightness": 45
      }, {
        "visibility": "on"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#5b5b5a"
      }]
    }, {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "road",
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#de3d3d"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [{
        "visibility": "simplified"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "transit",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "transit",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "visibility": "on"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }]
  });
  var MARKER = new google.maps.Marker({
    position: CENTER,
    map: MAP
  });
  var info = new google.maps.InfoWindow({
    content: '<b>G Tower</b><br><br>9 Rama IX Rd, Huai Khwang, Bangkok 10310<br><br>&#127775;&#127775;&#127775;&#127775;&#127775;',
    pixelOffset: new google.maps.Size(-75, 20)
  });
  info.open(MAP, MARKER);
}

; // OBSERVER FOR FADING EFFECTS

var fadeBlocks = document.querySelectorAll('.fade-in');
var options = {
  threshold: 0,
  root: null,
  rootMargin: "0px 0px 0px 0px"
};
var scrollObserver = new IntersectionObserver(function (entries, scrollObserver) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('fade');
      scrollObserver.unobserve(entry.target);
    }
  });
}, options);
fadeBlocks.forEach(function (item) {
  scrollObserver.observe(item);
}); // loading spinner 

$(window).on('load', function () {
  $('.loading').fadeOut('slow');
}); // background for navigation on scroll

var nav = document.querySelector('.nav-wrap');

window.onscroll = function () {
  if (window.scrollY >= 90) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}; // smooth scrolling to anchors


var page = $('html, body');
$('a[href^="#"]').click(function () {
  page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 600);
  return false;
}); // mobile navigation

var mobNav = document.querySelector('.mobile-nav');
var brg = document.querySelector('.burger-icon');
var mobLinks = document.querySelectorAll('.mobile-nav__link');
brg.addEventListener('click', function (e) {
  e.preventDefault;
  mobNav.classList.add('show');
});
mobLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    mobNav.classList.remove('show');
  });
}); // gallery

var lightbox = document.createElement('div');
lightbox.classList.add('image-lightbox');
document.body.appendChild(lightbox);
var images = document.querySelectorAll('.gal-img');
images.forEach(function (image) {
  image.addEventListener('click', function (e) {
    lightbox.classList.add('clicked');
    var img = document.createElement('img');
    img.src = image.src;

    if (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }

    lightbox.appendChild(img);
  });
});
lightbox.addEventListener('click', function (e) {
  if (e.target !== e.currentTarget) {
    return;
  } else {
    lightbox.classList.remove('clicked');
  }
}); // form data receiving 

var form = document.querySelector('#cont-us-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var userName = document.querySelector('#name').value;
  var userEmail = document.querySelector('#email').value;
  var subject = document.querySelector('#subject').value;
  var message = document.querySelector('#message').value;
  var data = {
    'name': userName,
    'email': userEmail,
    'subject': subject,
    'message': message
  }; // setting form data to session storage

  for (var key in data) {
    window.sessionStorage.setItem(key, JSON.stringify(data[key]));
  }

  console.log("Username: ".concat(userName, ", Email: ").concat(userEmail, ", Subject: ").concat(subject, ", Message: ").concat(message));
  form.reset();
});