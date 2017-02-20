//CONTROLLER
// import moduleConfig from './config';
// const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$http',
    function ($scope, $rootScope, $location, $log, $timeout, $window, $state, $http) {

        $scope.timeLineData = {
            timeLineItem: [
                {
                    'number': '1500',
                    'title': 'реализованных<br>проектов'
                },
                {
                    'number': '150',
                    'title': 'довольных<br>клиентов'
                },
                {
                    'number': '210',
                    'title': 'заслуженных<br>наград'
                },
                {
                    'number': '15',
                    'title': 'успешных<br>лет'
                }
            ]
        };

        $scope.slickConfigTimeLine = {
            enabled: true,
            autoplay: false,
            draggable: true,
            adaptiveHeight: false,
            autoplaySpeed: 6000,
            infinite: false,
            centerMode: true,
            centerPadding: '0px',
            cssEase: false,
            useCSS: false,
            dots: false,
            arrows: false,
            mobileFirst: true,
            respondTo: 'slider',
            swipe: true,
            easing: 'linear',
            swipeToSlide: true,
            slidesToShow: 1,
            variableWidth: true
        };

        $scope.$on(
            "pageDataLoaded",
            function () {
                $scope.items = $scope.page.timeline.items;
                console.log($scope.items);
            }
        );

        // $('.time-line').backgroundDraggable({ axis: 'x' });

        // $('.time-line').animate({
        // 	'background-position-x': '100%',
        // }, 4000);

        // $('.time-line').animate({'background-position-x': '100%'}, 4000);

        // $('.time-line').animate({
        // 	'background-position-x': '100%',
        // 	4000, function() {
        // 	/* stuff to do after animation is complete */
        // });


        // $('.time-line').backgroundDraggable({
        // 	axis: 'x',
        //   done: function() {
        //     var backgroundPosition = $('.time-line').css('background-position');
        //     console.log(backgroundPosition);
        //     $('.time-line').removeClass('time-line--forwards');
        //   }
        // });

        var $timeLine = $('.time-line');

        $timeLine.animate({
            'background-position-x': '100%'
        }, {
            duration: 4000,
            complete: function () {
                $timeLine.css('transition', 'all .5s ease');
                $timeLine.backgroundDraggable({
                    axis: 'x',
                    done: function () {
                        $timeLine.css('transition', 'none');
                    }
                });
            }
        });

    }];