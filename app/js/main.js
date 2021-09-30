$(function () {
  $('.slider__inner').slick({
    arrows: true,
    nextArrow: '<button class="slider__arrow slider__arrow--next"></button>',
    prevArrow: '<button class="slider__arrow slider__arrow--prev"></button>'
  });


  var containerEl1 = document.querySelector('[data-ref="mix1"]');
  var containerEl2 = document.querySelector('[data-ref="mix2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer1 = mixitup(containerEl2, config);
});

