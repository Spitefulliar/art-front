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

	// $('.time-line').animate({'background-position-x': '100%'}, 4000);

	// $('.time-line').animate({
	// 	'background-position-x': '100%',
	// 	4000, function() {
	// 	/* stuff to do after animation is complete */
	// });


	// $('.time-line').backgroundDraggable({
	// 	axis: 'x',
	//   done: function() {
	//     var backgroundPosition = $('.time-line').css('background-position');
	//     console.log(backgroundPosition);
	//     $('.time-line').removeClass('time-line--forwards');
	//   }
	// });

	var $timeLine = $('.time-line');

	$timeLine.animate({
    'background-position-x': '100%'
  }, {
    duration: 4000,
    complete: function() {
    	$timeLine.css('transition', 'all .5s ease');
      $timeLine.backgroundDraggable({
				axis: 'x',
				done: function() {
			    $timeLine.css('transition', 'none');
			  }
			});
    }
  });

}];