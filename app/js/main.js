let cart = {}; //корзина

$(function () {
  loadProducts();
  checkCart();

  var containerEl1 = document.querySelector('[data-ref="mix1"]');
  // var containerEl2 = document.querySelector('[data-ref="mix2"]');

  mixer.filter('.fruits');
  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  // var mixer1 = mixitup(containerEl2, config);
});

$('.slider__inner').slick({
  arrows: true,
  nextArrow: '<button class="slider__arrow slider__arrow--next"></button>',
  prevArrow: '<button class="slider__arrow slider__arrow--prev"></button>'
});

function loadProducts() {
  //загружаю товары на страницу
  $.getJSON('products.json', function (data) {
    //console.log(data);
    let out = '';
    for (let key in data) {
      out += '<li class="cards__item mix ' + data[key]['class'] + '">';
      out += '<div class="cards__info cards__info--' + data[key]['info1'] + '">' + data[key]['info__text1'] + '</div>';
      out += '<div class="cards__info cards__info--' + data[key]['info2'] + '">' + data[key]['info__text2'] + '</div>';
      out += '<button class="cards__favorite">';
      out += '<svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d = "M29.6653 2.77712C28.0869 0.98625 25.8974 0 23.5 0C20.1283 0 17.9936 2.01375 16.7966 3.70312C16.486 4.1415 16.2218 4.58106 16 4.99469C15.7782 4.58106 15.5141 4.1415 15.2034 3.70312C14.0064 2.01375 11.8717 0 8.5 0C6.10262 0 3.91306 0.986313 2.33469 2.77719C0.829188 4.48556 0 6.77356 0 9.21969C0 11.8824 1.03956 14.3589 3.27156 17.0134C5.26638 19.3859 8.13619 21.8314 11.4594 24.6632C12.6977 25.7185 13.9782 26.8098 15.3416 28.0026L15.3825 28.0384C15.5592 28.1932 15.7796 28.2705 16 28.2705C16.2204 28.2705 16.4408 28.1931 16.6175 28.0384L16.6584 28.0026C18.0217 26.8098 19.3023 25.7186 20.5408 24.6631C23.8638 21.8315 26.7336 19.386 28.7284 17.0134C30.9604 14.3589 32 11.8824 32 9.21969C32 6.77356 31.1708 4.48556 29.6653 2.77712ZM19.3246 23.2361C18.2571 24.1458 17.1584 25.0819 16 26.089C14.8416 25.0821 13.7429 24.1458 12.6753 23.236C6.17156 17.6939 1.875 14.0326 1.875 9.21969C1.875 7.23031 2.53781 5.38256 3.74137 4.01688C4.95875 2.63569 6.64869 1.875 8.5 1.875C11.0706 1.875 12.7323 3.45863 13.6735 4.78713C14.5178 5.97863 14.9584 7.17975 15.1086 7.64081C15.2343 8.02675 15.5941 8.28794 16 8.28794C16.4059 8.28794 16.7657 8.02675 16.8914 7.64081C17.0416 7.17975 17.4822 5.97863 18.3265 4.78706C19.2677 3.45863 20.9294 1.875 23.5 1.875C25.3513 1.875 27.0413 2.63569 28.2586 4.01688C29.4622 5.38256 30.125 7.23031 30.125 9.21969C30.125 14.0326 25.8284 17.6939 19.3246 23.2361Z" fill = "#C1C1C1">' + '</svg >';
      out += '</button>';
      out += '<a class="cards__link" href="#">';
      out += '<img class="cards__img" src="' + data[key]['image'] + '">';
      out += '<p class="cards__name">' + data[key]['name'] + '</p>';
      out += '</a>';
      out += '<div class="cards__bottom">';
      out += '<p class="cards__price">' + '<span class="' + data[key]['cost__class'] + '">' + data[key]['cost__old'] + '</span>' + data[key]['cost'] + '</p>';
      out += '<button class="cards__btn" data-art="' + key + '"></button>';
      out += '</div>';
      out += '</li>';
    }

    $('.cards__list').html(out);
    $('.cards__btn').on('click', addToCart);
  })
}

function addToCart() {
  //добовляю товары в корзину
  let articul = $(this).attr('data-art');
  if (cart[articul] != undefined) {
    cart[articul]++;
  }
  else {
    cart[articul] = 1;
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  //console.log(cart);
}
showMiniCart();
function checkCart() {
  //проверяю наличие корзины в locolStorage;
  // console.log(localStorage.getItem('dddsfsf'));
  if (localStorage.getItem('cart') != null) {
    cart = JSON.parse(localStorage.getItem('cart'));
  }
}

function showMiniCart() {
  //показывает содержимое корзины
  let out = '';
  for (let key in cart) {
    out += cart[key];
  }
  $('.header__number--cart').html(out);
  $('.cart').html(out);
}

$(function () {
  $('.header__icon--cart').on('click', function () {
    $('.cart').toggleClass('cart--active');
    $('body').toggleClass('body--fixed');
  });

  $('.catalog__btn').on('click', function () {
    $('.catalog__list').toggleClass('catalog__list--active');
    $('.catalog__btn').toggleClass('catalog__btn--active');
  });

  $('.catalog__btn').on('mouseover', function () {
    $('.catalog__list').addClass('catalog__list--active');
    $('.catalog__btn').addClass('catalog__btn--active');
  });

  $('.catalog__btn').on('mouseout', function () {
    $('.catalog__list').removeClass('catalog__list--active');
    $('.catalog__btn').removeClass('catalog__btn--active');
  });

  $('.catalog__list').on('mouseover', function () {
    $('.catalog__list').addClass('catalog__list--active');
    $('.catalog__btn').addClass('catalog__btn--active');
  });

  $('.catalog__list').on('mouseout', function () {
    $('.catalog__list').removeClass('catalog__list--active');
    $('.catalog__btn').removeClass('catalog__btn--active');
  });

});

// function cartActive() {
//   $('.cart').addClass('.cart--active');
// }