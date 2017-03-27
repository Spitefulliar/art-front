//CONTROLLER
export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$http', '$mdPanel', 
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $http, $mdPanel) {

  // $scope.$on(
  //   "pageDataLoaded",
  //   function() {
  //   }
  // );

  $scope.pageData = $rootScope.pageData;

}];