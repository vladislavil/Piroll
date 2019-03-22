import './base';
import './grid';
import './header';
import './footer';

export default () => {
  console.log('init layout');
  var $rep = /[/?#'\'!,%$@]/;
  var $location = location.href.split($rep);
  $location = $location.filter(function(n){ return n !== "" });
  console.log($location);
  if ($location[$location.length-1] === "main" || $location[$location.length-1] === "main.html") {
    $('.header').hide();
  }
};
