//CONTROLLER
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$sce', '$http',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $sce, $http) {

  $scope.$rootScope = $rootScope;

  $scope.playerVars = {
    controls: 0,
    modestbranding: 1,
    showinfo: 0,
    rel: 0
  };
  
}];