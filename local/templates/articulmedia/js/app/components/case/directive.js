//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log',
  function ($rootScope, $http, $timeout, $window, $state, $log) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      $scope.getCase().then(function(currentCase){
        $scope.case = currentCase;
        $log.debug('case',$scope.case);
      });
    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
    template: require('./template.html'),
    // scope: {}
  };
}];