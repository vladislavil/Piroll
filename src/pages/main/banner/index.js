import './index.sass'

export default () => {
  var $bannerNav = $('.banner .banner__nav');
  var $wrapper = $('.banner .banner__wrapper');

  $('.banner__header .banner__menu').on("click",function ($index) {
    if($($bannerNav).hasClass("open")) {
      $('body').toggleClass('noscroll');
      $('html').toggleClass('noscroll');
      $($bannerNav).toggleClass('open');
      $($bannerNav).toggleClass('close');
      $($wrapper).animate({opacity: '1'},300);
      $($wrapper).toggleClass('index');
    }
    else {
      if($($bannerNav).hasClass('close'))
          $($bannerNav).removeClass('close');
      $($bannerNav).toggleClass('open');
      $('body').toggleClass('noscroll');
      $('html').toggleClass('noscroll');
      $($wrapper).animate({opacity: '0'},300);
      setTimeout(function () {$($wrapper).toggleClass('index')}, 300);
    }
  });

  $(".banner .banner__header").on("click","a", function (event) {
    if(($(this).attr("href")).charAt(0) === "#") {
      event.preventDefault();

      const target = $(this).attr('href');
      const $target = $(target);

      if ($target.length) {
        $('html, body')
          .stop()
          .animate({
            scrollTop: $target.offset().top,
          }, 500);
      }
    }
  });
}

