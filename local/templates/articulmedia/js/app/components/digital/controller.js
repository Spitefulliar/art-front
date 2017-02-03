//CONTROLLER
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX, '$location', '$log', '$timeout', '$window', '$state', '$sce', '$http',
  function($scope, $rootScope, $moduleService, $location, $log, $timeout, $window, $state, $sce, $http) {

  $scope[CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX] = $moduleService;

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

  

}];