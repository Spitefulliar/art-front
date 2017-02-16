//CONTROLLER
// import moduleConfig from './config';
// const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$http',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $http) {

  //assigning data 
  $scope.$on(
    "pageDataLoaded",
    function() {
      $scope.bubbles = $scope.page.bubbles;
    }
  );

}];