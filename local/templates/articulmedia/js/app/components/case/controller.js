//CONTROLLER
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX, '$location', '$log', '$timeout', '$window', '$state', '$sce', '$http',
  // '$mdSidenav','$mdMedia', 
  function($scope, $rootScope, $moduleService, $location, $log, $timeout, $window, $state, $sce, $http) {
  // $mdSidenav, $mdMedia, 

  $scope[CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX] = $moduleService;


  $moduleService.getCase().then(function(data){
    $scope.case = $moduleService.case;
    console.log($moduleService.case);
  });

}];