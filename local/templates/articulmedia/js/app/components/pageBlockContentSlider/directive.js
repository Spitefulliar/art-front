//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log',
  function ($rootScope, $http, $timeout, $window, $state, $log) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      let element = $($element);
      let slider, dots, color;

      $timeout(function(){
        slider = element.find('.page-block_content-slider__slider');
        color = slider.attr('data-color');
        //adding color to active slide (should match the background of the block)
        function setActiveColor(color, slideIndex) {
          let button;
          if (!color) return;
          dots = slider.find('.slick-numbers li');
          dots.find('button').css('color', '');
          if (slideIndex !== -1) {
            button = dots.eq(slideIndex).find('button');
          } else {
            button = dots.filter('.slick-active').find('button');
          }
          button.css('color', color);
        }

        slider.on('init', function(event, slick, currentSlideIndex,slideIndex){
          setActiveColor(color, -1);
        });
        slider.on('beforeChange', function(event, slick, currentSlideIndex,slideIndex){
          setActiveColor(color, slideIndex);
        });
      },0);
    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
    template: require('./template.html'),
    scope: false,
    replace: true,
    // scope: {
    //   'block': '='
    // }
  };
}];