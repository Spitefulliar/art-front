//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log', '$mdMedia', '$stateParams', 
  function ($rootScope, $http, $timeout, $window, $state, $log, $mdMedia, $stateParams) {
    var compileFunctionPost = function linkFunction($scope, $element, $attributes) {
      let sectionTpl = [];
      let blockTpl = function(type) { 
        return `<art-page-block-${type}-dir block="block"></art-page-block-${type}-dir>`;
      };

      let blocks = $scope.section.blocks;

      if (angular.isArray(blocks)) {
        blocks.forEach(function(block) {
          sectionTpl.push(blockTpl(block.type));
        });
        $($element).html(sectionTpl.join());
      };

    };

    var compileFunction = function linkFunction($element, $attributes) {
      return {
        post: compileFunctionPost
      }
    };
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      // let sectionTpl = [];
      // let blockTpl = function(type) { 
      //   return `<art-page-block-${type}-dir block="block"></art-page-block-${type}-dir>`;
      // };

      // let blocks = $scope.section.blocks;

      // if (angular.isArray(blocks)) {
      //   blocks.forEach(function(block) {
      //     sectionTpl.push(blockTpl(block.type));
      //   });
      //   $($element).html(sectionTpl.join());
      // };

    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
    template: require('./template.html'),
    compile: compileFunction,
    scope: {
      'section': '='
    }
  };
}];