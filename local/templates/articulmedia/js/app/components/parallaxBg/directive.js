//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log',
  function ($rootScope, $http, $timeout, $window, $state, $log) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      let element = $scope.element =  $($element);
      let bgScale = $attributes.scale || 1.5;
      let shift = $attributes.shift || (bgScale - 1)*100/bgScale;
      let duration = $attributes.diration || 100;
      let elClass = 'parallax-' + Math.floor(Math.random()*50);
      element.addClass(elClass);

      let parappaxBg = $(`.${elClass} .parallax-bg`);
      parappaxBg.css('height',`${bgScale * 100}%`);

      let SMcontroller = new ScrollMagic.Controller();

      function parallaxInit(shift,duration) {

        var bgTimeline = new TimelineMax({
          paused: false
        });

        let bgTween = TweenMax.fromTo(parappaxBg, 1, {
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
            .addTo(SMcontroller);
      }

      $timeout(function(){ 
        parallaxInit(shift,duration);
      },100);
      

      $scope.$on(
        "$destroy",
        function( event ) {
          SMcontroller.destroy();
        }
      );
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
      'duration': '=',
      'scale': '=',
    }
  };
}];