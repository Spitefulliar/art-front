//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log',
  function ($rootScope, $http, $timeout, $window, $state, $log) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      let element = $scope.element =  $($element);
      
      let matterEl = document.querySelector('#bubbles');

      // $scope.$watch('slides', function() {
      //   carouselResize();
      // });

      // $scope.$on(
      //   "$destroy",
      //   function( event ) {
      //     $timeout.cancel( carouselResizeTimeout );
      //     $(window).off("resize", carouselResize);
      //   }
      // );

      var MatterMethods = MatterMethods || {};

      MatterMethods.sprites = function() {
          var Engine = Matter.Engine,
              Render = Matter.Render,
              Runner = Matter.Runner,
              Composites = Matter.Composites,
              Common = Matter.Common,
              MouseConstraint = Matter.MouseConstraint,
              Mouse = Matter.Mouse,
              World = Matter.World,
              Body = Matter.Body,
              Bodies = Matter.Bodies;

          // create world


          // create engine
          var engine = Engine.create(),
              world = engine.world;

          // create renderer
          var render = Render.create({
              element: matterEl,
              engine: engine,
              options: {
                  width: Math.min(document.documentElement.clientWidth, 800),
                  height: Math.min(document.documentElement.clientHeight, 600),
                  background: 'pink',
                  showAngleIndicator: false,
                  wireframes: false,
                  hasBounds: false,

              }
          });

          Render.run(render);

          // create runner
          var runner = Runner.create();
          Runner.run(runner, engine);

          //set world
          world.gravity.x = 0;
          world.gravity.y = 0;
          world.gravity.scale = 0;
          // add bodies
          var offset = 10,
              options = { 
                  isStatic: true
              };

          world.bodies = [];

          // these static walls will not be rendered in this sprites example, see options
          World.add(world, [
              Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, options),
              Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, options),
              Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, options),
              Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, options)
          ]);

          var stack = Composites.stack(5, 5, 4, 2, 5, 5, function(x, y) {
            return Bodies.circle(x, y, 46, {
                density: 0.0005,
                frictionAir: 0.05,
                restitution: 0.3,
                friction: 0.02,
                mass: Common.random(10, 20),
                gravity: 0.03,
                // frictionAir: 0,
                // wrap: {
                //     min: { x: 0, y: 0 },
                //     max: { x: 800, y: 600 }
                // },
                render: {
                  strokeStyle: '#ffffff',
                  fillStyle: '#ffffff',
                  lineWidth: 2,
                  sprite: {
                    texture: '/local/templates/articulmedia/img/icon/logo-loreal.png'
                  }
                }
            });
          });
          World.add(world, stack);

          // for (var i = 10 - 1; i >= 0; i--) {
          //   let body = Bodies.circle(
          //       Common.random(10, 790), 
          //       Common.random(10, 590),
          //       Common.random(4, 10), {
          //         density: 0.005,
          //         // frictionAir: 0.05,
          //         // restitution: 0.3,
          //         // friction: 0.02,
          //         mass: Common.random(10, 50),
          //         gravity: 0.001,
          //         // frictionAir: 0,
          //         // wrap: {
          //         //     min: { x: 0, y: 0 },
          //         //     max: { x: 800, y: 600 }
          //         // },
          //         render: {
          //           strokeStyle: '#ffffff',
          //           fillStyle: '#ffffff',
          //           lineWidth: 2,
          //           sprite: {
          //             texture: '/local/templates/articulmedia/img/icon/logo-loreal.png'
          //           }
          //         }
          //     });

          //   // Body.setVelocity(body, { 
          //   //     x: Common.random(-2, 2), 
          //   //     y: Common.random(-2, 2)
          //   // });

          //   World.add(world, body);
          // };
             


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
              max: { x: 800, y: 600 }
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

      MatterMethods.sprites();

    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
    template: require('./template.html'),
    scope: {
      // 'slides': '='
    }
  };
}];