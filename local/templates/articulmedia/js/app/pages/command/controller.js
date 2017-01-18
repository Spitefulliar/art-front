//CONTROLLER
// import moduleConfig from './config';
// const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$http',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $http) {

	$scope.commandData = {
		commandItem: [
			{
				'image' : 'url(../local/templates/articulmedia/img/desktop/command-item.png)',
				'title' : 'Ольга Куликова',
				'subTitle': 'управляющий директор'
			},
			{
				'image' : 'url(../local/templates/articulmedia/img/desktop/command-item.png)',
				'title' : 'Егор Аристакесян',
				'subTitle' : 'креативный директор'
			},
			{
				'image' : 'url(../local/templates/articulmedia/img/desktop/command-item.png)',
				'title' : 'Александр Чижиков',
				'subTitle' : 'директор по стратегическому планированию'
			},
			{
				'image' : 'url(../local/templates/articulmedia/img/desktop/command-item.png)',
				'title' : 'Марьяна Шейнина',
				'subTitle' : 'медиа-директор'
			},
			{
				'image' : 'url(../local/templates/articulmedia/img/desktop/command-item.png)',
				'title' : 'Ирина Сотник',
				'subTitle' : 'бизнес-директор'
			},
			{
				'image' : 'url(../local/templates/articulmedia/img/desktop/command-item.png)',
				'title' : 'Александр Чижиков',
				'subTitle' : 'директор по стратегическому планированию'
			},
		]
	};

}];