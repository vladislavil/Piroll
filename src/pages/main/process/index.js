import './index.sass'

export default () => {

  var video = $('.process__video video');
  video = video[0];
  $('.process__video').on("click", function () {
    playPause();
  });

  function playPause() {
    if(video.paused) {
      video.play();
      $('.process__play').hide();
      $(video).attr("controls", "controls");
    }
    else{
      $('.process__play').show();
      video.pause();
      $(video).attr("controls", null);
    }
  }
};
