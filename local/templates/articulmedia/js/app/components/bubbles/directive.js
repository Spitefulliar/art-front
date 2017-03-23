//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$location',
  function ($rootScope, $http, $timeout, $window, $state, $location) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      let element = $scope.element =  $($element);
      
      let matterEl = document.querySelector('#bubbles');

      let MatterAttractors = require('matter-attractors');
      let MatterWrap = require('matter-wrap');

      var MatterMethods = MatterMethods || {};

      MatterMethods.initBubbles = function() {
          var Engine = Matter.Engine,
              Render = Matter.Render,
              Runner = Matter.Runner,
              Composite = Matter.Composite,
              Composites = Matter.Composites,
              Constraint = Matter.Constraint,
              Common = Matter.Common,
              MouseConstraint = Matter.MouseConstraint,
              Mouse = Matter.Mouse,
              World = Matter.World,
              Body = Matter.Body,
              Bodies = Matter.Bodies,
              Events = Matter.Events,
              Vector = Matter.Vector,
              Bounds = Matter.Bounds;

          Matter.use('matter-wrap','matter-attractors');


          // create engine
          var engine = Engine.create(),
              world = engine.world;

          let worldWidth = element.width();
          let worldHeight = element.height();
          // let worldBoundsScale = (!$rootScope.isMobile)? 1.2: 1;
          let worldBoundsScale = 1;

          // create renderer
          var render = Render.create({
              element: matterEl,
              engine: engine,
              options: {
                  width: worldWidth,
                  height: worldHeight,
                  background: $scope.bubbles.bgColor,
                  showAngleIndicator: false,
                  wireframes: false,
                  hasBounds: true,
              }
          });

          //run render
          Render.run(render);

          // create runner
          var runner = Runner.create();
          Runner.run(runner, engine);

          //set world
          engine.timing.timeScale = 1;

          world.bounds = { 
            min: { 
              x: -worldWidth * (worldBoundsScale - 1), 
              y: - worldHeight * (worldBoundsScale - 1) 
            }, 
            max: { 
              x: worldWidth * worldBoundsScale, 
              y: worldHeight * worldBoundsScale 
            } 
          }
          world.gravity.x = 0;
          world.gravity.y = 0;
          world.gravity.scale = 0;

          // add bodies
          var offset = 10,
              options = { 
                  isStatic: false
              };

          world.bodies = [];

          //creating attracting center
          let attractingCenter = Bodies.circle(
                1, 
                1,
                20, {
                  density: 1000,
                  restitution: 0,
                  friction: 1,
                  frictionAir: 1,
                  frictionStatic: 1,
                  mass: 100000,
                  gravity: 10000,
                  isSensor: true,
                  isStatic: true,
                  // frictionAir: 0,
                  wrap: {
                      min: { x: world.bounds.min.x, y: world.bounds.min.y },
                      max: { x: world.bounds.max.x, y: world.bounds.max.y }
                  },
                  render: {
                    visible: false,
                    fillStyle: '#ffffff',
                  },
                  plugin: {
                    attractors: [
                      function(bodyA, bodyB) {
                        var force = {
                          x: (bodyA.position.x - bodyB.position.x) * 1e-4,
                          y: (bodyA.position.y - bodyB.position.y) * 1e-4,
                        };
                 
                        // apply force to both bodies 
                        Body.applyForce(bodyA, bodyA.position, Matter.Vector.neg(force));
                        Body.applyForce(bodyB, bodyB.position, force);
                      }
                    ]
                  }
              });

          World.add(world, attractingCenter);

          //creating circles
          let bubbles = [];
          let bubblesConstraints = [];

          //multiply bubbles
          // let bubblesArr = [];
          // for (var j = 5; j >= 0; j--) {
          //   bubblesArr = Array.concat(bubblesArr,$scope.bubbles.items);
          // };

          // for (var i = bubblesArr.length - 1; i >= 0; i--) {
            // let bubbleData = bubblesArr[i];
          for (var i = $scope.bubbles.items.length - 1; i >= 0; i--) {
            let bubbleData = $scope.bubbles.items[i];
            // let mass = Common.random(10, 50);
            // let gravity = 0.01;//mass / 100;
            let bodiesScale = ($rootScope.isMobile)? 0.4 : 1;
            let coordX = Common.random(world.bounds.min.x, world.bounds.max.x);
            let coordY = Common.random(world.bounds.min.y, world.bounds.max.y);
            let radius = bubbleData.size/2 * bodiesScale;//Common.random(20, 300);

            let body = Bodies.circle(
                coordX, 
                coordY,
                radius, {
                  density: 0.008,
                  restitution: 0,
                  friction: 0.002,
                  frictionAir: 0.005,
                  frictionStatic: 0.002,
                  friction: 0.02,
                  angle: 0,
                  angularSpeed: 0,
                  // mass: mass,
                  // gravity: gravity,
                  wrap: {
                      min: { x: world.bounds.min.x, y: world.bounds.min.y },
                      max: { x: world.bounds.max.x, y: world.bounds.max.y }
                  },
                  render: {
                    strokeStyle: '#ffffff',
                    fillStyle: '#ffffff',
                    lineWidth: 2,
                    cursor: 'pointer',
                    sprite: {
                      // texture: '/local/templates/articulmedia/img/icon/logo-loreal.png'
                      texture: bubbleData.image,
                      xScale: 1 * bodiesScale,
                      yScale: 1 * bodiesScale
                    }
                  },
                  plugin: {
                    attractors: [
                      function(bodyA, bodyB) {
                        return {
                          x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                          y: (bodyA.position.y - bodyB.position.y) * 1e-6,
                        };
                      }
                    ]
                  }
              });

            bubbleData.bubbleId = body.id;

            bubbles.push(body);
          };

          World.add(world, bubbles);

          // Events.on(engine, 'afterUpdate', function(event) {
          //     var time = engine.timing.timestamp;

          //     let timeScale = 0.02;
          //     let sinScale = 0.08;

              

          //     // Composite.translate(stack, {
          //     //     x: Math.sin(time * timeScale) * sinScale,
          //     //     y: Math.sin(time * timeScale) * sinScale
          //     // });

          //     // Composite.rotate(stack, Math.sin(time * 0.001) * 0.01, {
          //     //     x: 300,
          //     //     y: 300
          //     // });

          //     // var scale = 1 + (Math.sin(time * 0.001) * 0.01);

          //     // Composite.scale(stack, scale, scale, {
          //     //     x: 300,
          //     //     y: 300
          //     // });
          // });

          
             


          // add mouse control
          var mouse = Mouse.create(render.canvas),
              mouseConstraint = MouseConstraint.create(engine, {
                  mouse: mouse,
                  constraint: {
                      stiffness: 0.5,
                      render: {
                          visible: false
                      }
                  }
              });

          World.add(world, mouseConstraint);

          //mouse interractions with bodies
          Events.on(mouseConstraint, "enddrag", function(event){
            // console.log(event);
            let mdPos = event.mouse.mousedownPosition;
            let muPos = event.mouse.mouseupPosition;
            if ((Math.abs(mdPos.x - muPos.x) < 20) && (Math.abs(mdPos.y - muPos.y) < 20) && event.body) {
              let bodyId = event.body.id;
              angular.forEach($scope.bubbles.items, function(item, index) {
                if (item.bubbleId == bodyId) {
                  $window.location.href = item.link;
                };
              });
            };
          });

          // keep the mouse in sync with rendering
          render.mouse = mouse;

          // fit the render viewport to the scene
          Render.lookAt(render, {
              min: { x: 0, y: 0 },
              max: { x: worldWidth, y: worldHeight }
          });

          // get the centre of the viewport
          var viewportCentre = {
              x: render.options.width * 0.5,
              y: render.options.height * 0.5
          };

          // make the world bounds a little bigger than the render bounds

          // keep track of current bounds scale (view zoom)
          var boundsScaleTarget = 1,
              boundsScale = {
                  x: 1,
                  y: 1
              };

          // use the engine tick event to control our view
          Events.on(engine, 'beforeTick', function() {
              var world = engine.world,
                  mouse = mouseConstraint.mouse,
                  translate;

              // mouse wheel controls zoom
              var scaleFactor = mouse.wheelDelta * -0.1;
              if (scaleFactor !== 0) {
                  if ((scaleFactor < 0 && boundsScale.x >= 0.6) || (scaleFactor > 0 && boundsScale.x <= 1.4)) {
                      boundsScaleTarget += scaleFactor;
                  }
              }

              // if scale has changed
              if (Math.abs(boundsScale.x - boundsScaleTarget) > 0.01) {
                  // smoothly tween scale factor
                  scaleFactor = (boundsScaleTarget - boundsScale.x) * 0.2;
                  boundsScale.x += scaleFactor;
                  boundsScale.y += scaleFactor;

                  // scale the render bounds
                  render.bounds.max.x = render.bounds.min.x + render.options.width * boundsScale.x;
                  render.bounds.max.y = render.bounds.min.y + render.options.height * boundsScale.y;

                  // translate so zoom is from centre of view
                  translate = {
                      x: render.options.width * scaleFactor * -0.5,
                      y: render.options.height * scaleFactor * -0.5
                  };

                  Bounds.translate(render.bounds, translate);

                  // update mouse
                  Mouse.setScale(mouse, boundsScale);
                  Mouse.setOffset(mouse, render.bounds.min);
              }

              // get vector from mouse relative to centre of viewport
              var deltaCentre = Vector.sub(mouse.absolute, viewportCentre),
                  centreDist = Vector.magnitude(deltaCentre);

              // translate the view if mouse has moved over 50px from the centre of viewport
              if (centreDist > 50) {
                  // create a vector to translate the view, allowing the user to control view speed
                  var direction = Vector.normalise(deltaCentre),
                      speed = Math.min(10, Math.pow(centreDist - 50, 2) * 0.0002);

                  translate = Vector.mult(direction, speed);

                  // prevent the view moving outside the world bounds
                  if (render.bounds.min.x + translate.x < world.bounds.min.x)
                      translate.x = world.bounds.min.x - render.bounds.min.x;

                  if (render.bounds.max.x + translate.x > world.bounds.max.x)
                      translate.x = world.bounds.max.x - render.bounds.max.x;

                  if (render.bounds.min.y + translate.y < world.bounds.min.y)
                      translate.y = world.bounds.min.y - render.bounds.min.y;

                  if (render.bounds.max.y + translate.y > world.bounds.max.y)
                      translate.y = world.bounds.max.y - render.bounds.max.y;

                  // move the view
                  Bounds.translate(render.bounds, translate);

                  // we must update the mouse too
                  Mouse.setOffset(mouse, render.bounds.min);
              }

              Body.setPosition(attractingCenter, viewportCentre);
          });


          // context for MatterTools.Demo
          return {
              engine: engine,
              runner: runner,
              render: render,
              canvas: render.canvas,
              update: function() {
                let w = $(render.canvas).width();
                let h = $(render.canvas).height();
                let ratio = h/w;
                Matter.Render.setPixelRatio(render,ratio);
                Matter.Render.world(render);
              },
              stop: function() {
                  Matter.Render.stop(render);
                  Matter.Runner.stop(runner);
              },
              clear: function() {
                Matter.Engine.clear(engine);
              }
          };
      };

      let resizeMOTO = false;
      function resizeMatterObj() {
        if (!angular.isDefined($scope.matterObj)) return;
        if (resizeMOTO) $timeout.cancel(resizeMOTO);
        // $scope.matterObj.stop();
        resizeMOTO = $timeout(function(){
          // $scope.matterObj = MatterMethods.initBubbles();
          $($scope.matterObj.canvas).width(element.width()).height(element.height());
          $scope.matterObj.update();
        },100);
      };

      //initing bubbles
      $scope.matterObj = MatterMethods.initBubbles();

      //rerender matter canvas on resize
      $(window).resize(function(event) {
        resizeMatterObj();
      });

      $scope.$on(
        "$destroy",
        function( event ) {
          if (resizeMOTO) $timeout.cancel(resizeMOTO);
          if (angular.isDefined($scope.matterObj)) $scope.matterObj.clear();
        }
      );

    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
    template: require('./template.html'),
    scope: {
      'bubbles': '='
    }
  };
}];