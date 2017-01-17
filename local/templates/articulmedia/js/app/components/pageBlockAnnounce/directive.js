//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log',
  function ($rootScope, $http, $timeout, $window, $state, $log) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      //transforming block styles
      function tranformBlock(blockObj){
        let tmpBlock = blockObj;
        tmpBlock.style.aboutBgColors = $rootScope.convertHexToRgba(tmpBlock.style.aboutBgColor,[100,80,40]);
        return tmpBlock;
      };

      $scope.block = tranformBlock($scope.block);
    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
    template: require('./template.html'),
    scope: false,
    replace: true,
    // scope: {
    //   'block': '='
    // }
  };
}];