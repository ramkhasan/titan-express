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