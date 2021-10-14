// let cart = {}; //корзина

$(function () {
  // loadProducts();
  // checkCart();
  // loadSales();

  // let mixer = mixitup('.cards') 

  var containerEl1 = document.querySelector('[data-ref="mix1"]');
  var containerEl2 = document.querySelector('[data-ref="mix2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, {
    controls: {
      scope: 'local'
    },
    classNames: {
      block: 'cards'
    }


  });
  var mixer1 = mixitup(containerEl2, {
    controls: {
      scope: 'local'
    },
    classNames: {
      block: 'sales'
    }
  });
});


$('.slider__inner').slick({
  arrows: true,
  nextArrow: '<button class="slider__arrow slider__arrow--next"><svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z" fill="#505050"/></svg></button>',
  prevArrow: '<button class="slider__arrow slider__arrow--prev"><svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z" fill="#505050"/></svg></button>'
});

$('.slider__inner--responsive').slick({
  dots: true,
  arrows: false
});

// $(".price__range").ionRangeSlider({
//   type: "double",
//   min: 100,
//   max: 1000,
//   from: 100,
//   to: 500,
//   prefix: "$"
//   // grid: true,
// });

var $range = $(".price__range");
var $inputFrom = $(".price__from");
var $inputTo = $(".price__to");
var instance;
var min = 0;
var max = 1200;
var from = 0;
var to = 0;

$range.ionRangeSlider({
  skin: "round",
  type: "double",
  min: min,
  max: max,
  from: 100,
  to: 1000,
  onStart: updateInputs,
  onChange: updateInputs,
  onFinish: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("change", function () {
  var val = $(this).prop("value");

  // validate
  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val
  });

  $(this).prop("value", val);

});

$inputTo.on("change", function () {
  var val = $(this).prop("value");

  // validate
  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val
  });

  $(this).prop("value", val);
});

$(function () {

  $('.header__cart').on('click', function () {
    $('.cart').toggleClass('cart--active');
    $('body').toggleClass('body--fixed');
  });

  $('.cart__close').on('click', function () {
    $('.cart').removeClass('cart--active');
    $('body').removeClass('body--fixed');
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

  $('.header__burger').on('click', function () {
    $('.navigation').addClass('navigation--active');
    $('body').addClass('body--fixed');
  });

  $('.navigation__close').on('click', function () {
    $('.navigation').removeClass('navigation--active');
    $('body').removeClass('body--fixed');
  });

  $('.header__icon--search').on('click', function () {
    $('.header__form').toggleClass('header__form--active')
  });

  $('.goods__filter--list').on('click', function () {
    $('.cards__goods').addClass('cards__goods--list');
    $('.cards__item').addClass('cards__item--list');
    $('.goods__filter--list').addClass('goods__filter--fill');
    $('.goods__filter--column').removeClass('goods__filter--fill');
    // $('.cards__name').addClass('cards__name--list');
  });

  $('.goods__filter--column').on('click', function () {
    $('.cards__goods').removeClass('cards__goods--list');
    $('.cards__item').removeClass('cards__item--list');
    $('.goods__filter--column').addClass('goods__filter--fill');
    $('.goods__filter--list').removeClass('goods__filter--fill');
  });

  $('.goods__filter--open').on('click', function () {
    $('.filters').toggleClass('filters--active');
    $('body').toggleClass('body--fixed');
  });

  $('.filters__close').on('click', function () {
    $('.filters').removeClass('filters--active');
    $('body').removeClass('body--fixed');
  });

  $('.filters__btn--categories').on('click', function () {
    $('.filters__list--categories').toggleClass('filters__list--disabled')
    $('.filters__btn--categories').toggleClass('filters__btn--disabled')
  });

  $('.filters__btn--offers').on('click', function () {
    $('.filters__list--offers').toggleClass('filters__list--disabled')
    $('.filters__btn--offers').toggleClass('filters__btn--disabled')
  });

  $('.filters__btn--trademarks').on('click', function () {
    $('.filters__list--trademarks').toggleClass('filters__list--disabled')
    $('.filters__btn--trademarks').toggleClass('filters__btn--disabled')
  });

  $('.filters__btn--price').on('click', function () {
    $('.price__form').toggleClass('filters__list--disabled')
    $('.filters__btn--price').toggleClass('filters__btn--disabled')
  });

  $('.goods__filter--name').on('click', function () {
    $('.filters__list--name').toggleClass('filters__list--active')
    $('.goods__filter--name').toggleClass('goods__filter--active')
  });

  $('.goods__filter--number').on('click', function () {
    $('.filters__list--number').toggleClass('filters__list--active')
    $('.goods__filter--number').toggleClass('goods__filter--active')
  });
});

if ($(window).width() < 767) {
  $('#cards__name').html('Напиток сокосодержащий Sanpellegrino... ')
};

// function loadProducts() {
//   //загружаю товары на страницу
//   $.getJSON('products.json', function (data) {
//     // console.log(cart);
//     //вывод товаров в список
//     let out = '';
//     for (let key in data) {
//       out += '<li class="cards__item mix ' + data[key]['class'] + '">';
//       out += '<div class="cards__info ' + data[key]['info1'] + '">' + data[key]['info__text1'] + '</div>';
//       out += '<div class="cards__info ' + data[key]['info2'] + '">' + data[key]['info__text2'] + '</div>';
//       out += '<button class="cards__favorite">';
//       out += '<svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d = "M29.6653 2.77712C28.0869 0.98625 25.8974 0 23.5 0C20.1283 0 17.9936 2.01375 16.7966 3.70312C16.486 4.1415 16.2218 4.58106 16 4.99469C15.7782 4.58106 15.5141 4.1415 15.2034 3.70312C14.0064 2.01375 11.8717 0 8.5 0C6.10262 0 3.91306 0.986313 2.33469 2.77719C0.829188 4.48556 0 6.77356 0 9.21969C0 11.8824 1.03956 14.3589 3.27156 17.0134C5.26638 19.3859 8.13619 21.8314 11.4594 24.6632C12.6977 25.7185 13.9782 26.8098 15.3416 28.0026L15.3825 28.0384C15.5592 28.1932 15.7796 28.2705 16 28.2705C16.2204 28.2705 16.4408 28.1931 16.6175 28.0384L16.6584 28.0026C18.0217 26.8098 19.3023 25.7186 20.5408 24.6631C23.8638 21.8315 26.7336 19.386 28.7284 17.0134C30.9604 14.3589 32 11.8824 32 9.21969C32 6.77356 31.1708 4.48556 29.6653 2.77712ZM19.3246 23.2361C18.2571 24.1458 17.1584 25.0819 16 26.089C14.8416 25.0821 13.7429 24.1458 12.6753 23.236C6.17156 17.6939 1.875 14.0326 1.875 9.21969C1.875 7.23031 2.53781 5.38256 3.74137 4.01688C4.95875 2.63569 6.64869 1.875 8.5 1.875C11.0706 1.875 12.7323 3.45863 13.6735 4.78713C14.5178 5.97863 14.9584 7.17975 15.1086 7.64081C15.2343 8.02675 15.5941 8.28794 16 8.28794C16.4059 8.28794 16.7657 8.02675 16.8914 7.64081C17.0416 7.17975 17.4822 5.97863 18.3265 4.78706C19.2677 3.45863 20.9294 1.875 23.5 1.875C25.3513 1.875 27.0413 2.63569 28.2586 4.01688C29.4622 5.38256 30.125 7.23031 30.125 9.21969C30.125 14.0326 25.8284 17.6939 19.3246 23.2361Z" fill = "#C1C1C1">' + '</svg >';
//       out += '</button>';
//       out += '<a class="cards__link" href="#">';
//       out += '<img class="cards__img" src="' + data[key]['image'] + '">';
//       out += '<p class="cards__name">' + data[key]['name'] + '</p>';
//       out += '</a>';
//       // out += '<div class="cards__numbers">' + showButtons() + '</div>';
//       // out += '<div class="cards__numbers">';
//       // out += '<button class="cart__count cart__count--minuss" data-art="' + key + '"></button>';
//       // out += '<p class="cart__number">' + cart[key] + '</p>';
//       // out += '<button class="cart__count cart__count--pluss" data-art="' + key + '"></button>';
//       // out += '</div>';
//       out += '<div class="cards__bottom">';
//       out += '<p class="cards__price">' + '<span class="cards__price ' + data[key]['cost__class'] + '">' + data[key]['cost__old'] + ' ₽</span>' + data[key]['cost'] + ' ₽</p>';
//       out += '<button class="cards__btn" data-art="' + key + '"></button>';
//       out += '</div>';
//       out += '</li>';
//     }

//     // deleteButton();
//     $('.cards').html(out);
//     $('.cards__btn').on('click', addToCart);
//     // $('.cart__count--pluss').on('click', plusProducts);
//     $('.cart__count--pluss').on('click', addToCart);
//     $('.cart__count--minuss').on('click', minusProducts);
//     showCart();
//     showMiniCart();
//     saveCartToLS();
//     checkCart();
//   }).then(() => {
//     var containerEl1 = document.querySelector('[data-ref="mix1"]');

//     var config = {
//       controls: {
//         scope: 'local'
//       }
//     };

//     var mixer1 = mixitup(containerEl1, config);
//   })
// }

// function loadSales() {
//   //выгружаю скидки на страницу
//   $.getJSON('sales.json', function (sales) {
//     let out = '';
//     for (key in sales) {
//       out += '<li class="sales__item mix ' + sales[key]['item__class'] + '">';
//       out += '<a class="sales__link" href="#">';
//       out += '<div class="cards__info ' + sales[key]['info__class'] + '">' + sales[key]['info__text'] + '</div>';
//       out += '<div class="sales__image">';
//       out += '<img class="sales__img" src="' + sales[key]['image'] + '" alt="' + sales[key]['alt'] + '">';
//       out += '</div>';
//       out += '<div class="sales__info">';
//       out += '<p class="sales__name">' + sales[key]['name'] + '</p>';
//       out += '<p class="sales__available ' + sales[key]['available'] + '">' + sales[key]['available__text'] + '</p>';
//       out += '<div class="sales__bottom">';
//       out += '<p class="sales__cost">' + sales[key]['cost'] + '₽</p>';
//       out += '<p class="sales__cost sales__cost--older"><span class="sales__cost sales__cost--old">' + sales[key]['cost__old'] + '₽</span></p>';
//       out += '<p class="sales__rating">' + sales[key]['rating'] + '</p>'
//       out += '</div>';
//       out += '</div>';
//       out += '</a>';
//       out += '</li>';
//     }
//     $('.sales__list').html(out);
//   }).then(() => {
//     var containerEl2 = document.querySelector('[data-ref="mix2"]');

//     var config = {
//       controls: {
//         scope: 'local'
//       }
//     };
//     var mixer1 = mixitup(containerEl2, config);

//   })
// }

// function showCart() {
//   //добавляю товары в корзину
//   $.getJSON('products.json', function (data) {
//     if ($.isEmptyObject(cart)) {
//       //корзина пуста
//       let out = '<p class="cart__empty">Ваша корзина пуста</p>';
//       $('#cart__content').html(out);
//     }

//     else {
//       console.log(123);
//       let out = '';
//       for (let key in data) {
//         out += '<div class="cart__item">';
//         out += '<a class="cart__link" href="#">';
//         out += '<img class="cart__img" src="' + data[key].image + '">';
//         out += '</a>';
//         out += '<div class="cart__info">';
//         out += '<p class="cart__name">' + data[key]['name'] + '</p>';
//         out += '<p class="cart__price">' + data[key]['cost'] + '₽</p>';
//         out += '</div>';
//         out += '<div class="cart__lots">';
//         // out += '<button class="cart__count cart__count--minus" data-art="' + key + '"></button>';
//         // out += '<p class="cart__number">' + cart[key] + '</p>';
//         // out += '<button class="cart__count cart__count--plus" data-art="' + key + '"></button>';
//         // out += '<p class="cart__total">' + cart[key] * data[key]['cost'] + '₽</p>';
//         out += '</div>';
//         out += '<button class="cart__delete" data-art="' + key + '"></button>';
//         out += '</div>'
//       }
//       let ot = ""
//       for (let key in cart) {
//         ot += '<button class="cart__count cart__count--minus" data-art="' + key + '"></button>';
//         ot += '<p class="cart__number">' + cart[key] + '</p>';
//         ot += '<button class="cart__count cart__count--plus" data-art="' + key + '"></button>';
//         // ot += '<p class="cart__total">' + cart[key] * data[key]['cost'] + '₽</p>';
//       }
//       $('#cart__content').html(out);
//       $('.cart__count--plus').on('click', plusProducts);
//       $('.cart__count--minus').on('click', minusProducts);
//       $('.cart__delete').on('click', deleteProducts);
//     }
//   })
// }

// function showTotal() {
//   //вывод полной суммы в корзине
//   $(document).on('click', function (e) {
//     console.log(e)
//   })
// }


// $(document).on('click', function () {
//   // console.log(e.target);
//   $('.cart__count').on('click', function () {
//     // console.log(a.target)
//     let txt = $('.cart__total').text();
//     console.log(txt)
//   })
// })
// if ($(document))

// function plusProducts() {
//   let articul = $(this).attr('data-art');
//   cart[articul]++;
// $(document).on('click', function () {
// console.log(e.target);
// $('.cart__count').on('click', function () {
// console.log(a.target)

// })
// })
// saveCartToLS();
//   loadProducts()
//   // total()
// }
// function total() {

//   // let articul = $(this).attr('data-art');
//   let txt = $('.cart__total').text().slice(0, -1);
//   let num = Number(txt);
//   console.log(num)
// }

// function minusProducts() {
//   let articul = $(this).attr('data-art');
//   if (cart[articul] > 1) {
//     cart[articul]--;
//   }
//   else {
//     delete cart[articul];
//     $('.cards__numbers').addClass('cards__numbers--none')
//   };
//   loadProducts();
// }

// function deleteProducts() {
//   let articul = $(this).attr('data-art');
//   delete cart[articul];
//   loadProducts();
// }

// function addToCart() {
//   //добовляю товары в корзину
//   let articul = $(this).attr('data-art');
//   if (cart[articul] != undefined) {
//     cart[articul]++;
//   }
//   else {
//     cart[articul] = 1;
//   }
//   localStorage.setItem('cart', JSON.stringify(cart));
//   //console.log(cart);
//   loadProducts()
// }
// function checkCart() {
//   //проверяю наличие корзины в locolStorage;
//   // console.log(localStorage.getItem('dddsfsf'));
//   if (localStorage.getItem('cart') != null) {
//     cart = JSON.parse(localStorage.getItem('cart'));
//   }
// }

// function showMiniCart() {
//   //показывает содержимое корзины
//   let out = 0;
//   for (let key in cart) {
//     out += cart[key];
//   }
//   $('.header__number--cart').html(out);
//   // $('.cart__content').html(out);
//   // $('.cart').html(out);
// }

// function saveCartToLS() {
//   //сохранение корзины в local storage
//   localStorage.setItem('cart', JSON.stringify(cart));
// }











