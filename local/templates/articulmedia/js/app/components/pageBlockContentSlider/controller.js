//CONTROLLER
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$sce', '$http',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $sce, $http) {

  $scope.$rootScope = $rootScope;

  $scope.slickConfigSlider = {
    enabled: true,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: true,
    adaptiveHeight: false,
    infinite: true,
    cssEase: false,
    useCSS: false,
    dots: true,
    dotsClass: 'slick-dots slick-numbers',
    arrows: false,
    mobileFirst: true,
    swipe: true,
    easing: 'linear',
    swipeToSlide: true,
    slidesToScroll: 1,
    variableWidth: false,
    centerMode: true,
    centerPadding: '0px',
  };
  
}];