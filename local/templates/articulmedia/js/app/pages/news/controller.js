//CONTROLLER
// import moduleConfig from './config';
// const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$http',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $http) {

  let transformBgColors = (items)=> {
    let opacity = 60;
    let color = "#fff";
    items.forEach(function(el,index) {
      el.bgColor = $rootScope.convertHexToRgba(color,opacity);
      opacity = (opacity <= 10)? 60 : opacity - 10;
    });
  };

  $scope.$on(
    "pageDataLoaded",
    function() {
      $scope.news = ($rootScope.page && $rootScope.page.news)? $rootScope.page.news : false;
      if ($scope.news) transformBgColors($scope.news);
    }
  );

}];