//CONTROLLER
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX, '$location', '$log', '$timeout', '$window', '$state', '$sce', '$http',
  function($scope, $rootScope, $moduleService, $location, $log, $timeout, $window, $state, $sce, $http) {

  $scope[CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX] = $moduleService;

  //slick config for 360 slider
  $scope.slickConfigMobile = {
    enabled: true,
    autoplay: false,
    draggable: true,
    adaptiveHeight: false,
    infinite: true,
    method: {},
    cssEase: false,
    useCSS: false,
    dots: true,
    arrows: false,
    mobileFirst: true,
    swipe: true,
    easing: 'linear',
    swipeToSlide: true,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    centerPadding: '20px',
  };

  //popup carousel config
  $scope.slickConfigPopup = {
    enabled: true,
    autoplay: false,
    draggable: true,
    infinite: false,
    method: {},
    cssEase: false,
    useCSS: false,
    dots: true,
    arrows: false,
    mobileFirst: true,
    respondTo: 'window',
    swipe: true,
    easing: 'linear',
    swipeToSlide: true,
    variableWidth: false,
    centerMode: true,
    centerPadding: '0px',
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: true,
    slidesToScroll: 2,
    slidesToShow: 2,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          slidesPerRow: 1,
          adaptiveHeight: true,
        }
      }
    ]
  }
  

}];