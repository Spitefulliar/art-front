//CONTROLLER
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$sce', '$http',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $sce, $http) {

  $scope.$rootScope = $rootScope;
  
}];