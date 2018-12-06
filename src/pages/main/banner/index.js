import './index.sass'

export default () => {
  var bannerNav = $('.banner .banner__nav');
  var $bannerNav = $(bannerNav);

  $('.banner__header .banner__menu').on("click",function ($index) {
    $(this).toggleClass('change');
    if($bannerNav.hasClass("open")) {
      $('body').toggleClass('noscroll');
      $('html').toggleClass('noscroll');
      $bannerNav.toggleClass('open');
      $bannerNav.toggleClass('close');
    }
    else {
      if($bannerNav.hasClass('close'))
          $bannerNav.removeClass('close');
      $bannerNav.toggleClass('open');
      $('body').toggleClass('noscroll');
      $('html').toggleClass('noscroll');
    }
  });

  $(".banner .banner__header").on("click","a", function (event) {
    if(($(this).attr("href")).charAt(0) === "#") {
      event.preventDefault();


      if($bannerNav.hasClass('open')){
        $bannerNav.toggleClass('oppen');
        $('body').toggleClass('noscroll');
        $('html').toggleClass('noscroll');
        $bannerNav.toggleClass('open');
        $bannerNav.toggleClass('close');
        $('.banner__header .banner__menu').toggleClass('change');
      }

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

