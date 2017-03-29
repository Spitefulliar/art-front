//CONTROLLER
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX, '$location', '$log', '$timeout', '$window', '$state', '$sce', '$http',
  function($scope, $rootScope, $moduleService, $location, $log, $timeout, $window, $state, $sce, $http) {

  $scope[CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX] = $moduleService; 
  
  let transformBgColors = (items)=> {
    let opacity = 60;
    let color = "#fff";
    items.forEach(function(el,index) {
      el.bgColor = $rootScope.convertHexToRgba(color,opacity);
      opacity = (opacity <= 10)? 60 : opacity - 10;
    });
  };

  $scope.$on(
    "pageDataLoaded",
    function() {
      if ($scope.currentData.blocks) transformBgColors($scope.currentData.blocks);
    }
  );
  
}];