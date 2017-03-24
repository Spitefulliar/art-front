//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log',
  function ($rootScope, $http, $timeout, $window, $state, $log) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      let element = $scope.element =  $($element);
      let carouselElContainer = element.find('.carousel-3d__container');
      let carouselResizeTimeout;

      $scope.activeSlideIndex = 0;

      $scope.slideChanged = function(index) {
        $scope.activeSlideIndex = index;
      };

      function getSLidesQuantity() { 
        return ($rootScope.isDesktop)? 5 : 3;
      };

      function getImgSource() { 
        return ($rootScope.isDesktop)? 'desktop' : 'mobile';
      };

      function getSlideWidth() { 
        let elW = carouselElContainer.width();
        let width = ($rootScope.isDesktop)? Math.round(0.65 * elW): Math.round(0.7 * elW);
        return width;
      }

      function getSlideHeight() { 
        return carouselElContainer.height();
      }
      function getSlideSpacing() {
        let elW = carouselElContainer.width();
        let separation = ($rootScope.isDesktop)? Math.round(0.23 * elW): Math.round(0.3 * elW);//Math.round(200 * (elW/1245));
        // return carouselElContainer.width() * 0.4;
        return separation;
      }

      function makeReflections() {
        let reflectOptions = {
          height: 0.1,
          opacity: 0.2
        };
        let slideItems = element.find("img");
        if (!slideItems.length) {
          $timeout(function(){
            makeReflections();
          },200);
        } else {
          $timeout(function(){
            slideItems.reflect(reflectOptions);
          },200);
        };
      };

      $scope.slideOptions = {
        sourceProp: getImgSource(),
        visible: getSLidesQuantity(),
        perspective: 1,
        inverseScaling: 80,
        startSlide: 0,
        border: 0,
        dir: 'ltr',
        width: getSlideWidth(),
        height: getSlideHeight(),
        space: getSlideSpacing(),
        autoRotationSpeed: false,
        loop: true,
        clicking: true,
      };

      function carouselOptionsUpdate() {
        $scope.slideOptions.visible = getSLidesQuantity();
        $scope.slideOptions.sourceProp = getImgSource();
        $scope.slideOptions.width = getSlideWidth();
        $scope.slideOptions.height = getSlideHeight();
        // $scope.slideOptions.inverseScaling = getSlideHeight(),
        $scope.slideOptions.space = getSlideSpacing();
        $scope.activeSlideIndex = 0;
      };

      function carouselResize() {
        if (carouselResizeTimeout) $timeout.cancel(carouselResizeTimeout);
        carouselResizeTimeout = $timeout(function() {
          carouselOptionsUpdate();
          makeReflections();
        },200);
      };



      $(window).resize(carouselResize);

      $scope.$watch('slides', function() {
        carouselResize();
      });

      $scope.$on(
        "$destroy",
        function( event ) {
          $timeout.cancel( carouselResizeTimeout );
          $(window).off("resize", carouselResize);
        }
      );

    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
    template: require('./template.html'),
    scope: {
      'slides': '='
    }
  };
}];