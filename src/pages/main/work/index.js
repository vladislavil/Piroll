import './index.sass';
import './work.pug';
import 'blocks/gellary';
import 'magnific-popup/dist/jquery.magnific-popup.min';
import 'magnific-popup/dist/magnific-popup.css';

export default () => {
  $('.work .gellary__content').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
    }
  });
};
