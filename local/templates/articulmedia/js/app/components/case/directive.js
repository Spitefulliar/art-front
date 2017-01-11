//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log', '$mdMedia', 
  function ($rootScope, $http, $timeout, $window, $state, $log, $mdMedia) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {

      $rootScope.$on('pageDataLoaded', function () {
        $scope.case = tranformCase($scope.page);
      });

      function tranformCase(caseObj){
        let tmpCase = caseObj;
        let annonce = tmpCase.sections[0].blocks.filter(function(el){
          return el.type == "announce";
        })[0];
        if (annonce) {
          annonce.style.aboutBgColors = convertHexToRgba(annonce.style.aboutBgColor,[100,80,40]);
        }
        return tmpCase;
      };

      function convertHexToRgba(hexColor, opacities) {
        hexColor = hexColor.replace('#','');
        let r = parseInt(hexColor.substring(0,2), 16);
        let g = parseInt(hexColor.substring(2,4), 16);
        let b = parseInt(hexColor.substring(4,6), 16);
        let result;
        if (opacities) {
          if (angular.isArray(opacities)) {
            result = [];
            opacities.forEach(function(opacity) {
              result.push(`rgba(${r},${g},${b},${opacity/100})`);
            });
          } else {
            result = `rgba(${r},${g},${b},${opacity/100})`;
          }
        } else {
          result= `rgb(${r},${g},${b})`;
        }
        return result;
      }
    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
    template: require('./template.html'),
    // scope: {}
  };
}];