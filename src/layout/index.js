import './base';
import './grid';
import './header';
import './footer';

export default () => {
  console.log('init layout');
  var $location = location.href.split('/');
  $location = $location.filter(function(n){ return n != "" });
  if ($location[2] === "main.html") {
    $('.header').hide();
  }
};
