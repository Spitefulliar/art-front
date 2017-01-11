//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log', '$mdMedia', '$stateParams', 
  function ($rootScope, $http, $timeout, $window, $state, $log, $mdMedia, $stateParams) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      $scope.getPage(CONFIG.APP.API_DIR + $scope.pageData.apiParam, $stateParams.pageCode).then(function(response){
        $scope.page = response.page;
        console.log(response.page);
        $scope.pageData.title = $scope.page.title || $scope.pageData.title;
        $rootScope.$broadcast('pageDataLoaded');
        //enabling scrollify for page sections
        let pgSectionsQ = ".page-section";

        function scrollifyDestroy() {
          $.scrollify.destroy();
        };

        let scrollifyTimeout = $timeout(function(){
          $scope.$watch(function() { return $mdMedia('gt-sm'); }, function(mquery) {
            if (mquery) {
              $.scrollify({
                section : pgSectionsQ,
                sectionName : "",
                updateHash: false,
                interstitialSection : "",
                easing: "easeOutExpo",
                scrollSpeed: 600,
                offset : 0,
                scrollbars: true,
                standardScrollElements: "",
                updateHash: false,
                setHeights: false,
                touchScroll: true,
                overflowScroll: true,
              });

            } else {
              scrollifyDestroy();
            }
          });
        });

        $scope.$on(
        "$destroy",
          function( event ) {
            $timeout.cancel( scrollifyTimeout );
            scrollifyDestroy();
          }
        );

      });
    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
    // template: require('./template.html'),
    // scope: {}
  };
}];