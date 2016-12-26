//CONTROLLER
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state) {
    $scope.$rootScope = $rootScope;
    
    $scope.carouselOptions = {
      linkHandling: 2,
      separation: 250,
      separationMultiplier: 0.7,
      sizeMultiplier: 0.85,
      opacityMultiplier: 0.7,
      flankingItems: 2,
      animationEasing: 'swing',
      activeClassName: 'carousel-waterwheel__slide--active',
      keyboardNav: true,
      movedToCenter: function ($item) {
        $scope.activeSlideIndex = $item.data('slideindex');
      },
      // movingToCenter: function ($item) {
      // },
      // movingFromCenter: function ($item) {
      // },
      // movedFromCenter: function ($item) {
      // },
      // clickedCenter: function ($item) {
      // }
    };

}];