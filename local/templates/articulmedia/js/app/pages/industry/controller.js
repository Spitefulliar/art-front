//CONTROLLER
// import moduleConfig from './config';
// const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$http',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $http) {

  $scope.currentData = { 
  	'title': 'умнее<br>выше<br>быстрее',
  	'slogan': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nesciunt fuga mollitia facilis dicta expedita hic, in totam, tempora quidem temporibus. Eaque totam id dolore, ea repellendus eveniet aliquid eius.',
  	'blocks': [
  		{
  			'type': 'image',
  			'title': 'делимся опытом<br> на РИФ+КИБ',
  			'bgImage': 'url(../local/templates/articulmedia/img/desktop/block-bg.jpg)',
  			'fill': '#fff'
  		},
  		{
  			'type': 'text',
  			'title': 'Управляющий<br>партнёр<br>Articul Media<br>Ольга Куликова<br>номинирована<br>на премию<br>«Предприниматель<br>года 2015»',
  			'fill': '#000',
  			'bgColor': 'rgba(255,255,255,.5)',
  			'bgImage': 'url(../local/templates/articulmedia/img/desktop/text-bg.jpg)',
  		},
  		{
  			'type': 'text',
  			'title': 'делимся опытом<br> на РИФ+КИБ',
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
  			'title': 'Управляющий<br>партнёр<br>Articul Media<br>Ольга Куликова<br>номинирована<br>на премию<br>«Предприниматель<br>года 2015»',
  			'fill': '#000',
  			'bgColor': 'rgba(255,255,255,.2)',
  			'bgImage': 'url(../local/templates/articulmedia/img/desktop/text-bg.jpg)',
  		},
  	]
  };

  // $(document).ready(function(){ 
  //   var $target = $('.page-block-list__item');
  //   var hold = 500;

  //   $.each($target,function(i,t){
  //     var $this = $(t);
  //     setTimeout(function(){ $this.css('opacity', '1');; },i*hold);
  //   });
  // });

  // $(document).ready(function(){ 
  //   $scope.$on(
  //     "$stateChangeStart",
  //     function( event ) {
  //       loadBlock();
  //       console.log('load');
  //     }
  //   );
  // });

  // function loadBlock(){
  //   var $target = $('.page-block-list__item');
  //   var hold = 500;

  //   $.each($target, function(i, t) {
  //     var $this = $(t);
  //     setTimeout(function(){ $this.css('opacity', '1'); },i*hold);
  //   });
  // };

  

}];