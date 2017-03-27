//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope', '$http', '$timeout', '$window', '$state',
    function($rootScope, $http, $timeout, $window, $state) {
        var linkFunction = function linkFunction($scope, $element, $attributes) {
            let element = $($element);
            function showElements(element) {
                if (!element) return;
                element.find('md-grid-tile').each(function() {
                    if ($(this).is(':hidden')) {
                        $(this).fadeIn();
                        setTimeout(function() { showElements(element) }, 500);
                        return false;
                    }
                });
            }

            $rootScope.$on(
                "pageDataLoaded",
                function(event) {
                    $timeout(function(){
                        showElements(element);
                    },0);
                }
            );


        };
        return {
            restrict: "AE",
            link: linkFunction,
            controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
            template: require('./template.html')
        };
    }
];
