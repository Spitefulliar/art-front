//CONTROLLER
// import moduleConfig from './config';
// const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$http',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $http) {

	$scope.timeLineData = {
		timeLineItem: [
			{
				'number' : '1500',
				'title' : 'реализованных<br>проектов'
			},
			{
				'number' : '150',
				'title' : 'довольных<br>клиентов'
			},
			{
				'number' : '210',
				'title' : 'заслуженных<br>наград'
			},
			{
				'number' : '15',
				'title' : 'успешных<br>лет'
			}
		]
	};

	$('.time-line').backgroundDraggable({ axis: 'x' });

}];