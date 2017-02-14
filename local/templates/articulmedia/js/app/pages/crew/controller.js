//CONTROLLER
// import moduleConfig from "./config";
// const MODULE_NAME = moduleConfig.name;

export default ["$scope", "$rootScope", "$location", "$log", "$timeout", "$window", "$state", "$http", "ngAudio",
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $http, ngAudio) {

  let crewTO;

  $scope.crewSounds = [];
  $scope.currentCrewIndex = false;

  $scope.getSoundProgress = function(index) {
    if (!$scope.crewSounds[index]) return 0;
    return $scope.crewSounds[index].progress * 100 || 0;
  };

  $scope.activateCrewItem = function(index) {

    if (crewTO) $timeout.cancel(crewTO);
    let time = 400;
    let selItem = $scope.crewData.items[index];
    $scope.showCrewDesc = false;

    if ($scope.crewSounds[$scope.currentCrewIndex]) $scope.crewSounds[$scope.currentCrewIndex].pause();
    //if item already activeted
    if (selItem.active) {
      index = -1;
      $scope.crewItemCurrent = false;
      $scope.currentCrewIndex = false;
    } else {
      $scope.crewItemCurrent = selItem;
      $scope.currentCrewIndex = index;

      crewTO = $timeout(function(){
        $scope.showCrewDesc = true;
        if (!$scope.crewSounds[$scope.currentCrewIndex]) {
          $scope.crewSounds[$scope.currentCrewIndex] = ngAudio.play($scope.crewItemCurrent.audio);
        } else {
          $scope.crewSounds[$scope.currentCrewIndex].play();
        };
      },time);
    };

    $scope.crewData.items.map(function(elem, itemIndex) {
      elem.active = (itemIndex == index);
      return elem;
    });
  };

  //assigning data 
  $scope.$on(
    "pageDataLoaded",
    function() {
      $scope.crewData = $scope.page.crewData;
    }
  );


}];