//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log',
  function ($rootScope, $http, $timeout, $window, $state, $log) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      let element = $scope.element =  $($element);
      let crouselEl = $($element).find('.carousel-waterwheel');
      let crouselElContainer = $($element).find('.carousel-waterwheel__container');
      let carouselResizeTimeout;

      $scope.activeSlideIndex = 0;


      function carouselOptionsUpdate(newwidth) {
        let elW = crouselElContainer.width();
        $scope.carouselOptions.separation = ($rootScope.isDesktop)? Math.round(0.25 * elW): Math.round(0.12 * elW);//Math.round(200 * (elW/1245));
        // $scope.carouselOptions.shift = Math.round($scope.carouselOptions.separation * Math.pow($scope.carouselOptions.separationMultiplier,$scope.carouselOptions.flankingItems));
      }

      function carouselResize() {
        if (carouselResizeTimeout) $timeout.cancel(carouselResizeTimeout);
        carouselResizeTimeout = $timeout(function() {
          carouselOptionsUpdate();
          $scope.carousel.reload($scope.carouselOptions);
        },200);
      }

      $timeout(function(){


        carouselOptionsUpdate();
        $scope.carousel = crouselEl.waterwheelCarousel($scope.carouselOptions);

        $scope.next = function() { 
          $scope.carousel.next();
        };
        $scope.prev = function() { 
          $scope.carousel.prev();
        };


        $(window).resize(carouselResize);

        $scope.$watch('slides', function() {
          carouselResize();
        });

        //making reflections
        let getImgpos = function(img){
          return [parseInt(img.css('top')) + img.height() + 'css', img.css('left')];
        };
        let setCanvasPos = function(newPos, canvas) {
          canvas.css('top',newPos[0]);
          canvas.css('left',newPos[1]);
        };

        let updateCanvasPos = function(img, canvas) {
          setCanvasPos(getImgpos(img), canvas);
        }

        $scope.updateCanvasPos =  function(){
          $timeout(function(){
            let slideItems = $scope.element.find(".carousel-waterwheel__slide");

            for (var i = slideItems.length - 1; i >= 0; i--) {
              let img = slideItems.eq(i).find('img');
              let canvas = slideItems.eq(i).find('canvas');
              updateCanvasPos(img, canvas);
            }
          },0);
        }

        $timeout(function(){

          let reflectOptions = {
            height: 0.2,
            opacity: 0.4
          };

          let slideItems = element.find(".carousel-waterwheel__slide");
          // let images = element.find("img");

          slideItems.addClass('reflected').reflect(reflectOptions);

          
        },0);
        
        
      },0);


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