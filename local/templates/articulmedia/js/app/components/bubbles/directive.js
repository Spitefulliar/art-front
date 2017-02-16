//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log',
  function ($rootScope, $http, $timeout, $window, $state, $log) {
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

          let worldWidth = element.width();//Math.min(document.documentElement.clientWidth, 800);
          let worldHeight = element.height();//Math.min(document.documentElement.clientHeight, 800);
          let worldBoundsScale = 1.4;

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

          //adding static walls
          // let wallThikness = 1;
          // let wallOptions = { 
          //   isStatic: true,
          //   render: {
          //     visible: true,
          //     // strokeStyle: '#ffffff'
          //   }
          // };
          // let warldWalls = [
          //     //hor top
          //     Bodies.rectangle(world.bounds.min.x, world.bounds.min.y, render.options.width * 100, wallThikness, wallOptions),
          //     //vert left
          //     Bodies.rectangle(world.bounds.min.x, world.bounds.min.y, wallThikness, render.options.height * 100, wallOptions),
          //     //hor bottom
          //     Bodies.rectangle(world.bounds.min.x, world.bounds.max.y, render.options.height * 100, wallThikness, wallOptions),
          //     // vert right
          //     Bodies.rectangle(world.bounds.max.x, world.bounds.min.y, wallThikness, render.options.width * 100, wallOptions)
          // ];
          // World.add(world, warldWalls);

          //creating attracting center
          let attractingCenter = Bodies.circle(
                1, 
                1,
                20, {
                  density: 1000,
                  restitution: 1,
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
          let bubblesArr = [];
          for (var j = 5; j >= 0; j--) {
            bubblesArr = Array.concat(bubblesArr,$scope.bubbles.items);
          };

          // for (var i = $scope.bubbles.items.length - 1; i >= 0; i--) {
          for (var i = bubblesArr.length - 1; i >= 0; i--) {
            // let bubbleData = $scope.bubbles.items[i];
            let bubbleData = bubblesArr[i];
            let mass = Common.random(10, 50);
            // let gravity = 0.01;//mass / 100;
            let coordX = Common.random(world.bounds.min.x, world.bounds.max.x);
            let coordY = Common.random(world.bounds.min.y, world.bounds.max.y);
            let radius = bubbleData.size/2;//Common.random(20, 300);

            let body = Bodies.circle(
                coordX, 
                coordY,
                radius, {
                  density: 0.005,
                  frictionAir: 0.005,
                  restitution: 0.3,
                  friction: 0.02,
                  mass: mass,
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
                      xScale: 1,
                      yScale: 1
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

            bubbles.push(body);
          };

          World.add(world, bubbles);

          Events.on(engine, 'afterUpdate', function(event) {
              var time = engine.timing.timestamp;

              let timeScale = 0.02;
              let sinScale = 0.08;

              

              // Composite.translate(stack, {
              //     x: Math.sin(time * timeScale) * sinScale,
              //     y: Math.sin(time * timeScale) * sinScale
              // });

              // Composite.rotate(stack, Math.sin(time * 0.001) * 0.01, {
              //     x: 300,
              //     y: 300
              // });

              // var scale = 1 + (Math.sin(time * 0.001) * 0.01);

              // Composite.scale(stack, scale, scale, {
              //     x: 300,
              //     y: 300
              // });
          });

          
             


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

                  // //adjust walls
                  // Body.setPosition(warldWalls[0], {
                  //   x: world.bounds.min.x,
                  //   y: world.bounds.min.y
                  // });
                  // Body.setPosition(warldWalls[1], {
                  //   x: world.bounds.min.x,
                  //   y: world.bounds.min.y
                  // });
                  // Body.setPosition(warldWalls[2], {
                  //   x: world.bounds.min.x,
                  //   y: world.bounds.max.y
                  // });
                  // Body.setPosition(warldWalls[3], {
                  //   x: world.bounds.max.x,
                  //   y: world.bounds.min.y
                  // });


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
              stop: function() {
                  Matter.Render.stop(render);
                  Matter.Runner.stop(runner);
              }
          };
      };

      $scope.matterObj = MatterMethods.initBubbles();

      $scope.$on(
        "$destroy",
        function( event ) {
          $scope.matterObj.stop();
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