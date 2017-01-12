//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log', '$mdMedia', 
  function ($rootScope, $http, $timeout, $window, $state, $log, $mdMedia) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      $rootScope.$on('pageDataLoaded', function () {
        $scope.page = tranformCase($scope.page);
      });

      function tranformCase(caseObj){
        let tmpCase = caseObj;

        return tmpCase;
      };

    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
    template: require('./template.html'),
    replace: false,
    scope: true,
  };
}];