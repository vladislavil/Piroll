import './index.sass'

export default () => {
  var bannerNav = $('.banner .banner__nav');
  var $bannerNav = $(bannerNav);
  var menu =  $('.banner__header .banner__menu');
  var $menu = $(menu);

  $menu.on("click", function () {
    $(this).toggleClass("change");
    $bannerNav.toggleClass('menu-opened');
    $('body').toggleClass('noscroll');
    $('html').toggleClass('noscroll');
  });

  $(window).on('load resize',windowSize);

  $(".banner .banner__header").on("click","a", function (event) {
    if(($(this).attr("href")).charAt(0) === "#") {
      event.preventDefault();

      if($bannerNav.hasClass('menu-opened')){
        $bannerNav.toggleClass('menu-opened');
        $('body').toggleClass('noscroll');
        $('html').toggleClass('noscroll');
        $menu.toggleClass("change");
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
      if($bannerNav.hasClass('menu-opened')){
        $bannerNav.toggleClass('menu-opened');
        $('body').toggleClass('noscroll');
        $('html').toggleClass('noscroll');
        $menu.toggleClass('change');
      }
    }
  }
}

