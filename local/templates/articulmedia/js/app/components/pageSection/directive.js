//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log', '$mdMedia', '$stateParams', 
  function ($rootScope, $http, $timeout, $window, $state, $log, $mdMedia, $stateParams) {

    var linkFunction = function linkFunction($scope, $element, $attributes) {

    };

  return {
    restrict: "AE",
    link: linkFunction,
    controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
    template: require('./template.html'),
    replace: true,
    scope: true
  };
}];