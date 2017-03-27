//CONTROLLER
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX, '$location', '$log', '$timeout', '$window', '$state', '$sce', '$http', '$mdSidenav','$mdMedia', '$filter',
  function($scope, $rootScope, $moduleService, $location, $log, $timeout, $window, $state, $sce, $http, $mdSidenav, $mdMedia, $filter) {

  $scope[CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX] = $moduleService;

  //getting nav date fo menu
  $scope.navData = $moduleService.getNavData();

  //update perent menuitem state
  let menuItemStateUppdate = (navData) => {
    if (!navData || !navData.menuItems) return;

    for (var i = 0; i < navData.menuItems.length; i++) {
      let matches = false;
      let el = navData.menuItems[i];
      if (!el.subMenu) continue;

      for (var j = 0; j < el.subMenu.length; j++) {
        matches = $filter('isState')(el.subMenu[j].state);
        if (matches) break;
      }

      el.isActive = matches;
      if (matches) break;
    }
  };

  //sidenav
  $scope.sidenavToggle = function(){
    $mdSidenav('sidenav-right').toggle();
  }

  $scope.sidenavShow = function(){
    $mdSidenav('sidenav-right').open();
    // $scope.activateCurrentMobMenuslide();
  }

  $scope.sidenavHide = function() {
    $mdSidenav('sidenav-right').close();
  }

  $scope.sidenavHideMedia = function() {
    if ($mdMedia('gt-sm')) {
      $scope.sidenavHide();
    }
    return $mdMedia('gt-sm');
  }

  $scope.$watch($scope.sidenavHideMedia);
  //eof sidenav

  //slider config for mobile menu
  $scope.slickConfigMenu = {
    enabled: true,
    // autoplay: true,
    draggable: true,
    // adaptiveHeight: true,
    autoplaySpeed: 6000,
    infinite: true,
    centerMode: true,
    centerPadding: '18%',
    slidesToShow: 1,
    cssEase: false,
    useCSS: false,
    dots: true,
    arrows: false,
    mobileFirst: true,
    respondTo: 'window',
    swipe: true,
    easing: 'linear',
    swipeToSlide: true,
    slidesToScroll: 1,
    variableWidth: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerPadding: '30%',
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '25%',
        }
      }
    ],
    method: {},
    event: {
      init: function(event, slick) {
        $scope.activateCurrentMobMenuslide(event, slick);
      }
    }
  };

  $scope.activateCurrentMobMenuslide = (e,slick) => {
    let mobMenuSlider = $(slick.$slider);
    let newActiveLink = mobMenuSlider.find('.mobile-menu__link--active');

    if (!newActiveLink.length) {
      $timeout(function(){ 
        $scope.activateCurrentMobMenuslide(e,slick);
      },100);
      return;
    };

    let newActiveSlide = mobMenuSlider.find('.mobile-menu__link--active').parents('.slick-slide');
    let newActiveSlideIndex = newActiveSlide.data('slick-index');//mobMenuSlides.indexOf(newActiveSlide);
    
    slick.slickGoTo(newActiveSlideIndex, true);
  };

  $rootScope.$on('$stateChangeStart', 
    function(event, toState, toParams, fromState, fromParams){ 
      if ($scope.sidenavIsOpen) {
        $scope.sidenavHide();
      }
    }
  );

  $rootScope.$on('$stateChangeSuccess', 
    function(event, toState, toParams, fromState, fromParams){ 
      menuItemStateUppdate($scope.navData);
    }
  );

  /* 
    utils 
  */

  //for html binding
  $scope.trustAsHtml = function(value) {
    return $sce.trustAsHtml(value);
  };

  $scope.applyCss = function(element,prop,rules) {
    if (!rules) return;
    $timeout(function(){
      let elStyle = $(element).attr('style');
      if (angular.isArray(rules)) {
        rules.forEach(function(innerVal) {
          // Here's where the magic happens, thanks to jquery
          elStyle += prop + ':' + innerVal + '; ';
          $(element).attr('style', elStyle);
        });
      }
      else {
        $(element).css(prop, rules); 
      }
    });
  };

  $scope.convertHexToRgba = function(hexColor, opacities) {
    hexColor = hexColor.replace('#','');
    let r = parseInt(hexColor.substring(0,2), 16);
    let g = parseInt(hexColor.substring(2,4), 16);
    let b = parseInt(hexColor.substring(4,6), 16);
    let result;
    if (opacities) {
      if (angular.isArray(opacities)) {
        result = [];
        opacities.forEach(function(opacity) {
          result.push(`rgba(${r},${g},${b},${opacity/100})`);
        });
      } else {
        result = `rgba(${r},${g},${b},${opacity/100})`;
      }
    } else {
      result= `rgb(${r},${g},${b})`;
    }
    return result;
  }

}];