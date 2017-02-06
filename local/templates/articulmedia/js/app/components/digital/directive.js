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

      $scope.$on(
        "pageDataLoaded",
        function() {
          $scope.digital = $scope.page.digital;
          digitalEllipsInit();
        }
      );


      function digitalEllipsInit() {

        //snap svg
        let paper = Snap('#ellips360');

        let ellips = paper.select("path.ellips");

        let circlesSmG = paper.select("g.circles");
        
        let circlesSm = paper.selectAll("g.circles path");



        //making captions
          //step 1: makin white big circles
        let circlesBbigG = paper.g();
        let circlesBbigGProp;
        circlesBbigG.insertBefore(ellips);
        circlesBbigG.attr({'class': 'circles-big'});

        function makeBigCircles(circle, digItem, index) {
          let circleBBox = Snap.path.getBBox(circle);
          let circleGroup = paper.g().addClass('circle-group');
          circleGroup.attr({'data-index': index});
          //making big circle
          let circleBig = paper.circle(circleBBox.cx, circleBBox.cy, circleBBox.r1 * 3.076923);
          circleBig.attr({'data-index': index});
          circleBig.addClass('circle-group__circle');
          circleBig.hover(function (e) {
              this.parent().addClass('hovered');
            },function (e) {
              this.parent().removeClass('hovered');
            });

          //making inner element
          let circleBigBBox = circleBig.getBBox();

          let rect = paper.rect
            (circleBigBBox.x + circleBigBBox.w*0.1,
             circleBigBBox.y2 - circleBigBBox.r1*0.6,
             circleBigBBox.w*0.8, 
             circleBigBBox.r1);
          rect.addClass('circle-group__rectangle');

          //making mask for rounded corners
          let rectBigBBox = rect.getBBox();
          let rectangleMask = paper.g(rect.clone().attr({fill: "#ffffff"}),
                              circleBig.clone().attr({fill: "#000000"}),
                              paper.circle(rectBigBBox.x, rectBigBBox.y + rectBigBBox.h/4*2, rectBigBBox.h/4).attr({fill: "#000000"}), 
                              paper.circle(rectBigBBox.x2, rectBigBBox.y + rectBigBBox.h/4*2, rectBigBBox.h/4).attr({fill: "#000000"}));
          rect.attr({
            mask: rectangleMask,
          });

          // making text field
          let trW = circleBigBBox.w * 5.27906976744186;
          let trH = circleBigBBox.w * 1.5217391304347827;

          let textRect = paper.rect
            (circleBigBBox.cx - trW/2,
             rectBigBBox.y2 - rectBigBBox.h/3,
             trW,
             trH,
             trH/2,
             trH/2);
          textRect.addClass('circle-group__text-wrap');

          //making text node
          let textRectBBox = textRect.getBBox();
          let text = paper.text(textRectBBox.x + textRectBBox.w/2, rectBigBBox.y  + textRectBBox.h/2, digItem.title).addClass('circle-group__text');
          let textBBox = text.getBBox();
          text.attr({
            'x' : text.attr('x') - textBBox.w/2,
            'width': trW *0.9,
            'height': trH * 0.9
          });

          //adding elements to group
          circleGroup.add(circleBig,rect,textRect,text);

          //adding to circles
          circlesBbigG.add(circleGroup);
        };

        for (var i = 0; i < $scope.digital.items.length; i++) {
          makeBigCircles(circlesSm.items[i], $scope.digital.items[i], i);
        };

        //step 2: makin white big circles hoverable even when hovering black dots
        circlesSm.forEach(function(el, index){
          el.attr({'data-index': index});
          el.hover(function (e) {
              circlesBbigG[this.attr('data-index')].addClass('hovered');
            },function (e) {
              circlesBbigG[this.attr('data-index')].removeClass('hovered');
            });
        });

        
        // step 2: circles props for hovering 
        // circlesBbigGProp = circlesBbigG.clone(circlesBbigG);
        // circlesBbigGProp.attr({'class': 'circles-big-prop'});


        // Snap.load("/local/templates/articulmedia/img/ellips360.svg", function (f) {
        //   // Note that we traversre and change attr before SVG
        //   // is even added to the page.
        //   let ellips = f.selectAll("path");
          // ellips.attr({stroke: "#666666"});  
        //   ellips.attr({stroke: "#000000", width: paper.width, height: paper.height});
        //   // Making croc draggable. Go ahead drag it around!
        //   paper.append(ellips);
        //   // ellips.drag();
        //   // Obviously drag could take event handlers too
        //   // That’s better! selectAll for the rescue.
        // });

        //eof snap svg
      }

    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
    template: require('./template.html')
  };
}];