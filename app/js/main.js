$(function () {
  $('.top-slider__inner').slick({
    arrows: true,
    nextArrow: '<img class="slick-arrow next" src="../images/icons/slick-arrow.svg">',
    prevArrow: '<img class="slick-arrow prev" src="../images/icons/slick-arrow.svg">'
  });

  var mixer = mixitup('.top-products__content');
});