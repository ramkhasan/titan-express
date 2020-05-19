// Показывать Яндекс карту только тогда, когда докрутили до неё
$(document).ready(function() {
  var offer = $('.offer');
  var offerTop = offer.offset().top;
  $(window).bind('scroll', function () {
      var windowTop = $(this).scrollTop();
      if (windowTop > offerTop) {
          $('#map-1').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A13c90393617a99c9e07de0dd0d78e170a086634e6e7f810dbf1c4219480276cf&amp;width=100%25&amp;height=587&amp;lang=ru_RU&amp;scroll=false"></script>')
          $(window).unbind('scroll')
      }
  });
});
// Показывать Яндекс карту только тогда, когда докрутили до неё
$(document).ready(function() {
  var offer = $('.offer');
  var offerTop = offer.offset().top;
  $(window).bind('scroll', function () {
      var windowTop = $(this).scrollTop();
      if (windowTop > offerTop) {
          $('#map-2').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Af6ddf282e92995de837759c4e426e91b6ae246c52c932a82d112cd547d5f2079&amp;width=100%25&amp;height=587&amp;lang=ru_RU&amp;scroll=false"></script>')
          $(window).unbind('scroll')
      }
  });
});
// Показывать Яндекс карту только тогда, когда докрутили до неё
$(document).ready(function() {
  var offer = $('.offer');
  var offerTop = offer.offset().top;
  $(window).bind('scroll', function () {
      var windowTop = $(this).scrollTop();
      if (windowTop > offerTop) {
          $('#map-1-mob').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A48aa93be8f59bcd57279c45e5b4431aafc0cb3aabcc5f22388eedb9fc31b0557&amp;width=100%25&amp;height=720&amp;lang=ru_RU&amp;scroll=false"></script>')
          $(window).unbind('scroll')
      }
  });
});
// Показывать Яндекс карту только тогда, когда докрутили до неё
$(document).ready(function() {
  var offer = $('.offer');
  var offerTop = offer.offset().top;
  $(window).bind('scroll', function () {
      var windowTop = $(this).scrollTop();
      if (windowTop > offerTop) {
          $('#map-2-mob').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A84d641dc0b761fa20ae88ab48795e2237ef51893619e4e79142d86592af2a187&amp;width=100%25&amp;height=720&amp;lang=ru_RU&amp;scroll=false"></script>')
          $(window).unbind('scroll')
      }
  });
});

// Показать/скрыть текст 
$('.production-button').click(function(){
  if($(this).siblings(".production-text__block").hasClass("show")){
    $(this).removeClass("up");
    $(this).text("Читать далее");
    $(this).siblings(".production-text__block").animate({
      height: '57vh'
    }, 1000);
    $(this).siblings(".production-text__block").removeClass("show");
  } 
  else {
    $(this).siblings(".production-text__block").addClass("show");
    $(this).siblings(".production-text__block").animate({
      height: $(this).siblings(".production-text__block").get(0).scrollHeight
    }, 1000, function(){
      $(this).height('auto');
    });
    $(this).addClass("up");
    $(this).text("Скрыть");
  }
})
// Валидация формы на главном экране
$(document).ready(function() {
  $('#hero-form').validate({
      rules: {
          username: {
              required: true,
              minlength: 2,
              maxlength: 15
          },
          userphone: {
              required: true,
          }
      },
      messages: {
          username: {
              required: "Укажите Ваше имя",
              minlength: jQuery.validator.format("Осталось символов: {0}"),
              maxlength: jQuery.validator.format("Не больше 15 символов")
          },
          userphone: {
              required: "Укажите Ваш телефон",
          }
      },
      errorElement: "div",
      submitHandler: function(form) {
      modal.addClass('modal_active');
      }
  });
  // Маска для телефона
  $('.phone').mask('+7 (999) 999-99-99');
});
// Валидация формы на экране с оффером
$(document).ready(function() {
  $('#offer-form').validate({
      rules: {
          user_name: {
              required: true,
              minlength: 2,
              maxlength: 15
          },
          user_phone: {
              required: true,
          }
      },
      messages: {
          user_name: {
              required: "Укажите Ваше имя",
              minlength: jQuery.validator.format("Осталось символов: {0}"),
              maxlength: jQuery.validator.format("Не больше 15 символов")
          },
          user_phone: {
              required: "Укажите Ваш телефон",
          }
      },
      errorElement: "div",
      submitHandler: function(form) {
      modal.addClass('modal_active');
      }
  });
  // Маска для телефона
  $('.phone').mask('+7 (999) 999-99-99');
});
// Скрипт для браузеров, не поддерживающих атрибут download
if ( ! Modernizr.adownload ) {
  var $link = $('a');
 
    $link.each(function() {
        var $download = $(this).attr('download');
     
        if (typeof $download !== typeof undefined && $download !== false) {
      var $el = $('<div>').addClass('download-instruction').text('Кликните правой кнопкой мыши и выберите «Скачать файл»');
      $el.insertAfter($(this));
        }
 
    });
}