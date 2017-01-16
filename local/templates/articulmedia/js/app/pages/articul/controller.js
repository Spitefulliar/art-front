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

	// $('.time-line').backgroundDraggable({ axis: 'x' });

	// $('.time-line').animate({
	// 	'background-position-x': '100%',
	// }, 4000);

	$('.time-line').backgroundDraggable({
		axis: 'x',
	  done: function() {
	    var backgroundPosition = $('.time-line').css('background-position');
	    console.log(backgroundPosition);
	    $('.time-line').removeClass('time-line--forwards');
	  }
	});

}];