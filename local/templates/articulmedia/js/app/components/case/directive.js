//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log', '$mdMedia', 
  function ($rootScope, $http, $timeout, $window, $state, $log, $mdMedia) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      $scope.getCase().then(function(currentCase){
        $scope.case = currentCase;
        $log.debug('case',$scope.case);

          $timeout(function(){
            
            $scope.$watch(function() { return $mdMedia('gt-sm'); }, function(mquery) {
              if (mquery) {
                // $.scrollify.enable();
                $.scrollify({
                  section : ".case-section",
                  sectionName : "",
                  updateHash: false,
                  interstitialSection : "",
                  easing: "easeOutExpo",
                  scrollSpeed: 600,
                  offset : 0,
                  scrollbars: false,
                  standardScrollElements: "",
                  updateHash: false,
                  setHeights: false,
                  touchScroll: true,
                  overflowScroll: true,
                  before:function() {},
                  after:function() {},
                  afterResize:function() {},
                  afterRender:function() {}
                });

              } else {
                $.scrollify.destroy();
                $('body').css('overflow', '');
              }
            });
            
          });
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