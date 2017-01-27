//CONTROLLER
// import moduleConfig from './config';
// const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$http',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $http) {

	$scope.commandData = {
  	'commandItem': [
  		{
  			'title': 'Ольга Куликова',
  			'image': 'url(../local/templates/articulmedia/img/desktop/command-item.png)',
  			'subTitle': 'управляющий директор',
        'description': 'loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, expedita quasi ipsa eligendi eius illo maiores repellendus sit consequatur. Facilis ut nesciunt sunt beatae architecto, in commodi quos rem cumque?'
  		},
      {
        'title': 'Егор Аристакесян',
        'image': 'url(../local/templates/articulmedia/img/desktop/command-item2.png)',
        'subTitle': 'креативный директор',
        'description': 'loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, expedita quasi ipsa eligendi eius illo maiores repellendus sit consequatur. Facilis ut nesciunt sunt beatae architecto, in commodi quos rem cumque?'
      },
      {
        'title': 'Александр Чижиков',
        'image': 'url(../local/templates/articulmedia/img/desktop/command-item3.png)',
        'subTitle': 'директор по стратегическому планированию',
        'description': 'loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, expedita quasi ipsa eligendi eius illo maiores repellendus sit consequatur. Facilis ut nesciunt sunt beatae architecto, in commodi quos rem cumque?'
      },
      {
        'title': 'Марьяна Шейнина',
        'image': 'url(../local/templates/articulmedia/img/desktop/command-item4.png)',
        'subTitle': 'медиа-директор',
        'description': 'loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, expedita quasi ipsa eligendi eius illo maiores repellendus sit consequatur. Facilis ut nesciunt sunt beatae architecto, in commodi quos rem cumque?'
      },
      {
        'title': 'Ирина Сотник',
        'image': 'url(../local/templates/articulmedia/img/desktop/command-item5.png)',
        'subTitle': 'управляющий директор',
        'description': 'loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, expedita quasi ipsa eligendi eius illo maiores repellendus sit consequatur. Facilis ut nesciunt sunt beatae architecto, in commodi quos rem cumque?'
      },
      {
        'title': 'Евгений Багро',
        'image': 'url(../local/templates/articulmedia/img/desktop/command-item6.png)',
        'subTitle': 'бизнес-директор',
        'description': 'loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, expedita quasi ipsa eligendi eius illo maiores repellendus sit consequatur. Facilis ut nesciunt sunt beatae architecto, in commodi quos rem cumque?'
      },
  	]
  };


}];