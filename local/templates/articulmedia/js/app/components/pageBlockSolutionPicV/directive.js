//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log',
  function ($rootScope, $http, $timeout, $window, $state, $log) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      let element = $scope.element =  $($element);

      //parallax part
      let elClass = 'pinit-' + Math.floor(Math.random()*50);
      element.addClass(elClass);

      let SMcontroller = new ScrollMagic.Controller({loglevel: 0});
      let SMscene;


      //making a "speedbump" for srolling this section
      let scrollStopY = false;
      let scrollStoperTO = false;
      let scrollStoperAppliedTO = false;
      let scrollStopDirection = false;

      let scrollStopper = function(event) {

        if ((scrollStopDirection == "FORWARD" && $(window).scrollTop() < scrollStopY) || (scrollStopDirection == "REVERSE" && $(window).scrollTop() > scrollStopY)) return;
        
        $(window).scrollTop(scrollStopY);

        scrollStoperAppliedTO  = $timeout(function(){
          $(window).off("scroll", scrollStopper);
          $(window).on("scroll", scrollReenable);
          scrollStoperAppliedTO = false;
        },400);
        return false;
      };

      let scrollReenable = function(event) {
        $(window).off("scroll", scrollReenable);
        $.scrollify.enable();
      }



      function parallaxInit() {
        $scope.SMscene = new ScrollMagic.Scene({
              triggerElement: `.${elClass} .pinit`, 
              triggerHook: "0.2", 
              duration: function() {
                let duration = $(`.${elClass} .pinit-trigger`).height() - $(`.${elClass} .pinit`).height();
                return (duration > 0)? duration : 0;
              }
            })
            .setPin(`.${elClass} .pinit`, {
              pushFollowers : false
            })
            .addTo(SMcontroller);
        $timeout(function(){
          $.scrollify.update();
        },0);

        $scope.SMscene.on('enter', function(event){
          if (scrollStoperTO || scrollStoperAppliedTO) return;
          if (event.scrollDirection == "FORWARD") {
            scrollStopY = element.offset().top + element.height() - $(window).height();
          } else {
            scrollStopY = element.offset().top;
          }
          scrollStopDirection = event.scrollDirection;

          $.scrollify.disable();
          $(window).on( "scroll",scrollStopper);
        });
      }

      $scope.$watch(function() {
          return $rootScope.isDesktop;
        },
        function( newVal ) {
          if (newVal) {
            parallaxInit();
          } else {
            if ($scope.SMscene) { 
              $scope.SMscene.destroy(true);
            }
          }
        }
      );

      $scope.$on(
        "$destroy",
        function( event ) {
          if ($scope.SMscene) {
            $scope.SMscene.destroy();
          }
        }
      );
    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
    template: require('./template.html'),
    scope: false,
    replace: true,
    // scope: {
    //   'block': '='
    // }
  };
}];