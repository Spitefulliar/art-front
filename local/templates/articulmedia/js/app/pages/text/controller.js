//CONTROLLER
// import moduleConfig from './config';
// const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$http',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $http) {

	$scope.textData = { 
  	'title': 'lorem ipsum dolor sit ametsit idolor amet iscing ',
  	'slogan': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non leo eu mauris posuere feugiat. Pellen',
    'image': 'url(../local/templates/articulmedia/img/desktop/text-page-bg.jpg)'
  };

}];