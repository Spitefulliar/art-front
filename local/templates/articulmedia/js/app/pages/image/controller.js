//CONTROLLER
// import moduleConfig from './config';
// const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$http',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $http) {

  	$scope.$on(
	    "pageDataLoaded",
	    function() {
	      $scope.images = $scope.page.image.items;
	      console.log($scope.images);
	    }
	  );

	// $scope.imageData = { 
 //  	'name': 'Lorem ipsum dolor sit amet',
 //  	'position': 'Nunc semper facilisis libero vitae facilisis',
 //  	'quote': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non leo eu mauris posuere feugiat. Pellentesque interdum dolor vel ipsum porttitor, eget rutrum odio',
 //    'image': 'url(../local/templates/articulmedia/img/desktop/image-page-bg.jpg)'
 //  };

}];