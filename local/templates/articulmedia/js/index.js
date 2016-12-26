import sprite from './sprite.js'; //Генератор svg спрайта
import app from './app/app.js'; //angular app


//reqire all files from context dir
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}
