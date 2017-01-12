//CONTROLLER
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX, '$location', '$log', '$timeout', '$window', '$state', '$sce', '$http',
  function($scope, $rootScope, $moduleService, $location, $log, $timeout, $window, $state, $sce, $http) {

  $scope[CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX] = $moduleService;

  $scope.digital = { 
  	'slogan': `У нас есть<br/>
              все для 360&deg;<br/>
              сервиса в digital`,
  	'items': [
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

  $scope.slickConfigMobile = {
    enabled: true,
    autoplay: false,
    draggable: true,
    adaptiveHeight: true,
    infinite: true,
    method: {},
    cssEase: false,
    useCSS: false,
    dots: true,
    arrows: false,
    mobileFirst: true,
    swipe: true,
    easing: 'linear',
    swipeToSlide: true,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    centerPadding: '20px',
  };

  

}];