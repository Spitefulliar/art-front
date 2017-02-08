//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log',
  function ($rootScope, $http, $timeout, $window, $state, $log) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      let element = $scope.element =  $($element);
      let shift = $attributes.shift || 40;
      let duration = $attributes.diration || 300;
      let elClass = 'parallax-' + Math.floor(Math.random()*50);
      element.addClass(elClass);

      function parallaxInit(shift,duration) {
        let SMcontroller = new ScrollMagic.Controller();

        var bgTimeline = new TimelineMax({
          paused: false
        });
        let bgTween = TweenMax.fromTo(`.${elClass} .parallax-bg`, 1, {
            y: `+=${shift*0}%`, ease: Linear.easeNone
          },{
            y: `-=${shift}%`, ease: Linear.easeNone
          }
        ); 

        bgTimeline.add(bgTween);
        
        new ScrollMagic.Scene({
              triggerElement: `.${elClass} .parallax-viewport`, 
              triggerHook: "onEnter", 
              duration: `${duration}%`
            })
            .setTween(bgTimeline)
            // .setTween(`.${elClass} .parallax-bg`, {y: shift.toString(), ease: Linear.easeNone})
            .addTo(SMcontroller);
      }

      $timeout(function(){ 
        parallaxInit(shift,duration);
      },100);
      
    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
    template: require('./template.html'),
    transclude: false,
    scope: {
      'image': '=',
      'shift': '=',
      'duration': '='
    }
  };
}];