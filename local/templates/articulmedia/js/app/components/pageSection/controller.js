//CONTROLLER
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$element', '$log', '$timeout',
  function($scope, $rootScope, $element, $log, $timeout) {

  $scope.$rootScope = $rootScope;
  
}];