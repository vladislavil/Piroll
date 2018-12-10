import './index.sass'

export default () => {

  var controls = {
    video: $('.process__video .video'),
    playpause: $('.process__circle')
  };

  var video = controls.video[0];

  $(video).on("click", function () {
    playPause();
  });
  $(controls.playpause).on("click", function() {
    playPause();
  });

  function playPause() {
    if(video.paused) {
      video.play();
      $(controls.playpause).hide();
    }
    else{
      $(controls.playpause).show();
      video.pause();
    }
  }
};
