// reqiurements
var jquery = window.$ = window.jQuery = require('jquery');
var sprite = require('./sprite.js');

//reqire all files from ./components
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

//custom modules
let components = require.context('./components/', true, /^\.\/.*(module)\.js$/);
// components.keys().forEach(components);
requireAll(components);

$(document).ready(function() {
    $('.slick-slider').slick({
		  dots: true,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  arrows: false
		});
});
