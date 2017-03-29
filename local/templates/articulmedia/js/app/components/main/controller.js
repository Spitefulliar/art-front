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

  //eof sidenav

  $rootScope.$on('$stateChangeSuccess', 
    function(event, toState, toParams, fromState, fromParams){ 
      $scope.pageData = $state.current.data;
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
    if (hexColor.length == 3) hexColor += hexColor;
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
        result = `rgba(${r},${g},${b},${opacities/100})`;
      }
    } else {
      result= `rgb(${r},${g},${b})`;
    }
    return result;
  }

}];