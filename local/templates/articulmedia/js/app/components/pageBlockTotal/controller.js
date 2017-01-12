//CONTROLLER
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$sce', '$http',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $sce, $http) {

  $scope.$rootScope = $rootScope;

  $scope.slickConfigSlogan = {
    enabled: true,
    autoplay: true,
    draggable: true,
    adaptiveHeight: true,
    infinite: true,
    method: {},
    cssEase: false,
    useCSS: false,
    dots: false,
    arrows: false,
    mobileFirst: true,
    respondTo: 'slider',
    swipe: true,
    easing: 'linear',
    swipeToSlide: true,
    slidesToScroll: 1,
    variableWidth: false,
    centerMode: true,
    centerPadding: '0',
    event: {
      beforeChange: function (event, slick, currentSlide, nextSlide) {
      },
      afterChange: function (event, slick, currentSlide, nextSlide) {
      }
    },
  };
  
}];