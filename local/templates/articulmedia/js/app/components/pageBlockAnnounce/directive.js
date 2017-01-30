//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log',
  function ($rootScope, $http, $timeout, $window, $state, $log) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      //transforming block styles
      function tranformBlock(blockObj){
        let tmpBlock = blockObj;
        tmpBlock.style.aboutBgColors = $rootScope.convertHexToRgba(tmpBlock.style.aboutBgColor,[100,80,40]);
        return tmpBlock;
      };

      if ($scope.block.video) {
        let slider = $('#main-page-slider');

        function playBlockVideo(player, block) {
          $rootScope.videoPlays = true;
          $rootScope.videoStoppped = false;
          block.videoPlays = true;
          player.playVideo();
          slider.slick('slickPause');
        }
        function stopBlockVideo(player, block) {
          block.videoPlays = false;
          $rootScope.videoPlays = false;
          $rootScope.videoStoppped = true;
          slider.slick('slickPlay');
        }

        $scope.playVideo = function($event, block) {

          if (block.videoEnabled) {
            playBlockVideo(block.player, block);
            return;
          };
          block.videoEnabled = true;

          $scope.$on('youtube.player.ready', function ($event, player) {
            playBlockVideo(player,block);
          });

          $scope.$on('youtube.player.playing', function ($event, player) {
            playBlockVideo(player,block);
          });

          $scope.$on('youtube.player.paused', function ($event, player) {
            stopBlockVideo(player,block);
          });

          $scope.$on('youtube.player.ended', function ($event, player) {
            stopBlockVideo(player,block);
          });
        }
      }

      $scope.block = tranformBlock($scope.block);


      //video logic

      //eof video logic
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