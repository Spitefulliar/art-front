//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log', '$compile',
  function ($rootScope, $http, $timeout, $window, $state, $log, $compile) {

    var linkFunction = function linkFunction($scope, $element, $attributes) {
      var linkFn = $compile('<div art-page-block-' + $attributes.blockType + '-dir ></div>');

      linkFn($scope,function cloneAttachFn(clone, scope) {
        $element.replaceWith(clone);
      });
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