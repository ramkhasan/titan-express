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