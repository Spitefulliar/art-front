//CONTROLLER
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX, '$location', '$log', '$timeout', '$window', '$state', '$sce', '$http', '$mdSidenav','$mdMedia',
  function($scope, $rootScope, $moduleService, $location, $log, $timeout, $window, $state, $sce, $http, $mdSidenav, $mdMedia) {

  $scope[CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX] = $moduleService;

  //media
  $scope.$watch(function() { return $mdMedia('gt-sm'); }, function(mquery) {
    $scope.isDesktop = mquery;
  });
  $scope.$watch(function() { return $mdMedia('sm'); }, function(mquery) {
    $scope.isTablet = mquery;
  });
  $scope.$watch(function() { return $mdMedia('xs'); }, function(mquery) {
    $scope.isMobile = mquery;
  });

  var myAppModule = angular.module('MyApp', ['slickCarousel'])

  $scope.slickConfigMenu = {
    enabled: true,
    // autoplay: true,
    draggable: true,
    // adaptiveHeight: true,
    autoplaySpeed: 6000,
    infinite: true,
    centerMode: true,
    centerPadding: '18%',
    slidesToShow: 1,
    cssEase: false,
    useCSS: false,
    dots: true,
    arrows: false,
    mobileFirst: true,
    respondTo: 'slider',
    swipe: true,
    easing: 'linear',
    swipeToSlide: true,
    slidesToScroll: 1,
    variableWidth: false,
    centerMode: true,
    responsive: [
    {
      breakpoint: 600,
      settings: {
        centerPadding: '30%',
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerPadding: '25%',
      }
    }
  ]
    // slidesToShow: 3,
    

  };


  //sidenav
  $scope.sidenavToggle = function(){
    $mdSidenav('sidenav-right').toggle();
  }

  $scope.sidenavHide = function() {
    $mdSidenav('sidenav-right').close();
  }

  $scope.sidenavHideMedia = function() {
    if ($mdMedia('gt-sm')) {
      $scope.sidenavHide();
    }
    return $mdMedia('gt-sm');
  }

  $scope.$watch($scope.sidenavHideMedia);

  //eof sidenav

  //for html binding
  $scope.trustAsHtml = function(value) {
    return $sce.trustAsHtml(value);
  };

  $rootScope.$on('$stateChangeSuccess', 
    function(event, toState, toParams, fromState, fromParams){ 
      $scope.pageData = $state.current.data;

      if ($scope.sidenavIsOpen) {
        $scope.sidenavHide();
      }
    }
  );

}];