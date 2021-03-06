//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$compile', '$mdPanel', 
  function ($rootScope, $http, $timeout, $window, $state, $compile, $mdPanel) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      
      // initializing background move
      var bgEl;

      function bgTransform(evt){
        if (!$rootScope.isDesktop) return false;
        var offset = bgEl.offset();
        var center_x = (offset.left) + (bgEl.width()/4);
        var center_y = (offset.top) + (bgEl.height()/4);
        var mouse_x = evt.pageX; var mouse_y = evt.pageY;
        var axeleration = 1/1.2;
        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
        var degree = ((radians * (360 / Math.PI) * -1) + 90)*axeleration; 
        let tween = TweenMax.to(bgEl, 0.4, 
          { 
            ease:Linear.easeNone,
            css:{rotation: degree}
          });
      };

      function bgTransformCancel(){
        $('body').off("mousemove", bgTransform);
        let degree = 0;
        bgEl.css('-moz-transform', 'rotate('+degree+'deg)');
        bgEl.css('-webkit-transform', 'rotate('+degree+'deg)');
        bgEl.css('-o-transform', 'rotate('+degree+'deg)');
        bgEl.css('-ms-transform', 'rotate('+degree+'deg)');
      };

      function bgTranformOnSlide(clockwise, shiftDeg) {
        let shiftBase = (shiftDeg)? shiftDeg : 30;
        let degree = (clockwise > 0)? `+=${shiftBase}` : `-=${shiftBase}`;
        let tween = TweenMax.to(bgEl, 0.8, 
          { 
            ease:Linear.easeOut,
            css:{rotation: degree}
          });
      };

      $scope.digSliderOnSlickInit = function() {
        let digSlider = $('.digital-slider');
        digSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
          bgTranformOnSlide(nextSlide - currentSlide, 30);
        });
      };


      $timeout(function(){
        bgEl = $('.inner-page__bg');
        if(bgEl.length > 0){
          $('body').mousemove(bgTransform);
        }
      },0);

      $scope.$on(
        "$stateChangeStart",
        function( event ) {
          bgTransformCancel();
        }
      );

      //eof bg init


      //assigning data and initing ellips and popups
      $scope.$on(
        "pageDataLoaded",
        function() {
          $scope.digital = $scope.page.digital;
          digitalEllipsInit();
        }
      );


      function digitalEllipsInit() {

        let dig360 = $($element).find('#digital360');
        let ellips360 = $($element).find('#ellips360');

        //snap svg
        let paper = Snap('#ellips360');
        let paperBBox = paper.getBBox();

        let ellips = paper.select("path.ellips");

        let circlesSmG = paper.select("g.circles");
        
        let circlesSm = paper.selectAll("g.circles path");



        //making captions
          //step 1: makin white big circles
        let circlesBbigG = paper.g();
        let circlesBbigGProp, tooltipEl;
        circlesBbigG.insertBefore(ellips);
        circlesBbigG.attr({'class': 'circles-big'});

        function makeBigCircles(circle, digItem, index) {
          let circleBBox = Snap.path.getBBox(circle);
          let circleGroup = paper.g().addClass('circle-group');
          circleGroup.attr({'data-index': index});

          // making big circle
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
          // let trW = circleBigBBox.w * 5.27906976744186;
          // let trH = circleBigBBox.w * 1.5217391304347827;

          // let textRect = paper.rect
          //   (circleBigBBox.cx - trW/2,
          //    rectBigBBox.y2 - rectBigBBox.h/3,
          //    trW,
          //    trH,
          //    trH/2,
          //    trH/2);
          // textRect.addClass('circle-group__text-wrap');

          // //making text node
          // let textRectBBox = textRect.getBBox();
          // let digItemTextArr = (angular.isString(digItem.title))? digItem.title.split('<br/>'): digItem.title;

          // let text = paper.text(textRectBBox.x + textRectBBox.w/2, rectBigBBox.y  + textRectBBox.h/2, digItemTextArr).addClass('circle-group__text');
          // let textBBox = text.getBBox();
          // text.attr({
          //   'x' : text.attr('x') - textBBox.w/2,
          //   'width': trW *0.9,
          //   'height': trH * 0.9
          // });

          //adding elements to group
          // circleGroup.add(circleBig,rect,textRect,text);

          //making tooltips
          // md-direction="digital.items[${index}].position" 
                // md-direction="${digItem.position}" 
          tooltipEl = $compile(
            `<div class="digital360__tooltip-wrap digital360__tooltip-wrap_${digItem.position}" data-index="${index}" 
                ng-style="{
                left: '${circleBigBBox.x/parseFloat(ellips360.attr("width") )* 100}%',
                top: '${circleBigBBox.y/parseFloat(ellips360.attr("height")) * 100}%',
                width: '${circleBigBBox.w/parseFloat(ellips360.attr("width") )* 100}%',
                height: '${circleBigBBox.h/parseFloat(ellips360.attr("height")) * 100}%'
              }">
                <div class="digital360__tooltip-text">${digItem.title}</div>
              </div>`
            )($scope);

          dig360.append(tooltipEl);

          // circleGroup.add(circleBig,rect,textRect);
          if (digItem.position == "top") {
            circleGroup.attr({'transform': `rotate(180,${circleBigBBox.cx}, ${circleBigBBox.cy})`});
          }
          circleGroup.add(circleBig,rect);

          //adding to circles
          circlesBbigG.add(circleGroup);
        };


        //making circles and tooltips
        for (var i = 0; i < $scope.digital.items.length; i++) {
          makeBigCircles(circlesSm.items[i], $scope.digital.items[i], i);
        };

        //adding tooltip logic
        let tooltips = dig360.find('.digital360__tooltip-wrap');
        tooltips.hover(function (e) {
          circlesBbigG[$(this).attr('data-index')].addClass('hovered');
        },function (e) {
          circlesBbigG[$(this).attr('data-index')].removeClass('hovered');
        });

        tooltips.click(function(event) {
          $scope.showPopup($(event.target).closest('[data-index]').attr('data-index'));
        });

        //eof snap svg
      };

      //poups logic
      $scope._mdPanel = $mdPanel;
      $scope.showPopup = function(digItemIndex,isDisabled) {
        var panelRef, position, backdrop, animName, zindex, animation, attachment;
        if (isDisabled) { 
          return false;      
        } else {
          $scope.digitalPopup = $scope.digital.items[digItemIndex].popup;

          position = $scope._mdPanel.newPanelPosition()
            .absolute()
            .center();
          attachment = angular.element(document.body);
          backdrop = false;
          zindex = 100;
          animation = $scope._mdPanel.newPanelAnimation().openFrom({
            left: "50%",
            bottom: 0
          })
          .withAnimation($scope._mdPanel.animation.SCALE);
        }
        var config = {
          attachTo: attachment,
          controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
          template: require('./popupTemplate.html'),
          panelClass: 'popup-digital',
          position: position,
          animation: animation,
          groupName: 'popupDigital',
          maxOpen: 1,
          hasBackdrop: backdrop,
          scope: $scope,
          clickOutsideToClose: true,
          escapeToClose: true,
          focusOnOpen: true,
          zIndex: zindex,
          disableParentScroll: false,
          onDomAdded: function() {
            $scope.popupRendered = true;
            //popup slider init
            popupSliderInit();
          },
          onRemoving: function() {
            $scope.digitalPopup = false;
            $scope.popupSlider = false;
            $scope.smPopupCtrl.destroy(true);
          },
          onDomRemoved: function() {
            $scope.popupRendered = false;
          }
        };

        panelRef = $scope._mdPanel.create(config);
        panelRef.open();

        // $(window).resize(function(){
        //   panelRef.close();
        // });

        var closeThisPanel = $scope.closePanel = function() {
          panelRef.close();
        };

        $rootScope.$on('$stateChangeStart', 
        function(event, toState, toParams, fromState, fromParams){ 
          closeThisPanel();
        });

        return true;
      };

      function popupSMInit() {
        let smCont =  ".popup-digital .scroller";
        let smPin =  ".popup-digital .pin";
        let smPinStop =  ".popup-digital .pinstop";
        $scope.smPopupCtrl = new ScrollMagic.Controller({container: smCont, loglevel: 0});

        var smPoupScene = new ScrollMagic.Scene({
            triggerElement: smPinStop, 
            triggerHook: "onEnter", 
          })
          .setClassToggle(smPin, "unpinned")
          .addTo($scope.smPopupCtrl);

        $scope.smScrollToCrosses = function() {
          $scope.smPopupCtrl.scrollTo(smPinStop);
        }
      }

      function popupSliderInit() {
        $scope.popupSlider = $('.popup-digital__slider');

        $scope.popupSliderNext = function() {
          $scope.popupSlider.slick('slickNext');
        };
        $scope.popupSliderPrev = function() {
          $scope.popupSlider.slick('slickPrev');
        };

        $scope.popupSliderScroll = function($deltaY) {
          if ($deltaY > 0) {
            $scope.popupSliderPrev();
          } else {
            $scope.popupSliderNext();
          }
        };

        $scope.popupSlider.on('breakpoint',function(e,slick,bp){
          // console.log(e,slick,bp);
        });

        $timeout(function(){
          $scope.popupSlider.slick('setPosition');
          popupSMInit();
        },100);
      };


    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
    template: require('./template.html')
  };
}];