$(window).on('load',function(){
  $(window).scroll(function (){
    $('.fade-up').each(function(){
      var POS = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > POS - windowHeight){
        $(this).addClass('fade-up_on');
        $(this).removeClass('fade-up_off');
      } 
      else {
        $(this).addClass('fade-up_off');
        $(this).removeClass('fade-up_on');
      }
    });
  });
});