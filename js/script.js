$(document).ready(function() {
      $('.slider-for').slick({  //-- refers to top part of gallery --//
  slidesToShow: 1, 
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({ //-- bottom nav part of gallery --//
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
});
 