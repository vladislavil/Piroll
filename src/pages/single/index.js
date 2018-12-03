import './index.sass'
import './single.pug'

import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper/dist/js/swiper.min.js'


export default () => {
  new Swiper('.single__slider-wrapper', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 30,
    preventInteractionOnTransition: false,
    noSwiping: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

