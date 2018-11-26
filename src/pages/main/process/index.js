import './index.sass';
import './process.pug';

export default () => {

  var controls = {
    video: $('.process__video  video'),
    playpause: $('.process__circle')
  };

  var video = controls.video[0];
  var play;

  controls.playpause.click(function(){
    if(video.paused) {
      video.play();
      $('.process__control').toggleClass("pause");
      play = 1;
    }
    else {
      video.pause();
      $('.process__control').toggleClass("pause");
      play = 0;
    }
  });

  controls.video.mousemove( function () {
    if(play == 1)
      controls.playpause.show();
  });

  window.onmousemove = function (event) {
    if(play == 1) {
      if($(event.target).attr("class") !== controls.playpause.attr("class")) {
        setTimeout(function () {controls.playpause.hide()}, 3000);
      }
    }
  }
};
