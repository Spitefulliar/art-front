//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', 
  function ($rootScope, $http, $timeout, $window, $state) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      // console.log($element,$scope.slides);
      let element = $($element);
      let crouselEl = $($element).find('.carousel-waterwheel');
      let crouselElContainer = $($element).find('.carousel-waterwheel__container');

      $scope.carouselOptions = {
        separation: 250,
        separationMultiplier: 0.7,
        sizeMultiplier: 0.85,
        opacityMultiplier: 0.7,
        flankingItems: 2,
        animationEasing: 'swing',
        activeClassName: 'carousel-waterwheel__slide--active',
        keyboardNav: true,
        // movingToCenter: function ($item) {
        //   $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
        // },
        // movedToCenter: function ($item) {
        //   $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
        // },
        // movingFromCenter: function ($item) {
        //   $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
        // },
        // movedFromCenter: function ($item) {
        //   $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
        // },
        // clickedCenter: function ($item) {
        //   $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
        // }
      };


      function carouselOptionsUpdate(newwidth) {
        let elW = crouselElContainer.width();
        $scope.carouselOptions.separation = Math.round(0.2 * elW);//Math.round(200 * (elW/1245));
        // $scope.carouselOptions.shift = Math.round($scope.carouselOptions.separation * Math.pow($scope.carouselOptions.separationMultiplier,$scope.carouselOptions.flankingItems));
        $scope.carouselOptions.shift = Math.round(-$scope.carouselOptions.separation * Math.pow($scope.carouselOptions.separationMultiplier,$scope.carouselOptions.flankingItems - 1));
      }


      $timeout(function(){
        carouselOptionsUpdate();
        $scope.carousel = crouselEl.waterwheelCarousel($scope.carouselOptions);
        // $scope.$watch(function() { return element.width(); }, function(newwidth) {
        //   carouselStyleUpdate(newwidth);
        //   console.log(newwidth);
        //   $scope.carousel.reload($scope.carouselOptions);
        // });
        $(window).resize(function() {
          carouselOptionsUpdate();
          console.log($scope.carouselOptions);
          $scope.carousel.reload($scope.carouselOptions);
        })
      },0);


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