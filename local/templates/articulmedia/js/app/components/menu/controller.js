//CONTROLLER
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX, '$location', '$log', '$timeout', '$window', '$state', '$sce', '$http', '$mdSidenav','$mdMedia',
  function($scope, $rootScope, $moduleService, $location, $log, $timeout, $window, $state, $sce, $http, $mdSidenav, $mdMedia) {

  $scope[CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX] = $moduleService;

  //getting nav date fo menu
  $scope.navData = $moduleService.getNavData();

  //slider config for mobile menu
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

  $rootScope.$on('$stateChangeStart', 
    function(event, toState, toParams, fromState, fromParams){ 
      if ($scope.sidenavIsOpen) {
        $scope.sidenavHide();
      }
    }
  );

  /* 
    utils 
  */

  //for html binding
  $scope.trustAsHtml = function(value) {
    return $sce.trustAsHtml(value);
  };

  $scope.applyCss = function(element,prop,rules) {
    if (!rules) return;
    $timeout(function(){
      let elStyle = $(element).attr('style');
      if (angular.isArray(rules)) {
        rules.forEach(function(innerVal) {
          // Here's where the magic happens, thanks to jquery
          elStyle += prop + ':' + innerVal + '; ';
          $(element).attr('style', elStyle);
        });
      }
      else {
        $(element).css(prop, rules); 
      }
    });
  };

  $scope.convertHexToRgba = function(hexColor, opacities) {
    hexColor = hexColor.replace('#','');
    let r = parseInt(hexColor.substring(0,2), 16);
    let g = parseInt(hexColor.substring(2,4), 16);
    let b = parseInt(hexColor.substring(4,6), 16);
    let result;
    if (opacities) {
      if (angular.isArray(opacities)) {
        result = [];
        opacities.forEach(function(opacity) {
          result.push(`rgba(${r},${g},${b},${opacity/100})`);
        });
      } else {
        result = `rgba(${r},${g},${b},${opacity/100})`;
      }
    } else {
      result= `rgb(${r},${g},${b})`;
    }
    return result;
  }

}];