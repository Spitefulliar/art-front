//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log', '$mdMedia', '$stateParams', '$compile', 
  function ($rootScope, $http, $timeout, $window, $state, $log, $mdMedia, $stateParams, $compile) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      // taking a page constructor tpl to build a page, if it's a directive element
      var linkFn = (typeof $attributes.artPageConstructorDir == 'string')? false : $compile(require('./template.html'));
      if (linkFn) {
        linkFn($scope,function cloneAttachFn(clone, scope) {
          $element.replaceWith(clone);
        });
      }

      let urlPostfix = (CONFIG.APP.API_POSTFIX && ($rootScope.pageData.apiParam.indexOf(CONFIG.APP.API_POSTFIX) == -1))? CONFIG.APP.API_POSTFIX : '';

      $scope.getPage(CONFIG.APP.API_DIR + $rootScope.pageData.apiParam + urlPostfix, $stateParams.pageCode).then(function(response){
        $scope.page = response.page;
        $scope.pageData.title = $scope.page.title || $scope.pageData.title;
        $rootScope.$broadcast('pageDataLoaded');
        $attributes = $attributes;

        //enabling scrollify for page sections
        if ($scope.page && $scope.page.sections) {
          let pgSectionsQ = ".page-section";
          let pgSectionsEx = ".page-section_long";
          if ($scope.page.scrollify) {
            function scrollifyDestroy() {
              $.scrollify.destroy();
            };

            let scrollifyTimeout = $timeout(function(){
              $scope.$watch(function() { return $mdMedia('gt-sm'); }, function(mquery) {
                if (mquery) {
                  $.scrollify({
                    section : pgSectionsQ,
                    interstitialSection: "",
                    sectionName : "",
                    updateHash: false,
                    interstitialSection : pgSectionsEx,
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
          }
        }

      });

    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
    // template: require('./template.html'),
    template: false,
    replace: false,
    scope: false
  };
}];