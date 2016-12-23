//CONTROLLER
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state) {
    $scope.$rootScope = $rootScope;
    $log.debug($scope);
    // $scope.showImgPopup = artPopupImgCtrl.showImgPopup;
    
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
      // movingToCenter: function ($item) {
      //   $log.debug('movingToCenter: ' + $item.data('slideindex'));
      //   $scope.activeSlideIndex = $item.data('slideindex');
      // },
      movedToCenter: function ($item) {
        $scope.activeSlideIndex = $item.data('slideindex');
      },
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

}];