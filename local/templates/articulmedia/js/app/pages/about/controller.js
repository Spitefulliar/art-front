//CONTROLLER
// import moduleConfig from './config';
// const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$http',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $http) {

  	$scope.aboutData = {
  		aboutItem: [
  			{
  				'aboutImg' : '/local/templates/articulmedia/img/desktop/articul-logo.png',
  				'aboutText' : 'full service digital-агентство (Топ-10 интерактивных агентств АКАР, Топ-5 по версии Тэглайн), победитель многочисленных конкурсов (http://articulmedia.ru/projects/awards/), одно из лучших агентств по уровню клиентского сервиса по мнению клиентов. (Adindex)',
  				'aboutLink' : '/#/'
  			},
  			{
  				'aboutImg' : '/local/templates/articulmedia/img/desktop/web-logo.png',
  				'aboutText' : 'веб девелопмент, высоконагруженные проекты, e-commerce, мобильная разработка. Лидер партнерской сети 1С-Битрикс.',
  				'aboutLink' : '/#/'
  			},
  			{
  				'aboutImg' : '/local/templates/articulmedia/img/desktop/barnd-logo.png',
  				'aboutText' : 'рендинг, визуальные коммуникации (входит в самые награждаемые дизайн-студии России по данным adme.ru http://www.adme.ru/rejting-adme/samye-nagrazhdaemye-agentstva-rossii-207355/)',
  				'aboutLink' : '/#/'
  			}
  		]
  	};

}];