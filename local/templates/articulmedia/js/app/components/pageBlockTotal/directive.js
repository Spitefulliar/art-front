//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log',
  function ($rootScope, $http, $timeout, $window, $state, $log) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {

      function parallaxInit() {
        let SMcontroller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
              triggerElement: '.page-block_total [data-type="parallax-viewport"]', 
              triggerHook: "onEnter", 
              duration: "200%"
            })
            .setTween('.page-block_total [data-type="parallax-bg"]', {y: "40%", ease: Linear.easeNone})
            .addTo(SMcontroller);
      }

      $timeout(parallaxInit,100);

      
    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
    template: require('./template.html'),
    scope: false,
    replace: true,
  };
}];