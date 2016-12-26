//CONTROLLER
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX, '$location', '$log', '$timeout', '$window', '$state', '$sce', '$http',
  // '$mdSidenav','$mdMedia', 
  function($scope, $rootScope, $moduleService, $location, $log, $timeout, $window, $state, $sce, $http) {
  // $mdSidenav, $mdMedia, 

  $scope[CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX] = $moduleService;

  $scope.bgMode = 'experience';

  var img = $('.inner-page__bg');
	if(img.length > 0){
	    var offset = img.offset();
	    function bgTransform(evt){
	        var center_x = (offset.left) + (img.width()/4);
	        var center_y = (offset.top) + (img.height()/4);
	        var mouse_x = evt.pageX; var mouse_y = evt.pageY;
	        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
	        var degree = (radians * (360 / Math.PI) * -1) + 90; 
	        img.css('-moz-transform', 'rotate('+degree+'deg)');
	        img.css('-webkit-transform', 'rotate('+degree+'deg)');
	        img.css('-o-transform', 'rotate('+degree+'deg)');
	        img.css('-ms-transform', 'rotate('+degree+'deg)');
	    }
	    $('.inner-page').mousemove(bgTransform);
	}

	$scope.$on(
		"$destroy",
		function( event ) {
			$('.inner-page').off("mousemove", bgTransform);
		}
	);


}];