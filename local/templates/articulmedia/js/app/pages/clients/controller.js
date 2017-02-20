//CONTROLLER
import moduleConfig from './config';
const PAGE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$http', '$mdPanel', 
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $http, $mdPanel) {

  $scope.selectGruop = function (index) {
    let newIndex = index || 0;
    $scope.selectedGroupIndex = newIndex;
    $scope.clients.selectedGroup = $scope.clients.groups[newIndex];
  };

  $scope.pageModeToggle = function(mode) {
    if (mode) {
      $scope.pageMode = mode;
      return;
    };

    if ($scope.pageMode == "bubbles") $scope.pageMode = "text";
    if ($scope.pageMode == "text") $scope.pageMode = "bubbles";

    return;
  };

  //poups logic

  $scope._mdPanel = $mdPanel;
  $scope.showPopup = function(isDisabled) {
    var panelRef, position, backdrop, animName, zindex, animation, attachment;
    if (isDisabled) { 
      return false;      
    } else {
      position = $scope._mdPanel.newPanelPosition()
        .absolute()
        .center();
      attachment = angular.element(document.body);
      backdrop = false;
      zindex = 100;
      animation = $scope._mdPanel.newPanelAnimation().openFrom({
        left: "50%",
        bottom: 0
      })
      .withAnimation($scope._mdPanel.animation.SCALE);
    }
    var config = {
      attachTo: attachment,
      controller: CONFIG.APP.PREFIX + PAGE_NAME + CONFIG.APP.PAGE_POSTFIX + CONFIG.APP.CONTROLLER_POSTFIX,
      template: require('./popupTemplate.html'),
      panelClass: 'popup-clients',
      position: position,
      animation: animation,
      groupName: 'popupClients',
      maxOpen: 1,
      hasBackdrop: backdrop,
      scope: $scope,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: true,
      zIndex: zindex,
      disableParentScroll: false,
      onDomAdded: function() {
        $scope.popupRendered = true;
      },
      onDomRemoved: function() {
        $scope.popupRendered = false;
      }
    };

    panelRef = $scope._mdPanel.create(config);
    panelRef.open();

    $(window).resize(function(){
      panelRef.close();
    });

    var closeThisPanel = $scope.closePanel = function() {
      panelRef.close();
    };

    $rootScope.$on('$stateChangeStart', 
    function(event, toState, toParams, fromState, fromParams){ 
      closeThisPanel();
    });

    return true;
  };

  //assigning data 
  $scope.$on(
    "pageDataLoaded",
    function() {
      $scope.bubbles = $scope.page.bubbles;
      $scope.clients = $scope.page.clients;


      // $scope.pageModeToggle("bubbles");
      $scope.selectGruop();
      $scope.pageModeToggle("text");


      $(window).resize(function(event) {
        $scope.pageModeToggle('text');
      });
    }
  );

}];