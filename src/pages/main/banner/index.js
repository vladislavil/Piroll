import './index.sass'

export default () => {
  var $bannerNav = $('.banner .banner__nav');
  var $wrapper = $('.banner .banner__wrapper');

  // $('.banner .banner__menu').on('click', function () {
  //   $($bannerNav).animate({transform: translate("0, 100%") },500);
  // });

  $('.banner__header .banner__menu').on("click",function ($index) {
    if($($bannerNav).hasClass("open")) {
      $('body').toggleClass('noscroll');
      $('html').toggleClass('noscroll');
      $($bannerNav).toggleClass('open');
      $($bannerNav).toggleClass('close');
      //setTimeout(function () {$($wrapper).toggleClass('index')}, 100);

    }
    else {
      if($($bannerNav).hasClass('close'))
          $($bannerNav).removeClass('close');
      //$($wrapper).toggleClass('index');
      $($bannerNav).toggleClass('open');
      $('body').toggleClass('noscroll');
      $('html').toggleClass('noscroll');
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

