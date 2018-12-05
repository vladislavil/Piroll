import './index.sass'
import './main.pug'
import initBanner from './banner'
import  './aboutus'
import './skills'
import 'blocks/numbers'
import './work'
import initProcess from './process'
import './need-project'
import './clients'
import './services'
import initSlider from './slider'

export default ($root) => {
  initProcess();
  initSlider();
  initBanner();

  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();
      } else {
        $('#toTop').fadeOut();
      }
    });
    $('#toTop').click(function() {
      $('body,html').animate({scrollTop:0},800);
    });
  });
}
