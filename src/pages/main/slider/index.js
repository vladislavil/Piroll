import './slider.pug';
import './index.sass';

import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper/dist/js/swiper.min.js';


export default () => {
  new Swiper('.slider__content', {
    speed: 400,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
}

