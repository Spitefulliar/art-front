//CONTROLLER
// import moduleConfig from './config';
// const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$http',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $http) {

	$scope.currentData = { 
  	'title': 'в этих вопросах<br>наша экспертиза<br>уникальна',
  	'slogan': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nesciunt fuga mollitia facilis dicta expedita hic, in totam, tempora quidem temporibus. Eaque totam id dolore, ea repellendus eveniet aliquid eius.',
  	'blocks': [
  		{
  			'type': 'image',
  			'title': 'Спортивный<br>маркетинг<br>в digital',
  			'bgImage': 'url(../local/templates/articulmedia/img/desktop/color-item-bg.jpg)',
  			'fill': '#fff'
  		},
  		{
  			'type': 'text',
  			'title': 'Активация<br>собственного<br>e-commerce<br>для брендов',
  			'fill': '#000',
  			'bgColor': 'rgba(255,255,255,.5)',
  			'bgImage': 'url(../local/templates/articulmedia/img/desktop/text-bg.jpg)',
  		},
  		{
  			'type': 'text',
  			'title': 'Вывод<br>брендов<br>в mobile',
  			'fill': '#fff',
  			'bgColor': 'rgba(255,255,255,.4)',
  			'bgImage': 'url(../local/templates/articulmedia/img/desktop/text-bg.jpg)',
  		},
  		{
  			'type': 'text',
  			'title': 'Управляющий<br>партнёр<br>Articul Media<br>Ольга Куликова<br>номинирована<br>на премию<br>«Предприниматель<br>года 2015»',
  			'fill': '#000',
  			'bgColor': 'rgba(255,255,255,.3)',
  			'bgImage': 'url(../local/templates/articulmedia/img/desktop/text-bg.jpg)',
  		},
  		{
  			'type': 'text',
  			'title': 'Активация<br>собственного<br>e-commerce<br>для брендов',
  			'fill': '#000',
  			'bgColor': 'rgba(255,255,255,.2)',
  			'bgImage': 'url(../local/templates/articulmedia/img/desktop/text-bg.jpg)',
  		},
  	]
  };

}];