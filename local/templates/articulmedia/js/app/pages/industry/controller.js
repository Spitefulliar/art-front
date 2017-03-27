//CONTROLLER
// import moduleConfig from './config';
// const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$http',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $http) {

  $rootScope.$on(
    "pageDataLoaded",
    function(event) {
      $scope.currentData = ($scope.page)? $scope.page.industry: false;
    });

}];