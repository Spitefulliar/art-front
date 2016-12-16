import sprite from './sprite.js'; //Генератор svg спрайта
import app from './app/app.js'; //angular app


//reqire all files from ./components
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

//custom modules
// let components = require.context('./components/', true, /^\.\/.*(module)\.js$/);
// components.keys().forEach(components);
// requireAll(components);

$(document).ready(function() {
  //   $('.slick-slider').slick({
		//   dots: true,
		//   infinite: true,
		//   speed: 300,
		//   slidesToShow: 1,
		//   arrows: false
		// });
});
