$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.top-scroll').fadeIn();
    }
    else {
      $('.top-scroll').fadeOut();
    }
  });

  $(window).bind('scroll', function () {
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $('.footer').height();
    if (scrollHeight - scrollPosition <= footHeight + 36) {
      $('.top-scroll').css({
        'position': 'absolute', 'bottom': footHeight
      });
    }
    else {
      $('.top-scroll').css({ 'position': 'fixed', 'bottom': '0px' });
    }
  });

  $('.top-scroll').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 300);
    return false;
  });
});
