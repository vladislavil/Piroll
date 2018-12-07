import './index.sass'

export default () => {
  var bannerNav = $('.banner .banner__nav');
  var $bannerNav = $(bannerNav);
  var menu =  $('.banner__header .banner__menu');
  var $menu = $(menu);

  $menu.on("click",function ($index) {
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

  $(window).on('load resize',windowSize);

  $(".banner .banner__header").on("click","a", function (event) {
    if(($(this).attr("href")).charAt(0) === "#") {
      event.preventDefault();

      if($bannerNav.hasClass('open')){
        $bannerNav.toggleClass('oppen');
        $('body').toggleClass('noscroll');
        $('html').toggleClass('noscroll');
        $bannerNav.toggleClass('open');
        $menu.toggleClass('change');
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

  function windowSize(){
    if ($(window).width() > 767 ){
      if($bannerNav.hasClass('open')){
        $bannerNav.toggleClass('open');
        $('body').toggleClass('noscroll');
        $('html').toggleClass('noscroll');
        $menu.toggleClass('change');
      }
    }
  }
}

