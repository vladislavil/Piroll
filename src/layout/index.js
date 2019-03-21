import './base';
import './grid';
import './header';
import './footer';

export default () => {
  console.log('init layout');
  var $rep = /[/?#'\'!,%$@]/;
  var $location = location.href.split($rep);
  $location = $location.filter(function(n){ return n !== "" });
  if ($location[2] === "main" || $location[2] === "main.html") {
    $('.header').hide();
  }
};
