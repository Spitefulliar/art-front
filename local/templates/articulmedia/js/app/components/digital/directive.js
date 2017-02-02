//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', 
  function ($rootScope, $http, $timeout, $window, $state) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      
      // initializing background move
      // $timeout(function(){
      //   var bgEl = $('.inner-page__bg');

      //   function bgTransform(evt){
      //     var offset = bgEl.offset();
      //     var center_x = (offset.left) + (bgEl.width()/4);
      //     var center_y = (offset.top) + (bgEl.height()/4);
      //     var mouse_x = evt.pageX; var mouse_y = evt.pageY;
      //     var axeleration = 1/1.2;
      //     var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
      //     var degree = ((radians * (360 / Math.PI) * -1) + 90)*axeleration; 
      //     bgEl.css('-moz-transform', 'rotate('+degree+'deg)');
      //     bgEl.css('-webkit-transform', 'rotate('+degree+'deg)');
      //     bgEl.css('-o-transform', 'rotate('+degree+'deg)');
      //     bgEl.css('-ms-transform', 'rotate('+degree+'deg)');
      //   };

      //   function bgTransformCancel(){
      //     $('body').off("mousemove", bgTransform);
      //     let degree = 0;
      //     bgEl.css('-moz-transform', 'rotate('+degree+'deg)');
      //     bgEl.css('-webkit-transform', 'rotate('+degree+'deg)');
      //     bgEl.css('-o-transform', 'rotate('+degree+'deg)');
      //     bgEl.css('-ms-transform', 'rotate('+degree+'deg)');
      //   };

      //   if(bgEl.length > 0){
      //     $('body').mousemove(bgTransform);
      //   }

      //   $scope.$on(
      //     "$stateChangeStart",
      //     function( event ) {
      //       bgTransformCancel();
      //     }
      //   );

      // },0);

     
      //snap svg
      let s = Snap('#ellips360');
      let ellips = s.selectAll("path");
      ellips.attr({stroke: "#222235"});
      // Snap.load("/local/templates/articulmedia/img/ellips360.svg", function (f) {
      //   // Note that we traversre and change attr before SVG
      //   // is even added to the page.
      //   let ellips = f.selectAll("path");
      //   ellips.attr({stroke: "#000000", width: s.width, height: s.height});
      //   // Making croc draggable. Go ahead drag it around!
      //   s.append(ellips);
      //   // ellips.drag();
      //   // Obviously drag could take event handlers too
      //   // That’s better! selectAll for the rescue.
      // });
      //eof snap svg

    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
    template: require('./template.html')
  };
}];