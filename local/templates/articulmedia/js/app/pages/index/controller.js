//CONTROLLER
// import moduleConfig from './config';
// const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$http',
  // '$mdSidenav','$mdMedia', 
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $http) {
  // $mdSidenav, $mdMedia, 
  
  $scope.slickConfigMain = {
	  enabled: true,
    autoplay: true,
    draggable: true,
    adaptiveHeight: true,
    autoplaySpeed: 6000,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    cssEase: false,
    useCSS: false,
    dots: true,
    arrows: false,
    mobileFirst: true,
    respondTo: 'slider',
    swipe: true,
    easing: 'linear',
    swipeToSlide: true,
    slidesToScroll: 1,
    variableWidth: false

	};

  $rootScope.$on('pageDataLoaded', function () {
    // $scope.page = $scope.page;
    $timeout(function(){
      $('.main-page-slider').slick('setPosition');
    },0);
  });


}];