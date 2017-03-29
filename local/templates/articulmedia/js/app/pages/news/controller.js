//CONTROLLER
// import moduleConfig from './config';
// const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$http',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $http) {

  $scope.$on(
    "pageDataLoaded",
    function() {
      $scope.news = ($rootScope.page && $rootScope.page.news)? $rootScope.page.news : false;
    }
  );

}];