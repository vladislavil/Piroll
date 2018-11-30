import './index.sass'

export default () => {

  var controls = {
    video: $('.process__video .video'),
    playpause: $('.process__circle')
  };

  var video = controls.video[0];
  var play;

  controls.playpause.click(function(){
    if(video.paused) {
      video.play();
      play = 1;
      $('.process__control').toggleClass("pause");
    }
    else {
      video.pause();
      play = 0;
      $('.process__control').toggleClass("pause");
    }

    //  if(play === 1) {
    //   window.onmousemove = function (event) {
    //     var info = $(event.target).attr("class");
    //     if(info !== controls.playpause.attr("class") && info !== "process__control pause") {
    //       if(info === controls.video.attr("class")){
    //         controls.playpause.show();
    //         setTimeout(function () {controls.playpause.hide()}, 3000);
    //       }
    //     }
    //   }
    // }
  });
};
