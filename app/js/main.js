$(function () {
  $('.slider__inner').slick({
    arrows: true,
    nextArrow: '<button class="slider__arrow slider__arrow--next"></button>',
    prevArrow: '<button class="slider__arrow slider__arrow--prev"></button>'
  });

  var mixer = mixitup('.carts__list');
});