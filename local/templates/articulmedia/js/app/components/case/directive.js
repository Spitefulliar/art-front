//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log', '$mdMedia', 
  function ($rootScope, $http, $timeout, $window, $state, $log, $mdMedia) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      $scope.getCase().then(function(currentCase){
        $scope.case = currentCase;
        $log.debug('case',$scope.case);

          // $.scrollify({
          //   section : ".case-block",
          //   // sectionName : "case-block",
          //   updateHash: false,
          //   interstitialSection : "",
          //   easing: "easeOutExpo",
          //   scrollSpeed: 1100,
          //   offset : 0,
          //   scrollbars: false,
          //   standardScrollElements: "",
          //   setHeights: true,
          //   touchScroll: true,
          //   overflowScroll: false,
          //   before:function() {},
          //   after:function() {},
          //   afterResize:function() {},
          //   afterRender:function() {}
          // });

          // $scope.$watch(function() { return $mdMedia('gt-sm'); }, function(mquery) {
          //   if (mquery) {
          //     $.scrollify.enable();
          //   } else {
          //     $.scrollify.disable();
          //   }
          // });
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