//CONTROLLER
// import moduleConfig from './config';
// const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$http',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $http) {
  $scope.$on(
    "pageDataLoaded",
    function() {
      $scope.newsdetail = ($rootScope.page && $rootScope.page.newsdetail)? $rootScope.page.newsdetail: false;
    }
  );

}];