//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', 
  function ($rootScope, $http, $timeout, $window, $state) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
     
    };
  return {
    restrict: "A",
    link: linkFunction,
    controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
    scope: false
  };
}];