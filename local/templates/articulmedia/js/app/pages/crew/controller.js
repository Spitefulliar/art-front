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

    if ($scope.crewSounds[$scope.currentCrewIndex]) $scope.stopAudio(false, $scope.currentCrewIndex);
    //if item already activated
    if (selItem.active) {
      index = -1;
      $scope.crewItemCurrent = false;
      $scope.currentCrewIndex = false;
    } else {
      $scope.crewItemCurrent = selItem;
      $scope.currentCrewIndex = index;

      crewTO = $timeout(function(){
        $scope.showCrewDesc = true;
        $scope.playAudio(false, $scope.currentCrewIndex);
      },time);
    };

    $scope.crewData.items.map(function(elem, itemIndex) {
      elem.active = (itemIndex == index);
      return elem;
    });
  };

  $scope.stopAudio = function(event, index) {
    if (event) event.stopPropagation();
    if ($scope.crewSounds[index]) $scope.crewSounds[index].stop();
    $scope.crewData.items[index].mute = false;
  }

  $scope.pauseAudio = function(event, index) {
    if (event) event.stopPropagation();
    $scope.crewData.items[index].mute = true;
    if ($scope.crewSounds[index]) $scope.crewSounds[index].pause();
  }

  $scope.playAudio = function(event, index) {
    if (event) event.stopPropagation();

    if (!$scope.crewSounds[index]) {
      $scope.crewSounds[index] = ngAudio.play($scope.crewData.items[index].audio);
    } else {
      $scope.crewSounds[index].play();
    };
    
    $scope.crewData.items[index].mute = false;
  }

  $scope.toggleAudio = function(event, index) {
    if (event) event.stopPropagation();
    if ($scope.crewData.items[index].mute) {
      $scope.playAudio(event, index);
    } else {
      $scope.pauseAudio(event, index);
    }
  }

  //assigning data 
  $scope.$on(
    "$stateChangeStart",
    function() {
      $scope.stopAudio(false, $scope.currentCrewIndex);
    }
  );

  $scope.$on(
    "pageDataLoaded",
    function() {
      $scope.crewData = $scope.page.crewData;
    }
  );


}];