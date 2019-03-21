import './gellary.sass';

import 'magnific-popup/dist/jquery.magnific-popup.min';
import 'magnific-popup/dist/magnific-popup.css';

export default () => {
  $('.gellary .gellary__content').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
    }
  });
};
