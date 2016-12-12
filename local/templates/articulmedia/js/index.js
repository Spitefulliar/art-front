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
    
});
