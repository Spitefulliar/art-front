//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log', '$mdMedia', 
  function ($rootScope, $http, $timeout, $window, $state, $log, $mdMedia) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      $scope.getCase().then(function(currentCase){
        $scope.case = currentCase;
        // $log.debug('case',$scope.case);

        function scrollifyDestroy() {
          $.scrollify.destroy();
          $('body').css('overflow', '');
        };

        let caseTimeout = $timeout(function(){
          
          $scope.$watch(function() { return $mdMedia('gt-sm'); }, function(mquery) {
            if (mquery) {
              $.scrollify({
                section : ".page-section",
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
              scrollifyDestroy();
            }
          });
          
        });

        $scope.$on(
        "$destroy",
          function( event ) {
            $timeout.cancel( caseTimeout );
            scrollifyDestroy();
          }
        );

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