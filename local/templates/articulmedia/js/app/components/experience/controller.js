//CONTROLLER
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX, '$location', '$log', '$timeout', '$window', '$state', '$sce', '$http',
  function($scope, $rootScope, $moduleService, $location, $log, $timeout, $window, $state, $sce, $http) {

  $scope[CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX] = $moduleService;

  $(document).ready(function() {
    showElements($('.page-block-list__grid'));
  });
 
  $scope.$on(
    "$stateChangeSuccess",
    function( event ) {
      showElements($('.page-block-list__grid'));
    }
  );


  function showElements(element){
    element.children('md-grid-tile').each(function(){
      if($(this).is(':hidden')){
        $(this).fadeIn();
        setTimeout(function(){showElements(element)}, 500);  
        return false;
      }
    });
  }
  
}];