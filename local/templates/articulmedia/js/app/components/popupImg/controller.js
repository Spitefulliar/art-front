//CONTROLLER
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

let popupImgCtrl = function($scope, $rootScope, $timeout, $window, $log, $state, $mdPanel) {
  let ctrl = this;
  this._mdPanel = $mdPanel;
  this.showImgPopup = function(imgsrc, isDisabled) {
    var panelRef, position, backdrop, animName, zindex, animation, attachment;
    if (isDisabled) { 
      return false;      
    } else {
      $scope.imgsrc = imgsrc;
      position = this._mdPanel.newPanelPosition()
        .absolute()
        .center();
      attachment = angular.element(document.body);
      backdrop = true;
      zindex = 9999999;
      animation = this._mdPanel.newPanelAnimation().openFrom({
        left: "50%",
        bottom: 0
      })
      .withAnimation(this._mdPanel.animation.SCALE);
    }
    var config = {
      attachTo: attachment,
      controller: popupImgCtrl,
      controllerAs: 'popupImgCtrl',
      template: require('./popupTemplate.html'),
      panelClass: 'popup-img',
      position: position,
      animation: animation,
      groupName: 'popupImg',
      maxOpen: 1,
      hasBackdrop: backdrop,
      scope: $scope,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: true,
      zIndex: zindex,
      disableParentScroll: true,
      onDomAdded: function() {
        $scope.popupRendered = true;
        
        $('.popup-img').parents('.md-panel-outer-wrapper').append($('.popup-img .popup-img__close_outer'));
      },
      onDomRemoved: function() {
        $scope.popupRendered = false;
      }
    };

    panelRef = this._mdPanel.create(config);
    panelRef.open();

    // if (!dontCLoseOnResize) {
    //   $(window).resize(function(){
    //     panelRef.close();
    //   })
    // }

    var closeThisPanel = this.closePanel = function() {
      panelRef.close();
    }

    popupImgCtrl.prototype.closePanel = this.closePanel;

    $rootScope.$on('$stateChangeStart', 
    function(event, toState, toParams, fromState, fromParams){ 
      closeThisPanel();
    });

    return true;
  };
}

export default ['$scope', '$rootScope', '$timeout', '$window', '$log', '$state', '$mdPanel',
  popupImgCtrl];